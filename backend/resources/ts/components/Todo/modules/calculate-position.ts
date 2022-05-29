export const calculatePosition = (event: any) => {

  const previousElement = event.item.previousElementSibling
  const nextElement = event.item.nextElementSibling

  const getNewPosition = (previousPosition: number, nextPosition: number) => Math.floor((previousPosition + nextPosition) / 2)

  let previousPosition: number
  let nextPosition: number


  if (previousElement && nextElement) {
    const previousElement_context = previousElement.__draggable_context.element
    const nextElement_context = nextElement.__draggable_context.element

    previousPosition = previousElement_context.title_position
    nextPosition = nextElement_context.title_position

    return getNewPosition(previousPosition, nextPosition)
  } 
  
  if (!previousElement) {
    const nextElement_context = nextElement.__draggable_context.element

    nextPosition = nextElement_context.title_position
    previousPosition = nextPosition - 512

    return getNewPosition(previousPosition, nextPosition)
  }
  
  if (!nextElement) {
    const previousElement_context = previousElement.__draggable_context.element

    previousPosition = previousElement_context.title_position
    nextPosition = previousPosition + 512

    return getNewPosition(previousPosition, nextPosition)
  }
}
