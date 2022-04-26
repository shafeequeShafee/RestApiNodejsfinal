///////////   Events in node js    //////////

const EventEmitter = require("events")    // it is actually a class
const emitter = new EventEmitter()

// event oru sthallath trigger cheyyum verae sthalath aceess cheyyum
emitter.on("message",(data)=>{
    console.log("event", data)
})

emitter.emit("message",{text:"user logged"})