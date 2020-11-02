// const palindrome=(str)=>{
//     if(str===str.split('').reverse().join('')){
//         console.log(true)


//     }else{
//         console.log(false)
//     }



// }


// //console.log(string);

// palindrome("racecar");




const vowels=(str)=>{

    const vowels=['a','o','i','y'];

    var count=0;
    for (const i of str) {
        if(vowels.includes(i)){

            console.log(i)
        }
        
    }



}

vowels("aldo");