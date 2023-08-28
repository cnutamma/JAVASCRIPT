// using normal fn
function test(){
    let a = 100
    console.log(a)
    console.log(this)
}
 
// using fat arrow fn

let test = (a)=>{
    console.log(a)
    console.log(this)
}


test(100)