// let number = 13;
// for(i =2 ; i < number ; i++){
//     console.log(i , number% i);
//     if(number% i ==0){
//         console.log("Not a prime number");
//         break;
//     }     
// }
// console.log("Its a prime number");


function isPrime(n) {
    for( i =2 ; i< n ; i++){
        if( n % i == 0){
            return "Not a prime number"
        }
    }
    return "Its a prime number"
}
var result = isPrime(13)
console.log(result);