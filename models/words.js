const { Schema, model } = require('mongoose');

const WordsSchema = Schema({
    word: {
        type: String,
        required: [true, 'La palabra es obligatoria']
    },
    allowed:{
        type: Boolean,
        required: [ true, 'allowed es obligatorio']
    },
    status:{
        type: String,
        default: 'active'
    },
    dateCreate: {
        type: Date
    },
    lastDateUpdated:{
        type: Date
    },
    dateDeleted: {
        type: Date
    }
});

WordsSchema.methods.toJSON = function(){
    const { __v, _id, status, allowed , ...props } = this.toObject();
    props.id = _id;
    props.allow = allowed;
    return props;
}

// Exports module 
module.exports = model('Words', WordsSchema);