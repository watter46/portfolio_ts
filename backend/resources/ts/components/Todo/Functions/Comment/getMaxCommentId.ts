import type { TitleType } from '../type'

export default function getMaxCommentId(list: TitleType[]) {
  const tasksList = list.flatMap(titles => titles.tasks)
  
  const commentList = tasksList.flatMap(tasks => tasks?.comments)
  
  const commentIdList = commentList.flatMap(comments => typeof comments !== 'undefined'? comments.id : 0)

  const maxTaskId = commentIdList.length ? Math.max(...commentIdList) : 0
  
  return maxTaskId
}
