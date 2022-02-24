import { Property, Token } from "../../generated/schema";
import { BIGINT_ZERO } from "./constants";
import { createToken } from "./Token";

export function loadOrCreateProperty(propertyId: string): Property {
  let property = Property.load(propertyId);
  if (!property) {
    let token = Token.load(propertyId);
    if (!token) {
      token = createToken(propertyId);
    }

    property = new Property(propertyId);
    property.tokenValuation = BIGINT_ZERO;
    property.propertyValuation = BIGINT_ZERO;
    property.token = propertyId;
    property.propertyValuationCurrency = "";
    property.streetLocation = "";
    property.geoLocation = "";
    property.parcelNumber = "";
    property.kadastralMunicipality = "";
    property.buildingPart = BIGINT_ZERO;
    property.createdAt = BIGINT_ZERO;
    property.createdAtBlock = BIGINT_ZERO;
    property.propertyType = "";
    property.ipfs = "";
  }
  return property as Property;
}
