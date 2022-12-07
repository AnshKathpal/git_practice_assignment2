function checkprime(num){
let count = 0;
for(x=1;x<=num;x++){
if(x%num==0){
count++;
   }
 }
if(count == 2){
   return true;
  }
else
  {
   return false;
   }
  }
let ans = checkprime(4);
if(ans == true){
  console.log("Prime");
}else {
  console.log("Not Prime");
}