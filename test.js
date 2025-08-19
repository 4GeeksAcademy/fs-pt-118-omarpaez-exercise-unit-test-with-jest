const {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js')


test('adds 14 + 9 to equal 23', () =>{

    let total = sum(14,9)
    expect(total).toBe(23)

})


test("One euro should be 1.07 dollars", function(){

    //const dollars = fromEuroToDollar(3.5)
    expect(fromEuroToDollar(3.5)).toBe(3.745)
})

test("3.745 dollars should be 547.75 Yenes", function(){
    expect(fromDollarToYen(3.745)).toBe(547.75)
})

test("547.75 Yenes should be 3.04", function(){
    expect(fromYenToPound(547.75)).toBe(3.045)
})

