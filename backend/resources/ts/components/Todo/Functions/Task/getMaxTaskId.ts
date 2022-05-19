import type { TitleType } from '../type'

export default function getMaxTaskId(list: TitleType[]) {
  const tasksList = list.flatMap(titles => titles.tasks)

  const taskIdList = tasksList.flatMap(tasks => typeof tasks !== 'undefined'? tasks.id : 0)

  const maxTaskId = taskIdList.length ? Math.max(...taskIdList) : 0
  
  return maxTaskId
}
