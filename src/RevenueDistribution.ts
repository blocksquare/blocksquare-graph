import { store } from '@graphprotocol/graph-ts';
import {
  RentAdded,
  RentClaimed,
  RentSent,
} from '../generated/RevenueDistribution/RevenueDistribution';

import { loadOrCreateRent } from './shared/Rent';

export function handleRentAdded(event: RentAdded): void {
  let propertyId = event.params.property.toHex();
  let users = event.params.users;
  let amounts = event.params.amounts;
  for (let i = 0; i < users.length; i++) {
    let amount = amounts[i];
    let user = users[i];
    let userId = user.toHex();
    let rentId = `${userId}-${propertyId}`;
    let rent = loadOrCreateRent(rentId);
    rent.user = userId;
    rent.property = propertyId;
    let newAmount = rent.pendingRent.plus(amount);
    rent.pendingRent = newAmount;
    rent.save();
  }
}

export function handleRentClaimed(event: RentClaimed): void {
  let propertyId = event.params.property.toHex();
  let userId = event.params.user;
  let rentId = `${userId}-${propertyId}`;
  let rent = loadOrCreateRent(rentId);
  let newAmount = rent.pendingRent.plus(event.params.amount);
  if (newAmount.isZero()) {
    store.remove('Rent', rentId);
  } else {
    rent.pendingRent = newAmount;
    rent.save();
  }
}

export function handleRentSent(event: RentSent): void {}
