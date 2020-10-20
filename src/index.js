module.exports = function check(str, bracketsConfig) {
    let brackets = str;

    for(let i=0; i < str.length; i++) {
        for(let j=0; j < bracketsConfig.length; j++) {
          let pair = bracketsConfig[j][0] + bracketsConfig[j][1];
          brackets = brackets.replace(pair,'');
        }
      }
      if(brackets.length === 0) {
        return true;
      } else {
        return false;
      }
}
