import { store } from "@graphprotocol/graph-ts";
import { AddedWallet, RemovedWallet } from "../generated/Users/Users";
import { loadOrCreateUser } from "./shared/User";
import { loadOrCreateWallet } from "./shared/Wallet";

export function handleAddedWallet(event: AddedWallet): void {
  let userId = event.params.user;
  let user = loadOrCreateUser(userId);

  let walletId = event.params.wallet.toHex();
  let wallet = loadOrCreateWallet(walletId);
  wallet.user = userId;
  wallet.save();
}

export function handleRemovedWallet(event: RemovedWallet): void {
  let walletId = event.params.wallet.toHex();
  let wallet = loadOrCreateWallet(walletId);
  wallet.user = null;

  if (!wallet.user && !wallet.cp) {
    store.remove("Wallet", walletId);
  } else {
    wallet.save();
  }
}
