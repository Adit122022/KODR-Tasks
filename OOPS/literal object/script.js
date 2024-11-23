/* () - method method is something jo uska behavior bata ri hai
() function
 {} - objects / scope
  [] - array
    <> - angular brackets


    
*/
// return - terminate the function 
// this -point the near object
// prototype -  by default object that present in all objects
// we can make own prototype and  we need to inherit that user defined prototype 
// 
const prototype ={
    greet(){
        console.log('Hello World');
    }
    
}
var a=[1,2,3,4,5,6,7,8,9,10]
a.__proto__ = prototype;
a.greet()