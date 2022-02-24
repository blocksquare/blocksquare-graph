import { NewPropToken } from "../generated/PropertyFactory/PropertyFactory";
import { Property } from "../generated/templates";

import { loadOrCreateProperty } from "./shared/Property";
import { loadOrCreateWallet } from "./shared/Wallet";

export function handleNewPropToken(event: NewPropToken): void {
  let propertyId = event.params.proptoken.toHex();
  let cpWallet = loadOrCreateWallet(event.params.certifiedPartner.toHex());
  let property = loadOrCreateProperty(propertyId);

  let cp = cpWallet.cp;
  property.cp = cp ? cp : "";
  property.createdAt = event.block.timestamp;
  property.createdAtBlock = event.block.number;
  property.save();

  // Initialize the property listener
  Property.create(event.params.proptoken);
}
