// Capitalize //

const str = 'i have learned something new today';
const words = str.split(" ");
for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1) ;
}
const str2 = words.join(" ");
console.log(str2);


// Reverse //

