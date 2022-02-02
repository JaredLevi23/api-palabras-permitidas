const { validationResult } = require('express-validator');

const validateFields = (req, res, next)=>{
    // Result of validation 
    const errors = validationResult( req );
    if( !errors.isEmpty() ){
        let messages = [];
        // Load format errors
        errors.errors.forEach(element => {
            const data = {
                status: 400,
                name: 'Bad request',
                message: element.msg.toString().split('.')[1],
                customMessage: element.msg.toString().split('.')[0]
            }
            // Add error
            messages.push( data );
        });

        // response errors
        return res.status(400).json(
           [...messages]
        );
    }
    // next middleware
    next();
}

module.exports = {validateFields};