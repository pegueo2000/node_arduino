const express = require("express")
const app = express()
var server = require('http').Server(app);
var io = require('socket.io')(server);
var SerialPort = require('serialport');
const path = require('path')

const APP_PORT = 3000




var port = new SerialPort('COM12',{ 
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'));
app.get("/",(req, res)=>{

    res.render('index')
})
app.get("/distance",(req, res)=>{
    res.render('distance')
})
app.get("/rfid",(req, res)=>{
    res.render("rfid")
})

io.on('connection', function(socket) {
    
    console.log('Node is listening to port');
    
    socket.on('data', function(data) {
    
        console.log('Node is listening to port: '+data);
        if(data == "allumer")
        {
            port.write('1')
            console.log("envoyer a")
        }
        if(data == "eteindre")
        {
            port.write('0')
            console.log("envoyer e")
        }
            
        
    });
});

server.listen(3000, function(){
    console.log('listening on *:3000');
});



