typeof 42; // number
typeof "abc"; // string
typeof true; // boolean
typeof undefined; // undefined
typeof null; // object (bug!)
typeof { a : "1" }; // object
typeof [1, 2, 3]; // object
typeof function hello() {}; // function

/*
null 은 object 반환
array 도 object 반환
*/
