// https://github.com/mcollina/mosca/wiki/Mosca-basic-usage
var mosca = require('mosca');

var pubsubsettings = {
  type: 'mqtt',
  json: false,
  mqtt: require('mqtt'),
  host: '127.0.0.1',
  port: 1883
};

var moscaSettings = {
  host: '10.0.1.40',
  port: 1883,			//mosca (mqtt) port
  // backend: pubsubsettings	//pubsubsettings is the object we created above 
};

// var server = new mosca.Server(moscaSettings);

var server = new mosca.Server(moscaSettings);	//here we start mosca

server.on('ready', setup);	//on init it fires up setup()

server.on('clientConnected', function(client) {
  console.log('new client connected');
  console.log(client);
})

server.on('clientDisconnecting', function(client) {
  console.log('client disconnecting');
  console.log(client);
})
server.on('clientDisconnected', function(client) {
  console.log('client disconnected');
  console.log(client);
})

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running')
}