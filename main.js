//  Capitalize  //

// const str = 'i have learned something new today';
// const words = str.split(" ");
// for (var i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
// }
// const str2 = words.join(" ");
// console.log(str2);


//  Reverse  //

// function CustomReverseString(str) {
//     if (str == "")
//       return "";
//     else
//       return CustomReverseString(str.slice(1)) + str.charAt(0);
//   }
  
//   console.log(CustomReverseString("Hello"));

//  CapitalizeVowels  //

function CustomCapitalizeVowel(str){
  const vowels = ["a", "e", "i", "o", "u"]
  let result = ""
  
  for (let i = 0; i < str.length; i++) {
    
    if(str[i] == 'a' ||    
       str[i] == 'e' ||
       str[i] == 'i' ||
       str[i] == 'o' ||
       str[i] == 'u' 
    ) {
      result+= str[i].toUpperCase();
  }
  else {
      result += str[i]
  }
  }
  return result;  
}

console.log(CustomCapitalizeVowel("ssu"));


