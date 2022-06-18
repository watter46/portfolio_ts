import { getTitlePosition, getTaskPosition, getCommentPosition } from "./getPositions"

export const getNewPosition = (columnName: string, event: any) => {
  if (columnName === 'title') {
    return getTitlePosition(event)
  }
  else if (columnName === 'task') {
    return getTaskPosition(event)
  }
  else {
    return getCommentPosition(event)
  }
}
