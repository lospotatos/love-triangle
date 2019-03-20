/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let amount=0;
  for (let i=0; i<preferences.length; i++){
      let secondCouple = preferences[i]-1;
    
      let thirdCouple = preferences[secondCouple]-1;
      let firstRule = preferences[thirdCouple] === i+1;
      let secondRule = i+1 !== preferences[i];
      if(firstRule && secondRule){
          amount++;
      }
    
  }
  return amount/3;
};
