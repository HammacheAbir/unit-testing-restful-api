import request from "supertest"
import app from "../app.js"
import {setupDB} from "../test-setup"
const User = require('../models/User')


setupDB("testdb")

describe("Testing app",()=>{
    describe("testing post /login",()=>{
        test("should return status 401 when password isnt provided",async()=>{
            const response = await request(app).post("/login").send({name:"abir"})
            expect(response.status).toBe(401)
        })
    
        test("should return status 404 when user doesnt exist",async()=>{
            const response = await request(app).post("/login").send({name:"abir",password:123})
            expect(response.status).toBe(404)
        })
    
        test("should work successfully when user and pwd are correct",async()=>{
            const response = await request(app).post("/login").send({name:"Zell",password:'12345678'})
            expect(response.status).toBe(200)
            expect(response.body.userId).toBe(0)
        })
    })
    

    test("should return the list of users",async()=>{
        const response = await request(app).get("/users")

        expect(response.body.users.length).toBe(3)
        expect(response.body.users[0]).toMatchObject({
            name: 'Zell',
            email: 'testing1@gmail.com',
            password: '12345678'
          })
    })

    describe("testing post /signup",()=>{
        test("should be in the database",async()=>{
            await request(app).post("/signup").send({
                name:"abir",
                email:"abirhammache@gmail.com",
                password:"123456"
            })

            const user = await User.findOne({email:"testing1@gmail.com"})

            expect(user.name).toBe("Zell")
        })
    })

})