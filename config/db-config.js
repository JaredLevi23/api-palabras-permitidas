const mongoose = require('mongoose');

// Connection to Mongo
const dbConnection = async ()=>{
    try{
        await mongoose.connect( process.env.MONGODB_CNN );
        console.log('Database online');
    }catch( err ){
        console.error( err );
        throw new Error( 'Error: database not found' );
    }
}

module.exports = {
    dbConnection
}