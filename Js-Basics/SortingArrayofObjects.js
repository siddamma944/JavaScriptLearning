let arr=[{id:1, name:"siddu"},{id:2, name:"Jilani"}];
let sorted=arr.sort((a,b)=>{
    if(a.name<b.name){
        return -1;
    }
    if(a.name>b.name){
        return 1;
    }
    return 0;
})
console.log(sorted);