export function createRandomArray(min,max,numberOf)
{
    var temp = []
    for (var i = 0; i < numberOf; i++) {
      temp.push(getRandomInt(min, max))
    }
    return temp;
}

export function getRandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

//comma separeted value extraction
    export const removeCommaAndMakeArray = (data_string) => {
      //  console.log('hi')
      
      let initIndex = 0
      let commaIdx = data_string.indexOf(',', 0)
      // console.log(commaIdx)
      var arr = []
      while (commaIdx !== -1) {
        arr.push(
         
            data_string.substring(initIndex, commaIdx)
          
        )
        initIndex = commaIdx + 1
        commaIdx = data_string.indexOf(',', initIndex)
      }
      arr.push(
        
         data_string.substring(
            initIndex,
            data_string.length
          
        )
      )
     
      
      return arr;
    }