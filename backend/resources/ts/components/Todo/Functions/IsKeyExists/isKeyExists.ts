import type { TitleType } from '../../Store/type'

export default function isKeyExists(list: TitleType[], key: string) {
  return list.some(listContents => key in listContents)
}
