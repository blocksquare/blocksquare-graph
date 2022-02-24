import {
  IPFSHashChanged,
  NameAndSymbolChange,
  PropertyBasicInfoChanged,
  PropertyInfoAdded,
  PropertyInfoChanged,
  PropertyValuationChange,
  TokenValuationChange,
} from "../generated/PropertyRegistry/PropertyRegistry";
import { Property } from "../generated/schema";
import { loadOrCreateProperty } from "./shared/Property";
import { loadOrCreateToken } from "./shared/Token";

export function handleIPFSHashChanged(event: IPFSHashChanged): void {
  let propertyId = event.params.property.toHex();
  let property = Property.load(propertyId);
  if (property) {
    property.ipfs = event.params.newIPFSHash;
    property.save();
  }
}

export function handleNameAndSymbolChange(event: NameAndSymbolChange): void {
  let propertyId = event.params.property.toHex();
  let token = loadOrCreateToken(propertyId);
  token.name = event.params.newName;
  token.symbol = event.params.newSymbol;
  token.save();
}

export function handlePropertyBasicInfoChanged(
  event: PropertyBasicInfoChanged
): void {
  let propertyId = event.params.property.toHex();
  let property = Property.load(propertyId);
  if (property) {
    property.streetLocation = event.params.streetLocation;
    property.geoLocation = event.params.geoLocation;
    property.propertyValuationCurrency = event.params.propertyValuationCurrency;
    property.propertyValuation = event.params.propertyValuation;
    property.save();
  }
}

export function handlePropertyInfoAdded(event: PropertyInfoAdded): void {
  let propertyId = event.params.property.toHex();
  let property = Property.load(propertyId);
  if (property) {
    property.propertyType = event.params.propertyType;
    property.kadastralMunicipality = event.params.kadastralMunicipality;
    property.parcelNumber = event.params.parcelNumber;
    property.buildingPart = event.params.buildingPart;
    property.save();
  }
}

export function handlePropertyInfoChanged(event: PropertyInfoChanged): void {
  let propertyId = event.params.property.toHex();
  let property = Property.load(propertyId);
  if (property) {
    property.propertyType = event.params.propertyType;
    property.kadastralMunicipality = event.params.kadastralMunicipality;
    property.parcelNumber = event.params.parcelNumber;
    property.buildingPart = event.params.buildingPart;
    property.save();
  }
}

export function handlePropertyValuationChange(
  event: PropertyValuationChange
): void {
  let propertyId = event.params.property.toHex();
  let property = Property.load(propertyId);
  if (property) {
    property.propertyValuation = event.params.newValuationProperty;
    property.save();
  }
}

export function handleTokenValuationChange(event: TokenValuationChange): void {
  let propertyId = event.params.property.toHex();
  let property = Property.load(propertyId);
  if (property) {
    property.tokenValuation = event.params.newTokenValuation;
    property.save();
  }
}
