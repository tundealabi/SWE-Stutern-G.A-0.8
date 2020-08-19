//1
describe("replacewith",function(){

    it("returns a string",function(){
        expect(replaceWith("awesome","e","p")).toEqual(jasmine.any(String));
    });
    it("returns the string with the replacements",function(){
        expect(replaceWith("awesome","e","z")).toEqual("awzsomz");
    });
    it("is case sensitive",function(){
        expect(replaceWith("Foo","F","B")).toEqual("Boo");
    });
})

//2
describe("accept numbers only",function(){

    it("returns a boolean",function(){
        expect(acceptNumbersOnly(1,"foo")).toEqual(jasmine.any(Boolean));
    });
    it("returns true if arguments are numbers",function(){
        expect(acceptNumbersOnly(1,2,3,4,5,6,7)).toBe(true);
    });
    it("returns false if there is a non-number argument",function(){
        expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).toBe(false);
    });
})

//3
describe("expand array",function(){

    it("returns an array",function(){
        expect(expand([1,2,3],5)).toEqual(jasmine.any(Array));
    });
    it("takes an array of numbers and returns an array with as many numbers as specified",function(){
        expect(expand([1,2,3],3)).toEqual([1,2,3,1,2,3,1,2,3]);
    });
    it("takes an array of strings and returns an array with as many strings as specified",function(){
        expect(expand(["foo", "test"],1)).toEqual(["foo","test"]);
    });
   
})

//4
describe("mergearrays",function(){

    it("returns an array",function(){
        expect(mergeArrays([1,2,3],[5,9,10])).toEqual(jasmine.any(Array));
    });
    it("returns one array with the values sorted",function(){
        expect(mergeArrays([2,1],[3,4])).toEqual([1,2,3,4]);
    });
    it("returns one array with the values sorted in ascending order",function(){
        expect(mergeArrays([1,3,5,12],[2,4,15])).toEqual([1,2,3,4,5,12,15]);
    });
   
})

//5
describe("mergeobjects",function(){

    it("returns an object",function(){
        let o1 = { a: 1, b: 1, c: 1 };
        let o2 = { b: 2, c: 2 };

        expect(mergeObjects(o1,o2)).toEqual(jasmine.any(Object));
    });
    it("returns the target object with the properties from the source object",function(){
            var obj1= {
                        name: "Foo",
                        num: 33
            };

            var obj2 = {
                        test: "thing",
                        num: 55
            };

        expect(mergeObjects(obj1,obj2)).toEqual({name:"Foo",num:55,test:"thing"});
    });
    it("apply the sources’ properties to the target, which is returned after it is modified",function(){

           const target = { a: 1, b: 2, hello: "world"};
           const source = { b: 4, c: 5, boolean: true};

        expect(mergeObjects(target,source)).toEqual({ a: 1, b: 4, c: 5, hello: "world", boolean: true});
    });
   
})
