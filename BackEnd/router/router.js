const express=require('express')
const router=express.Router()
const {signUp}=require('../controller/user')

router.post('/',signUp)

module.exports=router