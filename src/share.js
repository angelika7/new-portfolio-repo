export const findItemAndModify = (array, id) => {
    const element = array.find((element) =>  element.id === id)
    if(element) {
      return {
        ...element,
        isFlipped: !element.isFlipped
      }
    }
    return undefined
}


