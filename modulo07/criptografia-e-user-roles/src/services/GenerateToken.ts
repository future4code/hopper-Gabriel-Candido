import * as jwt from "jsonwebtoken";
import { userAuthenticationData } from "../model/user";

export class GenerateToken {
  generate({id}: userAuthenticationData ) {
    const token = jwt.sign(
      {id},
      process.env.JWT_KEY as string,
      {expiresIn: "24h"}
    );

    return token;
  };

  compare(token: string) {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as userAuthenticationData;
    const result = {
      id: payload.id,
    };

    return result;
  };
};
