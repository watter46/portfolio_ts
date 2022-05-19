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
