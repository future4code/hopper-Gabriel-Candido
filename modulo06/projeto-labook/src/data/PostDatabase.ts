import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_posts"

  async create({id, photo, description, type, author_id}: any):Promise<void> {
    await PostDatabase
    .connection
    .insert({
      id,
      photo,
      description,
      type,
      author_id
    }).into(PostDatabase.TABLE_NAME)
  }
}
