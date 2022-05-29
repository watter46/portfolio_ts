import type { TitleType } from '../../Store/type'

export const getMaxTaskId = (list: TitleType[]) => {
  const tasksList = list.flatMap(titles => titles.tasks)

  const taskIdList = tasksList.flatMap(tasks => typeof tasks !== 'undefined'? tasks.id : 0)

  const maxTaskId = taskIdList.length ? Math.max(...taskIdList) : 0
  
  return maxTaskId
}
