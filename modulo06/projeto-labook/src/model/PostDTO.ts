export enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event"
}

export interface PostDTO {
  photo: string,
  description: string,
  type: POST_TYPES,
  authorId: string
}