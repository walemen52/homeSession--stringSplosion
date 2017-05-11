/* QUESTION 2:*
You are to implement a `StringSplosion` class whose constructor accepts a string argument. 
Your class should contain a `manipulate()` method.
When an instance of this class invokes the `manipulate()` method, it returns the _sploded_ version of the string argument, based the following pattern:

`phone`   returns `pphphophonphone`
`ab`      returns `aab`
`like`    returns `lliliklike`*/

describe(" String splosion", function(){

    it("should manipulate the string", function(){
        var stringSplosion = new StringSplosion("Code");
        expect(stringSplosion.manipulate()).toEqual("CCoCodCode");
    });

    it("should manipulate the string not return the expected result, 1.", function(){
        var stringSplosion = new StringSplosion("Code");
        var functionString = stringSplosion.manipulate.toString();
        expect(stringSplosion.manipulate()).toEqual("CCoCodCode");
        expect(functionString.indexOf('CCoCodCode')).toBe(-1);
    });

    it("should manipulate a second time", function(){
        var stringSplosion = new StringSplosion("abc");
        expect( stringSplosion.manipulate()).toEqual("aababc");
    });

    it("should manipulate a third time", function(){
        var stringSplosion = new StringSplosion("andela");
        var functionString = stringSplosion.manipulate.toString();
        expect(stringSplosion.manipulate()).toEqual("aanandandeandelandela");
    });

     it("should manipulate the string not return the expected result, 2.", function(){
        var stringSplosion = new StringSplosion("andela");
        var functionString = stringSplosion.manipulate.toString();
        expect( stringSplosion.manipulate()).toEqual("aanandandeandelandela");
        expect(functionString.indexOf('aanandandeandelandela')).toBe(-1);
    });
});```