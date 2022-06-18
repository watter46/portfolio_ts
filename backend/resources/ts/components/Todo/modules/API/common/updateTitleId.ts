  // console.log(event)
  // console.log(event.item.__draggable_context.element)
  // console.log(event.newIndex)
  // console.log(event.to.parentElement.__draggable_context.element.tasks)
  // console.log(event.newIndex - 1)
  // console.log(event.newIndex + 1)

const updateTitleId = (event: any) => {
  /* position */
  const insertedIndex = event.newIndex
  const toParentTasks = event.to.parentElement.__draggable_context.element.tasks

  const insertedPosition = event.item.__draggable_context.element.task_position
  
  const getPreviousPosition = () => {
    let previousPosition: number

    if (insertedIndex !== 0) {
      previousPosition = toParentTasks[insertedIndex - 1].task_position
    } else {
      previousPosition = insertedPosition - 512
    }

    return previousPosition
  } 

  const getNextPosition = () => {
    let nextPosition: number

    if (insertedIndex + 1) {
      nextPosition = toParentTasks[insertedIndex + 1].task_position
    } else {
      nextPosition = insertedPosition + 512
    }

    return nextPosition
  }

  const calculateNewPosition = (previousPosition: number, nextPosition: number) => Math.floor((previousPosition + nextPosition) / 2)

  const newPosition = calculateNewPosition(getPreviousPosition(), getNextPosition())

  const data = {
    pre: getPreviousPosition(),
    new: newPosition,
    next: getNextPosition()
  }
  console.log(data)
  
  /* parent id (task_id) */
  // console.log(event.to.parentElement.__draggable_context.element.id)

  // console.log('title_id: ' + event.item.__draggable_context.element.title_id + ' to ' +  event.to.parentElement.__draggable_context.element.id)
}
