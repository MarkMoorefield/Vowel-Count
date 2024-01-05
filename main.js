function getCount(str) {
    let newStr = [];
    for(let i = 0; i < str.length; i++) {
      if (str[i].includes("a") || str[i].includes("e") || str[i].includes("i") ||
         str[i].includes("o") || str[i].includes("u")) {
          newStr.unshift(str[i])
      } 
    }
    return newStr.length;
  }