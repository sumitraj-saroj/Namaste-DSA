let n = 5;

for(let i =0; i<n;i++){
    let row = "";
    let button = 1;
    for(j=0;j<i+1;j++){
        row = row + button;
        if(button==1){
            button = 0;

        }else{
            button = 1;
        }
    }console.log(row)
    
}