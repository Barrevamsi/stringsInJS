let str = "ch@t@n@y@";
let res = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] !== "@") {
    res += str[i];
  }
}
console.log(res); 
