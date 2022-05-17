import isKeyExists from './IsKeyExists/isKeyExists'
import type { TitleType } from '../type'

export default function getMaxTitleId(list: TitleType[], key: string) {
  const returnMaxTitleId = (list: TitleType[], key: string) => {
    if (isKeyExists(list, key)) {
    const idList = list.map(title => (title.id) ? title.id : 0)

    console.log("getMax true")
    return Math.max(...idList.flat())
    }
    else
    {
      console.log("getMax false")
      return 0
    }
  }

  
  const maxTitleId = returnMaxTitleId(list, key)

  return maxTitleId 
}
