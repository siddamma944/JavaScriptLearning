const obj={
    city:"New york",
    street:"5th avenue",
    zipcode:560037
}
function showAdrees(obj){
    for(let key in obj){
        console.log(key, obj[key]);
    }
}
showAdrees(obj)