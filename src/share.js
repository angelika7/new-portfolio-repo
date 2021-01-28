/* export const findItemAndModify = (array, id) => {
    let element = array.findIndex((element) =>  element.id === id)
    if(element) {
      return {
        ...element,
        isFlipped: !element.isFlipped
      }
    }
    return undefined
}  */

  
export const findItemAndModify  = (array, id) => {
  const element = array.findIndex(element => element.id === id);

  const newArr = array.map(el => {
    if(el.id === id) {
      return {
        ...element,
        isFlipped: !el.isFlipped
      }
    }
    return undefined
  })

  return newArr
}

