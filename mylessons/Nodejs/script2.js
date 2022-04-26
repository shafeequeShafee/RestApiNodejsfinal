///////////   Events in node js    //////////

const EventEmitter = require("events")    // it is actually a class
const emitter = new EventEmitter()

// event oru sthallath trigger cheyyum verae sthalath aceess cheyyum
emitter.on("message",(data)=>{
    console.log("event", data.text)
})

emitter.on("logout",(data)=>{
    console.log("event", data.text)
})

emitter.emit("message",{text:"user logged"})
emitter.emit("message",{text:"user is sfq"})

emitter.emit("logout",{text:"user logout"})