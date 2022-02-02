const Words = require('../models/words');

// Verify mongoId exists
const verifyId = async( id = '' )=> {
    const exists = await Words.findById( id );
    if( !exists ){
        throw new Error('El id no existe.id not found');
    }
}

module.exports = {
    verifyId
}