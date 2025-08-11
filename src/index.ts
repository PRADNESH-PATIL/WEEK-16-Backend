import {WebSocketServer } from 'ws';

const wss = new WebSocketServer ({port: 8080});

wss.on("connection", function(socket){
    console.log("user connected")
    socket.on("message" , (e)=>{
        if (e.toString() === 'ping'){
            socket.send('pong');
        }
    })
})

/*
wss.on("connection", function(socket){
    console.log("user connected")
    setInterval(() => {
        socket.send("Current price of shoes is"+Math.random());
    },500)
    socket.on("message" , (e)=>{
        console.log(e.toString());
    })
})*/