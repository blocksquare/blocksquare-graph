import { PropertyUser, User } from "../../generated/schema";
import { BIGINT_ZERO } from "./constants";

export function createPropertyUser(
  propertyId: string,
  userId: string
): PropertyUser {
  let propertyUserId = propertyId + "-" + userId;

  let user = User.load(userId);
  if (!user) {
    user = new User(userId);
    user.save();
  }

  let propertyUser = new PropertyUser(propertyUserId);
  propertyUser.property = propertyId;
  propertyUser.user = userId;
  propertyUser.amount = BIGINT_ZERO;
  return propertyUser;
}
