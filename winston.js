//  here you can uset for the error in data


const winston = require('winston');
require('winston-mongodb');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [

    new winston.transports.File({ filename: 'error.log',
     level: 'error', }),
    new winston.transports.File({ filename: 'combined.log' }),

    new winston.transports.MongoDB({ 
    
    level: 'error',
    options: {useUnifiedTopology:true},
    db:'mongodb+srv://fahad:fahad@cluster0.c5l4d.mongodb.net/user?retryWrites=true&w=majority',
  


}),
  ],
});




module.exports=logger;