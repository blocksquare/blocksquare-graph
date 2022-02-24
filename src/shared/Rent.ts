import { Rent } from "../../generated/schema";
import { BIGINT_ZERO } from "./constants";

export function loadOrCreateRent(rentId: string): Rent {
  let rent = Rent.load(rentId);
  if (!rent) {
    rent = new Rent(rentId);
    rent.pendingRent = BIGINT_ZERO;
    rent.property = "";
    rent.user = "";
  }
  return rent as Rent;
}
