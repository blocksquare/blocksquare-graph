import { store } from "@graphprotocol/graph-ts";
import { PropertyCapitalStack, PropertyUser } from "../generated/schema";
import {
  CapitalStackChange,
  Transfer,
} from "../generated/templates/Property/Property";
import { BIGINT_ONE, BIGINT_ZERO, ZERO_ADDRESS } from "./shared/constants";

import { createPropertyUser } from "./shared/PropertyUser";
import { loadOrCreateToken } from "./shared/Token";

export function handleTransfer(event: Transfer): void {
  let propertyId = event.address.toHex();
  let token = loadOrCreateToken(propertyId);

  if (event.params.value > BIGINT_ZERO) {
    if (event.params.from == ZERO_ADDRESS) {
      token.totalSupply = token.totalSupply.plus(event.params.value);
    } else {
      let fromUserId = event.params.from.toHex();
      let fromPropertyUserId = propertyId + "-" + fromUserId;
      let fromPropertyUser = PropertyUser.load(fromPropertyUserId)!;
      let newAmount = fromPropertyUser.amount.minus(event.params.value);
      if (newAmount.isZero()) {
        token.totalHolders = token.totalHolders.minus(BIGINT_ONE);
        store.remove("PropertyUser", fromPropertyUserId);
      } else {
        fromPropertyUser.amount = newAmount;
        fromPropertyUser.save();
      }
    }

    if (event.params.to == ZERO_ADDRESS) {
      token.totalSupply = token.totalSupply.minus(event.params.value);
    } else {
      let toUserId = event.params.to.toHex();
      let toPropertyUserId = propertyId + "-" + toUserId;
      let toPropertyUser = PropertyUser.load(toPropertyUserId);
      if (!toPropertyUser) {
        toPropertyUser = createPropertyUser(propertyId, toUserId);
        token.totalHolders = token.totalHolders.plus(BIGINT_ONE);
      }
      let newAmount = toPropertyUser.amount.plus(event.params.value);
      toPropertyUser.amount = newAmount;
      toPropertyUser.save();
    }
  }

  token.totalTransfers = token.totalTransfers.plus(BIGINT_ONE);
  token.save();
}

export function handleCapitalStackChange(event: CapitalStackChange): void {
  let propertyId = event.params.property.toHex();
  let propertyCapitalStackId = propertyId + "-" + event.logIndex.toString();
  let propertyCapitalStack = new PropertyCapitalStack(propertyCapitalStackId);
  propertyCapitalStack.property = propertyId;
  propertyCapitalStack.timestamp = event.block.timestamp;
  propertyCapitalStack.cap = event.params.tokenizationAmount;
  propertyCapitalStack.commonEquity = event.params.commonEquity;
  propertyCapitalStack.preferredEquity = event.params.preferredEquity;
  propertyCapitalStack.mezzanine = event.params.mezzanine;
  propertyCapitalStack.juniorDebt = event.params.juniorDebt;
  propertyCapitalStack.seniorDebt = event.params.seniorDebt;
  propertyCapitalStack.save();
}
