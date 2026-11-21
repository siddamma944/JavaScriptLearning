
let elements=10;

function sum(eleements){
    let sum=0;
    for(let i=0;i<=10;i++){
        if(i%3==0){
            sum=sum+1;

        }
    }
    return sum;
}
let result=sum(elements);
console.log(result);