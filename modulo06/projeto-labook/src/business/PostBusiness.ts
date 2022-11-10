import { PostDatabase } from "../data/PostDatabase";
import { CustomError } from "../Error/CustomError";
import { PostDTO, POST_TYPES } from "../model/PostDTO";
import { generateId } from "../services/generateId";

export class PostBusiness {
  async create(input: PostDTO) {
    try {
      let message = "Success!"

      let { photo, description, type, authorId } = input

      if (!photo || !description || !authorId) {
        message = '"photo", "description" and "authorId" must be provided'
        throw new CustomError(406, message)
      }

      if (!type) {
        type = POST_TYPES.NORMAL
      }

      if(type.toLowerCase() !== POST_TYPES.NORMAL && type.toLowerCase() !== POST_TYPES.EVENT) {
        message = '"type" must be "normal" or "event".'
        throw new CustomError(406, message)
      }

      const postId: string = generateId()

      const postDatabase = new PostDatabase()
      await postDatabase.create({
        id:postId,
        photo,
        description,
        type,
        author_id: authorId
      })
      
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message || error.sqlMessage);
    }
  }
};
