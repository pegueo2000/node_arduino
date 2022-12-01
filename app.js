const express = require("express")
/*const {pipeline} = require("serialport")
const SerialPort = require("serialport");*/

/*const parser = new parsers.Readline({
    delimiter: '\r\n'
})
SerialPort.list().then(ports => {
    ports.forEach(function(port) {
        console.log(port)
    })
})
var port = new SerialPort('/COM4', {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});
port.pipe(parser)*//*
setTimeout(function () {
    port.write("1")
},3000)*/
const app = express()
app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'));
app.listen(3000)
app.get("/",(req, res)=>{

    res.render('index')
})
app.get("/distance",(req, res)=>{
    res.render('distance')
})
app.get("/rfid",(req, res)=>{
    res.render("rfid")
})
