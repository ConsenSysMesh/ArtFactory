Session.setDefault('latestBlock', {});

Template['blockchainStatus'].helpers({
    currentBlock: function () {
        return JSON.stringify(Session.get('latestBlock'), null, 2);
    }
});

Template['deposits'].helpers({
    deposits: function () {
        return Deposits.find({},{sort: {blockNumber: -1}});
    },
    value: function(){
        return web3.fromWei(this.value, 'ether') + ' ether';
    }
});

Template['publications'].helpers({
    publications: function () {
        return Publications.find({},{sort: {blockNumber: -1}});
    },
    value: function(){
        return web3.fromWei(this.value, 'ether') + ' ether';
    }
});

Template['view'].events({
    'click button.view': function (e, template) {
        var handle;
        var content = template.find('input').value;
        if (template.lastNode.innerText == "Purchase")
          alert('attempting to purchase content: ' + content);
        else
          alert('attempting to view content: ' + content);

        // retrieve address of contract associated with content name
        var requestedContentContractAddress = content;

        // instantiate our local copy of the content contract
        var artRequested = ArtFactoryContentContract.at(requestedContentContractAddress);

        // if paid, play or download
        const requestTx = artRequested.getHandle(
          {from: web3.eth.accounts[0], gas: 500000},
          function(error, result) {
            if (!error) {
              if (result != "") console.log('Decrypting content from ' + result);

              handle = result;
              
              if (handle) {
                // PAID
                // this will download the file in absence of an appropriate browser plugin
                window.open('http://localhost:8080/ipfs/' + handle);

                // clear UI text entry field
                template.find('input').value = '';

              } else {
                // UNPAID
                // if not paid, pay - then can play/download next button activation
                const priceQueryTx = artRequested.price({}, 
                  function(error, result) {
                    if (!error) { 
                      contentPrice = result; 

                      const paymentTx = artRequested.pay(
                        {value: contentPrice, from: web3.eth.accounts[0], gas: 500000},
                        function(error, result) {
                          if (!error) {
                            console.log('content payment tx = ' + result);
                            const requestTx = artRequested.getHandle(
                              {from: web3.eth.accounts[0], gas: 500000},
                              function(error, result) {
                                if (!error) {
                                  // set UI prompt for user        
                                  template.lastNode.innerText = "Purchase Pending";
                                } else console.error(error);
                              }
                            );        
                          } else console.error(error);
                        }
                      );
                    } else console.error(error);
                  }
                );
              }
            } 
            else console.error(error);
          }
        );
    },
}); 

Template['url_publish'].events({
    'click button.publish': function (e, template) {
        const proxyurl = "http://localhost:1337/";
        var url = template.find('input').value;

        if (url != "") {
            url = url.replace(/^http:\/\//, '');
            window.IpfsApi().util.addFromURL(
              proxyurl + url,
              (err, result) => {
              if (err) {
                throw err
              } else {
                console.log("Encrypting content to " + result[0].hash + "...");
                ArtFactoryContentContract.new(
                  result[0].hash, 
                  10000000, 
                  result[0].hash, 
                  {from: web3.eth.accounts[0], gas: 1000000, data: ArtFactoryContentHex}, 
                  function(error, result) {
                    if (!error) {
                      contentCreationTransaction = result;
                      if (result.address != undefined)
                        console.log(result.address);
                      else
                        console.log("Art creation tx being mined ...");
                        console.log(result);
                    } else console.error(error);
                  }
                );
              }
            });
            template.find('input').value = '';
        }
    },
});

Template['file_publish'].events({
    'click button.file_publish': function (e, template) {
        var fileInput = template.find('input').value;
        var files = fileInput.files;

        window.IpfsApi().add(
          files,
          (err, result) => {
          if (err) {
            throw err
          }
          console.log(result)
        });
        template.find('input').value = '';
    },
});