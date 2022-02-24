import { TransferPropertyToCP } from "../generated/DataStorageProxy/DataStorageProxy";
import { Property, Wallet } from "../generated/schema";

export function handleTransferPropertyToCP(event: TransferPropertyToCP): void {
  let propertyId = event.params.property.toHex();
  let walletId = event.params.CP.toHex();
  let wallet = Wallet.load(walletId)!;
  let cp = wallet.cp;

  let property = Property.load(propertyId)!;
  property.cp = cp ? cp : "";
  property.save();
}
