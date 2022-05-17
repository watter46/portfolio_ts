export type TitleType = {
  id: number;
  title: string;
  tasks?: TaskType[];
};

type TaskType = {
  id: number;
  task: string;
  comments?: CommentType[];
}

type CommentType = {
  id: number;
  comment: string;
};
