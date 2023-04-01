import {toUpperCaseFunction} from "../upperCaseFunction.js"

describe("Testing upper case function",()=>{
    it("should return the upper case of a given name",()=>{
        const returnedName = toUpperCaseFunction("john")
        expect(returnedName).toBe("The upper case of name is JOHN")
    })

    it("should not return the upper case of a abir",()=>{
        const returnedName = toUpperCaseFunction("abir")
        expect(returnedName).toBe("The upper case of name is abir")
    })
})