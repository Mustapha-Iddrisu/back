 const express = require('express')

 const router = express.Router()

 const {getUser,getAllUsers, AddUser, UpdateUser, deleteUser} = require('../controllers/controllers')

 router.get("/get-user/:id",getUser)
 router.get("/all-users",getAllUsers)
 router.post("/add-user",AddUser)
 router.put("/update-user/:id",UpdateUser)
 router.delete("/delete-user/:id",deleteUser)

 module.exports = router