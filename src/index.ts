export function convertData(initDataList: Array<Object>, keyMapList: Array<Array<string>>): Array<Object> {
  let initKeyList = [];
  let resultKeyList = [];
  keyMapList.forEach((initData) => {
    initKeyList.push(initData[0])
    resultKeyList.push(initData[1])
  });
  let resultValueList = []

  initDataList.map((initData)=>{
    let resultValue = initKeyList.map((initKey)=>{
      return initData[initKey]
    })
    resultValueList.push(resultValue)
  })

  return resultValueList.map((resultValueList)=>{
    let result = {}
    resultValueList.map((resultValue, index)=>{
      result[resultKeyList[index]] = resultValue
    })
    return result
  })
}