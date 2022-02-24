import { Wallet } from "../../generated/schema";

export function loadOrCreateWallet(walletId: string): Wallet {
  let wallet = Wallet.load(walletId);
  if (!wallet) {
    wallet = new Wallet(walletId);
    wallet.user = null;
    wallet.cp = null;
  }
  return wallet as Wallet;
}
