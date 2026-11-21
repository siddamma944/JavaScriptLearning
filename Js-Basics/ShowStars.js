showstarts(10);
function showstarts(input){


    for(let i=1;i<input;i++){
        let patern='';
        for(let j=0;j<i;j++){
            patern += '*';
            console.log(patern);
        }
    }
}
