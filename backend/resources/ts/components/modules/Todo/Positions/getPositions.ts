import { TaskType, TitleType, CommentType } from "../../../../Store/type"

const calculateNewPosition = (previousPosition: number, nextPosition: number) => Math.floor((previousPosition + nextPosition) / 2)

const get_is_samePosition = (previousPosition: number, nextPosition: number, newPosition: number) => {
  if (newPosition !== previousPosition &&
      newPosition !== nextPosition &&
      newPosition > 0 &&
      previousPosition > 0 &&
      nextPosition > 0)
  {
    return false
  }
  else
  {
    return true
  }
}

export const getTitlePosition = (event: any) => {
  const newIndex: number = event.newIndex
  const parentElement: TitleType[] = event.item.parentElement.__draggable_component__.list

  const previousPosition: number =  newIndex !== 0 ? parentElement[newIndex - 1].title_position : parentElement[newIndex + 1].title_position - 512
  const nextPosition: number = newIndex + 1 in parentElement ?  parentElement[newIndex + 1].title_position : parentElement[newIndex - 1].title_position + 512
  
  const newPosition: number = calculateNewPosition(previousPosition, nextPosition)

  const is_samePosition = get_is_samePosition(previousPosition, nextPosition, newPosition)

  return { newPosition, is_samePosition }
}

export const getTaskPosition = (event: any) => {
  const newIndex: number = event.newIndex
  const parentElement: TaskType[] = event.to.parentElement.__draggable_context.element.tasks

  if (parentElement.length !== 1) {
    const previousPosition: number =  newIndex !== 0 ? parentElement[newIndex - 1].task_position : parentElement[newIndex + 1].task_position - 512
    const nextPosition: number = newIndex + 1 in parentElement ?  parentElement[newIndex + 1].task_position : parentElement[newIndex - 1].task_position + 512

    const newPosition: number = calculateNewPosition(previousPosition, nextPosition)

    const is_samePosition = get_is_samePosition(previousPosition, nextPosition, newPosition)

    return { newPosition, is_samePosition }
  }
  else
  {
    const newPosition = 1024
    const is_samePosition = false

    return { newPosition, is_samePosition }
  }
}

export const getCommentPosition = (event: any) => {
  const newIndex: number = event.newIndex
  const parentElement: CommentType[] = event.to.parentElement.__draggable_context.element.comments

  if (parentElement.length !== 1) {
    const previousPosition: number =  newIndex !== 0 ? parentElement[newIndex - 1].comment_position : parentElement[newIndex + 1].comment_position - 512
    const nextPosition: number = newIndex + 1 in parentElement ?  parentElement[newIndex + 1].comment_position : parentElement[newIndex - 1].comment_position + 512

    const newPosition: number = calculateNewPosition(previousPosition, nextPosition)

    const is_samePosition = get_is_samePosition(previousPosition, nextPosition, newPosition)

    return { newPosition, is_samePosition }
  }
  else
  {
    const newPosition = 1024
    const is_samePosition = false

    return { newPosition, is_samePosition }
  }
}
