import { toRaw } from 'vue'
import isKeyExists from './isKeyExists'
import type { TitleType } from '../../type'

export default function isNestKeyExists(list: TitleType[], listKey: string, key: string) {
  // const toRawArray = toRaw(list)

  if(isKeyExists(list, listKey)) {
    // listKeyが含まれているオブジェクトを抽出
    const listKeyInList = list.filter(listContents => listContents[listKey])
    // const listKeyInList = toRawArray.filter(listContents => listContents[listKey])

    const result = listKeyInList.some(listContents => listContents[listKey]
                                .some(nestListContents => nestListContents[key]))
    return result
  }
  else
  {
    return false
  }
}
