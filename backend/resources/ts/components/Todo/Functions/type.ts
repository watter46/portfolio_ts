export type TitleType = {
  id: number;
  title: string;
  tasks?: TaskType[];
};

export type TaskType = {
  id: number;
  task: string;
  comments?: CommentType[];
}

export type CommentType = {
  id: number;
  comment: string;
};

export type StateType = {
  testList: TitleType[];
  maxTitleId: number;
  maxTaskId: number;
  maxCommentId: number;
}

export type GridStateType = {
  gridCols: string;
  is_divide: boolean;
}
