import {
  CancelOfferingCall,
  InitialInvestment,
  InitialOffer,
  InitialOfferingCanceled,
  Invested,
  OwnershipTransferred,
} from "../generated/InitialInvestment/InitialInvestment";
import { store } from "@graphprotocol/graph-ts";
import { PropertyInvestment, PropertyOffering } from "../generated/schema";
import { THREE_DAYS_IN_SECONDS } from "./shared/constants";

export function handleInitialOffer(event: InitialOffer): void {
  let propertyId = event.params.property.toHex();
  let propertyOffering = new PropertyOffering(propertyId);
  propertyOffering.property = propertyId;
  propertyOffering.price = event.params.pricePerToken;
  propertyOffering.presaleMaxInvestment = event.params.presaleMaxInvestment;
  propertyOffering.presaleMinInvestment = event.params.presaleMinInvestment;
  propertyOffering.maxInvestment = event.params.maxInvestment;
  propertyOffering.minInvestment = event.params.minInvestment;
  propertyOffering.softCap = event.params.softCap;
  propertyOffering.presaleStart = event.params.presaleStart;
  propertyOffering.presaleEnd = event.params.presaleEnd;
  propertyOffering.saleStart = event.params.presaleEnd.plus(
    THREE_DAYS_IN_SECONDS
  );
  propertyOffering.saleEnd = event.params.saleEnd;
  propertyOffering.investmentToken = event.params.investmentCurrency.toHex();
  propertyOffering.collector = event.params.collector.toHex();
  propertyOffering.feeCollector = event.params.feeCollector.toHex();
  propertyOffering.fee = event.params.fee;
  propertyOffering.save();
}

export function handleInvested(event: Invested): void {
  let propertyId = event.params.property.toHex();
  let walletId = event.params.wallet.toHex();

  let propertyInvestmentId =
    propertyId + "-" + walletId + event.logIndex.toString();
  let investment = new PropertyInvestment(propertyInvestmentId);
  investment.property = propertyId;
  investment.wallet = walletId;
  investment.investmentToken = event.params.investmentToken.toHex();
  investment.amountInvested = event.params.amountInvested;
  investment.amountReceived = event.params.amountReceived;
  investment.save();
}

export function handleInitialOfferingCanceled(
  event: InitialOfferingCanceled
): void {
  store.remove("PropertyOffering", event.params.property.toHex());
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
