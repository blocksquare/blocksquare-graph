import { UserCertifiedPartner } from "../../generated/schema";

export function loadOrCreateUserPartner(
  userPartnerId: string
): UserCertifiedPartner {
  let userPartner = UserCertifiedPartner.load(userPartnerId);
  if (!userPartner) {
    userPartner = new UserCertifiedPartner(userPartnerId);
  }
  return userPartner as UserCertifiedPartner;
}
