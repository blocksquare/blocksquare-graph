import { store } from "@graphprotocol/graph-ts";
import {
  AddedCertifiedPartner,
  AddedWallet,
  AddedWhitelisted,
  RemovedWallet,
  RemovedWhitelisted,
} from "../generated/CertifiedPartners/CertifiedPartners";

import { loadOrCreateCertifiedPartner } from "./shared/CertifiedPartner";
import { loadOrCreateUserPartner } from "./shared/UserCertifiedPartner";
import { loadOrCreateWallet } from "./shared/Wallet";

export function handleAddedCertifiedPartner(
  event: AddedCertifiedPartner
): void {
  let partnerId = event.params.cpBytes.toHex();
  let partner = loadOrCreateCertifiedPartner(partnerId);
  partner.name = event.params.cp;
  partner.save();
}

export function handleAddedWallet(event: AddedWallet): void {
  let partnerId = event.params.cp.toHex();
  let walletId = event.params.wallet.toHex();
  let wallet = loadOrCreateWallet(walletId);
  wallet.cp = partnerId;
  wallet.save();
}

export function handleAddedWhitelisted(event: AddedWhitelisted): void {
  let partnerId = event.params.cp.toHex();
  let users = event.params.users;
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let userPartnerId = `${user}-${partnerId}`;
    let userPartner = loadOrCreateUserPartner(userPartnerId);
    userPartner.user = user;
    userPartner.cp = partnerId;
    userPartner.save();
  }
}

export function handleRemovedWallet(event: RemovedWallet): void {
  let walletId = event.params.wallet.toHex();
  let wallet = loadOrCreateWallet(walletId);
  wallet.cp = null;
  if (!wallet.user && !wallet.cp) {
    store.remove("Wallet", walletId);
  } else {
    wallet.save();
  }
}

export function handleRemovedWhitelisted(event: RemovedWhitelisted): void {
  let partnerId = event.params.cp.toHex();
  let users = event.params.users;
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let userPartnerId = `${user}-${partnerId}`;
    store.remove("UserCertifiedPartner", userPartnerId);
  }
}
