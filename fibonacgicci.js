// let febo =[0,1];
// for(i =2 ; i<=10 ; i++){
//     febo[i] = febo[i-1] + febo[i-2];
// }
// console.log(febo);

function fibonaChi(n){
    let febo =[0,1];
    for(i =2 ; i<=n ; i++){
        febo[i] = febo[i-1] + febo[i-2];
    }
    return febo;
}
let result = fibonaChi(10);
console.log(result);