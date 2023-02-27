// factoraial using for loop

// var factoraial = 1
// for(i = 1 ; i<=15 ; i++){
//     factoraial =factoraial*i;
//     console.log(i, factoraial);
// }
// factoraial using function
// function factoraial(n) {
//     let factoraial =1;
//     for (i =1 ; i<=n; i++){
//         factoraial = factoraial * i;
//     }
//     return factoraial;
// }
// var result = factoraial(8);
// console.log(result);

// factoraial using while loop

// let i = 1;
// let fact = 1;
// while(i<= 10){
//     fact = fact* i;
//     console.log(i,fact);
//     i++;
// }
// function factoraial(n) {
//     let i = 1;
//     let fact = 1;
//     while(i<= n){
//          fact = fact * i;
//          i++;
// }
// return fact;
// }


// factoraialRecuricive

// let result =factoraial(5);
// console.log(result);
// let factoraial =10;
// for(i =10 ; i>=1 ; i--){
//     factoraial=factoraial*i;
//     console.log(i ,factoraial);
// }
// let i = 10
// let factoraial = 10;
// while(i>=1){
//     factoraial= factoraial * i;
//     console.log(i , factoraial);
//     i--
// }
// 5! = (5-1)!*5
// n! = (n-1)!*n
function factoraial(n) {
    if(n ==0){
        return 1;
    }else{
        return n* factoraial (n-1);
    }
}
let result = factoraial(10);
console.log(result);