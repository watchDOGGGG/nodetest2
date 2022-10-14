function Sum(s,f) {
    return s + f
}

describe('Test function for practice', () =>{
    test("Function should Return Number", () =>{
        expect(Sum(3,4)).toBe(7)
    })

    test("type to retun must be number", () =>{
        expect(Number(Sum(3,4))).toBe(7)
    })
})