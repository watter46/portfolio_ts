import isNestKeyExists from '../IsKeyExists/isNestKeyExists'
import { toRaw } from 'vue'
import type { TitleType } from '../type'

export default function getMaxTitleId(list, listKey, key) {
  const returnMaxTaskId = (list, listKey, key) => {
    if (isNestKeyExists(list, listKey, key)) {
      const toRawArray = toRaw(list)

      const listKeyInList = toRawArray.flatMap(list => list[listKey])
                                      .filter(exclude_undefined => exclude_undefined)

      const idList = listKeyInList.flatMap(listKeyInList => listKeyInList[key])
                                  .filter(exclude_undefined => exclude_undefined)

      return Math.max(...idList)
    }
    else
    {
      return 0
    }
  }
  
  /**
  * @type {number} maxTaskId タスクidの最大値
  */
  const maxTaskId = returnMaxTaskId(list, listKey, key)

  return maxTaskId 
}
