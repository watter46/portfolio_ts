export const calculatePosition = (columnName: string, event: any) => {
  const previousElement = event.item.previousElementSibling
  const nextElement = event.item.nextElementSibling

  const calculateNewPosition = (previousPosition: number, nextPosition: number) => Math.floor((previousPosition + nextPosition) / 2)


  const getPositionList = () => {
    const positionName = columnName + '_position'

    if (previousElement && nextElement) {
      const previousElement_context = previousElement.__draggable_context.element
      const nextElement_context = nextElement.__draggable_context.element

      const previousPosition: number = previousElement_context[positionName]
      const nextPosition: number = nextElement_context[positionName]
      const newPosition: number = calculateNewPosition(previousPosition, nextPosition)

      return [previousPosition, nextPosition, newPosition]
    } 
    
    if (!previousElement) {
      const nextElement_context = nextElement.__draggable_context.element

      const nextPosition: number = nextElement_context[positionName]
      const previousPosition: number = nextPosition - 512
      const newPosition: number = calculateNewPosition(previousPosition, nextPosition)

      return [previousPosition, nextPosition, newPosition]
    }
    
    if (!nextElement) {
      const previousElement_context = previousElement.__draggable_context.element

      const previousPosition: number = previousElement_context[positionName]
      const nextPosition: number = previousPosition + 512
      const newPosition: number = calculateNewPosition(previousPosition, nextPosition)

      return [previousPosition, nextPosition, newPosition]
    }
  }

  const positions = getPositionList() as [number, number, number]
  
  return positions
}
