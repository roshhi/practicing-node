const eventEmiiter = require('events');

class myEmitterClass extends eventEmiiter{} // Now myEmitter have all the classes present in eventEmitter.

const myEmitterObj = new myEmitterClass();


myEmitterObj.on('eventName',()=>
    console.log('Hello World !')
)

myEmitterObj.emit('eventName');
myEmitterObj.emit('eventName');