// type calculatePositionType = (event: any) => [number, number, number]

export const calculatePosition = (event: any) => {

  const previousElement = event.item.previousElementSibling
  const nextElement = event.item.nextElementSibling

  const calculateNewPosition = (previousPosition: number, nextPosition: number) => Math.floor((previousPosition + nextPosition) / 2)

  const getPositionList = () => {

    if (previousElement && nextElement) {
      const previousElement_context = previousElement.__draggable_context.element
      const nextElement_context = nextElement.__draggable_context.element

      const previousPosition: number = previousElement_context.title_position
      const nextPosition: number = nextElement_context.title_position
      const newPosition: number = calculateNewPosition(previousPosition, nextPosition)

      return [previousPosition, nextPosition, newPosition]
    } 
    
    if (!previousElement) {
      const nextElement_context = nextElement.__draggable_context.element

      const nextPosition: number = nextElement_context.title_position
      const previousPosition: number = nextPosition - 512
      const newPosition: number = calculateNewPosition(previousPosition, nextPosition)

      return [previousPosition, nextPosition, newPosition]
    }
    
    if (!nextElement) {
      const previousElement_context = previousElement.__draggable_context.element

      const previousPosition: number = previousElement_context.title_position
      const nextPosition: number = previousPosition + 512
      const newPosition: number = calculateNewPosition(previousPosition, nextPosition)

      return [previousPosition, nextPosition, newPosition]
    }
  }

  const positions = getPositionList() as [number, number, number]
  
  return positions
}
