// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class NewPropToken extends ethereum.Event {
  get params(): NewPropToken__Params {
    return new NewPropToken__Params(this);
  }
}

export class NewPropToken__Params {
  _event: NewPropToken;

  constructor(event: NewPropToken) {
    this._event = event;
  }

  get certifiedPartner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get proptoken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get createdAt(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PropertyFactory extends ethereum.SmartContract {
  static bind(address: Address): PropertyFactory {
    return new PropertyFactory("PropertyFactory", address);
  }

  createNewPropTokenFor(certifiedPartner: Address): Address {
    let result = super.call(
      "createNewPropTokenFor",
      "createNewPropTokenFor(address):(address)",
      [ethereum.Value.fromAddress(certifiedPartner)]
    );

    return result[0].toAddress();
  }

  try_createNewPropTokenFor(
    certifiedPartner: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createNewPropTokenFor",
      "createNewPropTokenFor(address):(address)",
      [ethereum.Value.fromAddress(certifiedPartner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createNewPropTokenForCPAndLI(
    certifiedPartner: Address,
    LI: Address
  ): Address {
    let result = super.call(
      "createNewPropTokenForCPAndLI",
      "createNewPropTokenForCPAndLI(address,address):(address)",
      [
        ethereum.Value.fromAddress(certifiedPartner),
        ethereum.Value.fromAddress(LI)
      ]
    );

    return result[0].toAddress();
  }

  try_createNewPropTokenForCPAndLI(
    certifiedPartner: Address,
    LI: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createNewPropTokenForCPAndLI",
      "createNewPropTokenForCPAndLI(address,address):(address)",
      [
        ethereum.Value.fromAddress(certifiedPartner),
        ethereum.Value.fromAddress(LI)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getDataProxy(): Address {
    let result = super.call("getDataProxy", "getDataProxy():(address)", []);

    return result[0].toAddress();
  }

  try_getDataProxy(): ethereum.CallResult<Address> {
    let result = super.tryCall("getDataProxy", "getDataProxy():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPropertyRegistry(): Address {
    let result = super.call(
      "getPropertyRegistry",
      "getPropertyRegistry():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getPropertyRegistry(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getPropertyRegistry",
      "getPropertyRegistry():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get dataProxy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get propertyRegistry(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateNewPropTokenForCall extends ethereum.Call {
  get inputs(): CreateNewPropTokenForCall__Inputs {
    return new CreateNewPropTokenForCall__Inputs(this);
  }

  get outputs(): CreateNewPropTokenForCall__Outputs {
    return new CreateNewPropTokenForCall__Outputs(this);
  }
}

export class CreateNewPropTokenForCall__Inputs {
  _call: CreateNewPropTokenForCall;

  constructor(call: CreateNewPropTokenForCall) {
    this._call = call;
  }

  get certifiedPartner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class CreateNewPropTokenForCall__Outputs {
  _call: CreateNewPropTokenForCall;

  constructor(call: CreateNewPropTokenForCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class CreateNewPropTokenForCPAndLICall extends ethereum.Call {
  get inputs(): CreateNewPropTokenForCPAndLICall__Inputs {
    return new CreateNewPropTokenForCPAndLICall__Inputs(this);
  }

  get outputs(): CreateNewPropTokenForCPAndLICall__Outputs {
    return new CreateNewPropTokenForCPAndLICall__Outputs(this);
  }
}

export class CreateNewPropTokenForCPAndLICall__Inputs {
  _call: CreateNewPropTokenForCPAndLICall;

  constructor(call: CreateNewPropTokenForCPAndLICall) {
    this._call = call;
  }

  get certifiedPartner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get LI(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class CreateNewPropTokenForCPAndLICall__Outputs {
  _call: CreateNewPropTokenForCPAndLICall;

  constructor(call: CreateNewPropTokenForCPAndLICall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetDataProxyCall extends ethereum.Call {
  get inputs(): SetDataProxyCall__Inputs {
    return new SetDataProxyCall__Inputs(this);
  }

  get outputs(): SetDataProxyCall__Outputs {
    return new SetDataProxyCall__Outputs(this);
  }
}

export class SetDataProxyCall__Inputs {
  _call: SetDataProxyCall;

  constructor(call: SetDataProxyCall) {
    this._call = call;
  }

  get dataProxy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDataProxyCall__Outputs {
  _call: SetDataProxyCall;

  constructor(call: SetDataProxyCall) {
    this._call = call;
  }
}

export class SetPropertyRegistryCall extends ethereum.Call {
  get inputs(): SetPropertyRegistryCall__Inputs {
    return new SetPropertyRegistryCall__Inputs(this);
  }

  get outputs(): SetPropertyRegistryCall__Outputs {
    return new SetPropertyRegistryCall__Outputs(this);
  }
}

export class SetPropertyRegistryCall__Inputs {
  _call: SetPropertyRegistryCall;

  constructor(call: SetPropertyRegistryCall) {
    this._call = call;
  }

  get propertyRegistry(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPropertyRegistryCall__Outputs {
  _call: SetPropertyRegistryCall;

  constructor(call: SetPropertyRegistryCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}