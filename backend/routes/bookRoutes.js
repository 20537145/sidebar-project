const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bookSchema = require('../models/book');
router.get('/',async(req,res)=>{
    try {
        const book = await bookSchema.find()
        if(!book){
            res.status(404).send('there is no book')
        }else{
            res.status(200).send({count : book.length,book})
            
        }
    } catch (e) {
        res.send({message:e.message})
    }
})
router.get('/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const book = await bookSchema.findById(id)
        if(!book){
            res.status(404).send('there is no book with this id')
        }else{
            res.status(200).send(book)
        }
    } catch (e) {
        res.send({message:e.message})
        
    }
})
router.post('/',async(req,res)=>{
    try {
        const data = req.body
        const book = await bookSchema.create(data)
        res.status(201).send(book)
    } catch (e) {
        res.send({message:e.message})
    }
})
router.patch('/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const data = req.body
        const book = await bookSchema.findByIdAndUpdate({_id:id},data,{new:true})
        if(!book){
            res.status(404).send('there is no book with this id')
        }else{
            res.status(201).send(book)
        }
    } catch (e) {
        res.send({message:e.message})
    }
})
router.delete('/:id',async(req,res)=>{
    try {
        const {id}=req.params
        const deletedBook = await bookSchema.findByIdAndDelete(id)
        if(!deletedBook){
            res.status(404).send('there is no book with this id')
        }else{
            res.status(200).send(deletedBook)
        }
    } catch (e) {
        res.send({message:e.message})
    }
})
module.exports = router