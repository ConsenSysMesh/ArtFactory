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
        alert('attempting to view content: ' + content);

        // retrieve address of contract associated with content name
        var requestedContentContractAddress = content;

        // instantiate our local copy of the content contract
        var artRequested = ArtFactoryContentContract.at(requestedContentContractAddress);

        const requestTx = artRequested.getHandle(
          {from: web3.eth.accounts[0], gas: 500000},
          function(error, result) {
            if (!error) {
              console.log('Requested Content handle callback result = ' + result);

              handle = result;
              
              if (handle)
              // this will download the file in absence of an appropriate browser plugin
                window.open('http://localhost:8080/ipfs/' + handle);

              template.find('input').value = '';
            } 
              else console.error(error);
          }
        );
        console.log("getHandle( ) tx request return value: " + requestTx);
    },
}); 

Template['pay'].events({
    'click button.pay': function (e, template) {
        const content = template.find('input').value;
        console.log(content);

        // retrieve address of contract associated with content name
        var requestedContentContractAddress = content;

        // instantiate our local copy of the content contract
        var artRequested = ArtFactoryContentContract.at(requestedContentContractAddress);

        const priceQueryTx = artRequested.price({}, 
          function(error, result) {
            if (!error) { 
              contentPrice = result; 

              const paymentTx = artRequested.pay(
                {value: contentPrice, from: web3.eth.accounts[0], gas: 500000},
                function(error, result) {
                  if (!error) {
                    console.log('Requested Content Result = ' + result);
                  } else console.error(error);
                }
              );
              console.log("payment tx: " + paymentTx);
            } else console.error(error);
          }
        );

        template.find('input').value = '';
    },
}); 

Template['url_publish'].events({
    'click button.publish': function (e, template) {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = template.find('input').value;

        if (url != "") {
            window.IpfsApi().util.addFromURL(
              proxyurl + url,
              (err, result) => {
              if (err) {
                throw err
              } else {
                console.log(result[0].hash);
                ArtFactoryContentContract.new(
                  result[0].hash, 
                  10000000, 
                  result[0].hash, 
                  {from: web3.eth.accounts[0], gas: 1000000, data: ArtFactoryContentHex}, 
                  function(error, result) {
                    if (!error) {
                      contentCreationTransaction = result;
                      console.log(result);
                    } 
                      else console.error(error);
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