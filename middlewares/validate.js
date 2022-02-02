const { validationResult } = require('express-validator');

const validateFields = (req, res, next)=>{

    const errors = validationResult( req );

    if( !errors.isEmpty() ){

        let messages = [];
        errors.errors.forEach(element => {

            const data = {
                status: 400,
                name: 'Bad request',
                message: element.msg.toString().split('.')[1],
                customMessage: element.msg.toString().split('.')[0]
            }

            messages.push( data );
        });

        console.log( messages );
        return res.status(400).json(
           [...messages]
        );
    }
    //Si llega a esta punto sigue con el middleware sig. 
    next();
}

module.exports = {validateFields};