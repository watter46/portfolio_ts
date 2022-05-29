import type { TitleType } from '../../Store/type'

export const getTitlePosition = (list: TitleType[]) => {

  const new_title_position = list.length ? list.slice(-1)[0].title_position + 1024 : 1024

  return new_title_position
}
