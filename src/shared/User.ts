import { User } from "../../generated/schema";

export function loadOrCreateUser(userId: string): User {
  let user = User.load(userId);
  if (!user) {
    user = new User(userId);
    user.save();
  }
  return user as User;
}
