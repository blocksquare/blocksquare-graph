import { CertifiedPartner } from "../../generated/schema";

export function loadOrCreateCertifiedPartner(
  partnerId: string
): CertifiedPartner {
  let partner = CertifiedPartner.load(partnerId);
  if (!partner) {
    partner = new CertifiedPartner(partnerId);
    partner.name = "";
  }
  return partner as CertifiedPartner;
}
