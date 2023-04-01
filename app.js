import express from "express"
const User = require('./models/User')
import usersList from "./seeds/user.seed"
import {login} from "./service/login.js"

const app = express()

app.use(express.json())

app.post('/login', async (req, res) => {
  const { password, name } = req.body
  if (!password) {
    res.sendStatus(401)
    return
  }

  if (!name) {
    res.sendStatus(402)
    return
  }

  const User = usersList.find((user)=>user.name===name)
  
  if(User){
      if(User.password!==password){
        res.sendStatus(403)
        return
      }
  }else{
    res.sendStatus(404)
    return
  }

  res.send({ userId: 0 })
})

app.get('/users', async (req, res) => {
    res.status(300).json({ users: usersList});
})

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body
    const user = new User({ name, email, password })
    const ret = await user.save()
    res.json(ret)
})

export default app