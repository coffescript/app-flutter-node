'use strict'

const { Router } = require('express')
const router = Router()
const faker = require('faker')

//models
const User = require('../models/user')

router.get('/api/users', async (req,res) => {
  const users = await User.find()
  // res.json('User list')
  res.json({users})
})

router.get('/api/users/create', async (req,res) => {
  for(let i = 0; i < 4; i++){
    await User.create({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      avatar: faker.image.avatar()
    })
  }
  res.json({message: '5 Users created'})
})

module.exports = router