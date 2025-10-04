const eventEmiiter = require('events');
const uuid = require('uuid');

class Logger extends eventEmiiter{
    log(msg){
        this.emit('message', { id:uuid.v4(), name:'Ahmad' })
    }
};


module.exports = Logger;