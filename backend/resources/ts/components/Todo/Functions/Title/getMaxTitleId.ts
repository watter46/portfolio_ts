import type { TitleType } from '../../Store/type'

export const getMaxTitleId = (list: TitleType[]) => {
  const titleIdList = list.map(titles => titles.id)

  const maxTitleId = titleIdList.length ? Math.max(...titleIdList) : 0

  return maxTitleId
}
