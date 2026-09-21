//1. Find Duplicate Elements


const arr = [1, 2, 3, 2, 4, 5, 3, 6];
const d=arr.filter((value,index)=>{
    return arr.indexOf(value)!==index
})
console.log(d);

//Q2. Find Largest Number

const nums = [12, 45, 7, 89, 23, 56];
let largest=nums[0]
for(let num of nums){
    if (num>largest){
        largest=num
    }
}
console.log(largest);

//Q3. Count Vowels

const str = "javascript developer";
let count=0
for(let ch of str){
    if ('aeiouAEIOU'.includes(ch)){
        count++
    }
}
console.log(count);

    // Q4. Check Palindrome

const s = "madam";
let rev=""
for(let ch of s){
    rev=ch+rev
}
if(rev==s){
    console.log('Palindrome');
}


