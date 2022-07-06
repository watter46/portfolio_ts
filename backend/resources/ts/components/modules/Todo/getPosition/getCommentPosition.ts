import type { CommentType } from '../../../../Store/type'

export const getCommentPosition = (commentList: CommentType[]) => {

  const new_comment_position = commentList.length ? commentList.slice(-1)[0].comment_position + 1024 : 1024

  return new_comment_position
}
