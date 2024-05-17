
const Person = {
    Name: "Ashok Kumar",
    price: 5000000,
    currency: "Rs",
}

// function getInfo(...args) {
//     console.log(this.Name + " bought new " + args[0] +" "+ args[1] + " in " + this.currency + this.price);
// }
function getInfo(...args) {
    console.log(this.Name + " bought new " + "Red" +" "+ "ferrary" + " in " + this.currency + this.price);
}

// protype for call

Function.prototype.mycall=function(context={},...args){

    if(!this==="function")
   throw new Error(this + " is not a function");

    context.fn=this;

    context.fn(...args)

}

// protype for Apply

Function.prototype.myapply=function(context={},args=[]){

    if(!this==="function")
   throw new Error(this + " is not a function");

    if(!Array.isArray(args))
    throw new Error("CreateListFromArrayLike called on non-object");

    context.fn=this;

    context.fn(...args)

}

 // BIND

Function.prototype.myBind=function(context={}){

    if(!this==="function")
   throw new Error(this + " is not a function");

    context.fn=this;

    return context.fn(context)

}

const newfn=getInfo.myBind(Person)
console.log(newfn);

