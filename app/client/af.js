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
        var content = template.find('input').value;
        alert('attempting to view content: ' + content + '\nPurchased = ' + ArtFactoryContent.purchased.call({from: template.find('input').value, gas: 50000}));

        if (ArtFactoryContent.purchased.call({from: template.find('input').value, gas: 50000}) == true)
        // this will download the file in absence of an appropriate browser plugin
          window.open('http://localhost:8080/ipfs/' + content);

        template.find('input').value = '';
    },
}); 

Template['pay'].events({
    'click button.pay': function (e, template) {
        const content = template.find('input').value;
        console.log(content);
        window.IpfsApi().get(content, function (err, stream) {
          stream.on('data', (file) => {
            // write the file's path and contents to standard out
            console.log(file.path);
            console.log(file);
          });
        });
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
              }
              console.log(result)
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