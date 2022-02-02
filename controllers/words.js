const { response, request } = require("express");
const Words = require('../models/words');

// Get word by mongoId
const getWords = async ( req = request ,res = response  )=>{    
    // params
    const { id } = req.params;
    // query
    const word = await Words.findById( id );
    // response
    res.status(200).json( word );
}

// Get all words
const searchWords = async ( req = request ,res = response  )=>{    
    // query
    const searchData = await Words.find( {status: 'active'} );
    //response
    res.status(200).json([...searchData]);
}

// Create word
const postWords = async (req = request, res = response ) => {
    // body 
    const { word, allow } = req.body;
    // Date created
    let dateCreate = new Date().toUTCString();
    // Model of word
    const data = {
        word,
        allowed: allow,
        dateCreate,
        lastDateUpdated: dateCreate
    }
    // Create word
    const newword = new Words(data);
    // Save word
    await newword.save();
    // response 
    res.status(201).json( newword );
};

// Update word by mongoId
const putWords = async(req, res) => {
    // params
    const { id } = req.params;
    // body
    const { word, allow } = req.body;
    // Verify fields
    if( !word && !allow ){
        // response error
        return res.status( 400 ).json({
            status: 400,
            name: 'Bad request',
            message: 'word and allow not found',
            customMessage: 'Debe especificar al menos un campo word o allow'
        });
    }
    // Date created
    const lastDateUpdated = new Date().toUTCString();
    // Word update
    const wordUpdate = await Words.findByIdAndUpdate( id, { word, allowed: allow, lastDateUpdated }, { new: true });
    // Response
    res.status(200).json( wordUpdate );
}

// Delete by mongoId
const deleteWords = async(req, res) => {
    // params
    const { id } = req.params;
    // Date deleted
    const dateDeleted = new Date().toUTCString();
    // word deleted logic 
    const { word } = await Words.findByIdAndUpdate( id, { status: 'deleted', dateDeleted }, { new: true });
    // Response
    res.status(200).json({
        status: 200,
        message: `word [{ ${ word } }] deleted`,
        customMessage: `La palabra o frase [{ ${ word } }] fue eliminada`
    })
};

module.exports = {
    deleteWords,
    getWords,
    postWords,
    putWords,
    searchWords
}