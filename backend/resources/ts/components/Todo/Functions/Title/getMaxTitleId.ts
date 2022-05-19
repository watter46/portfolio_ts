import type { TitleType } from '../type'

export default function getMaxTitleId(list: TitleType[]) {
  const titleIdList = list.map(titles => titles.id)

  const maxTitleId = titleIdList.length ? Math.max(...titleIdList) : 0

  return maxTitleId
}
