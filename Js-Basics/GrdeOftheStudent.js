const arr=[90,80,100];
//average=70
//faile=1-59
//60-69-B
//70-79=c
//80-89-B
//90-100=A
grade(arr);

function grade(marks){
    let sum=0
    for(let i=0;i<marks.length;i++){
        sum=sum+marks[i];
    }
    let average=sum/marks.length;
    if(average>=90 && average<=100){
        console.log("A");

    }

}
