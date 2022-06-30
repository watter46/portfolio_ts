import type { CommentType } from "resources/ts/Store/type";

export type CommentProps = {
  titleIndex: number;
  taskIndex: number;
  commentIndex: number;
  comments: CommentType;
}
