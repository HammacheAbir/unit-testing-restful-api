export const login = (req,res)=>{
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
  }