export type TitleType = {
  id: number;
  title: string;
  title_position: number;
  tasks?: TaskType[];
};

export type TaskType = {
  id: number;
  title_id: number;
  task_position: number;
  done: boolean;
  is_showing: boolean;
  task: string;
  comments?: CommentType[];
}

export type CommentType = {
  id: number;
  task_id: number;
  comment_position: number;
  comment: string;
};

export type StateType = {
  allData: TitleType[];
}

export type GridStateType = {
  gridCols: string;
  is_divide: boolean;
}

export type ResponseTitleArrayType = TitleType[]

export type ResponseTaskArrayType = TaskType[]

export type ResponseCommentArrayType = CommentType[]
