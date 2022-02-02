const { Router } = require('express');
const { check } = require('express-validator');

const { getWords, putWords, postWords, deleteWords, searchWords } = require('../controllers/words');
const { verifyId } = require('../helpers/helpers');
const { validateFields } = require('../middlewares/validate');

const router = Router();


// Get - get word by id 
router.get('/:id',
[
    check('id', 'El id debe ser un id valido de mongo.id not found').isMongoId(),
    check('id').custom( verifyId ),
    validateFields
],getWords 
);

// Other option to get all words
router.patch('/', searchWords);

// Put - update word by id
router.put('/:id',
    [
        check('id', 'El id debe ser un id valido de mongo.id not found').isMongoId(),
        check('id').custom( verifyId ),
        validateFields
    ], putWords
);

// Post - create word
router.post('/',
    [
        check('word', 'word es obligatorio y debe ser una cadena. word not found').isString(),
        check('allow', 'allow es obligatorio y debe ser un booleano. allow not found').isBoolean(),
        validateFields
    ], postWords
);

// Delete - delete logic by id
router.delete('/:id',
    [
        check('id', 'El id debe ser un id valido de mongo.id not found').isMongoId(),
        check('id').custom( verifyId ),
        validateFields
    ], deleteWords
);

// Get all words 
router.search( '/' ,searchWords );

module.exports = router;