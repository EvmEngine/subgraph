// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class EVME_ModuleInstalled extends EthereumEvent {
  get params(): EVME_ModuleInstalled__Params {
    return new EVME_ModuleInstalled__Params(this);
  }
}

export class EVME_ModuleInstalled__Params {
  _event: EVME_ModuleInstalled;

  constructor(event: EVME_ModuleInstalled) {
    this._event = event;
  }

  get module(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class EVME_ModuleRemoved extends EthereumEvent {
  get params(): EVME_ModuleRemoved__Params {
    return new EVME_ModuleRemoved__Params(this);
  }
}

export class EVME_ModuleRemoved__Params {
  _event: EVME_ModuleRemoved;

  constructor(event: EVME_ModuleRemoved) {
    this._event = event;
  }

  get module(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class EVME_RoleGiven extends EthereumEvent {
  get params(): EVME_RoleGiven__Params {
    return new EVME_RoleGiven__Params(this);
  }
}

export class EVME_RoleGiven__Params {
  _event: EVME_RoleGiven;

  constructor(event: EVME_RoleGiven) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get roleId(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class BaseContract extends SmartContract {
  static bind(address: Address): BaseContract {
    return new BaseContract("BaseContract", address);
  }

  $__dyExtensions(_functionSig: Bytes): Bytes {
    let result = super.call("$__dyExtensions", [
      EthereumValue.fromFixedBytes(_functionSig)
    ]);

    return result[0].toBytes();
  }

  try_$__dyExtensions(_functionSig: Bytes): CallResult<Bytes> {
    let result = super.tryCall("$__dyExtensions", [
      EthereumValue.fromFixedBytes(_functionSig)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  $__dyFunctions(_functionSig: Bytes): Address {
    let result = super.call("$__dyFunctions", [
      EthereumValue.fromFixedBytes(_functionSig)
    ]);

    return result[0].toAddress();
  }

  try_$__dyFunctions(_functionSig: Bytes): CallResult<Address> {
    let result = super.tryCall("$__dyFunctions", [
      EthereumValue.fromFixedBytes(_functionSig)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  $__modules(_module: Address): boolean {
    let result = super.call("$__modules", [EthereumValue.fromAddress(_module)]);

    return result[0].toBoolean();
  }

  try_$__modules(_module: Address): CallResult<boolean> {
    let result = super.tryCall("$__modules", [
      EthereumValue.fromAddress(_module)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  $__role(_user: Address): i32 {
    let result = super.call("$__role", [EthereumValue.fromAddress(_user)]);

    return result[0].toI32();
  }

  try_$__role(_user: Address): CallResult<i32> {
    let result = super.tryCall("$__role", [EthereumValue.fromAddress(_user)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toI32());
  }
}

export class $__installCall extends EthereumCall {
  get inputs(): $__installCall__Inputs {
    return new $__installCall__Inputs(this);
  }

  get outputs(): $__installCall__Outputs {
    return new $__installCall__Outputs(this);
  }
}

export class $__installCall__Inputs {
  _call: $__installCall;

  constructor(call: $__installCall) {
    this._call = call;
  }

  get _bytesData(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class $__installCall__Outputs {
  _call: $__installCall;

  constructor(call: $__installCall) {
    this._call = call;
  }
}

export class $__installModuleCall extends EthereumCall {
  get inputs(): $__installModuleCall__Inputs {
    return new $__installModuleCall__Inputs(this);
  }

  get outputs(): $__installModuleCall__Outputs {
    return new $__installModuleCall__Outputs(this);
  }
}

export class $__installModuleCall__Inputs {
  _call: $__installModuleCall;

  constructor(call: $__installModuleCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _promoCode(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _bytesData(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class $__installModuleCall__Outputs {
  _call: $__installModuleCall;

  constructor(call: $__installModuleCall) {
    this._call = call;
  }
}

export class $__installModuleBulkCall extends EthereumCall {
  get inputs(): $__installModuleBulkCall__Inputs {
    return new $__installModuleBulkCall__Inputs(this);
  }

  get outputs(): $__installModuleBulkCall__Outputs {
    return new $__installModuleBulkCall__Outputs(this);
  }
}

export class $__installModuleBulkCall__Inputs {
  _call: $__installModuleBulkCall;

  constructor(call: $__installModuleBulkCall) {
    this._call = call;
  }

  get _module(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _promoCode(): Array<string> {
    return this._call.inputValues[1].value.toStringArray();
  }

  get _bytesData(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }
}

export class $__installModuleBulkCall__Outputs {
  _call: $__installModuleBulkCall;

  constructor(call: $__installModuleBulkCall) {
    this._call = call;
  }
}

export class $__removeModuleCall extends EthereumCall {
  get inputs(): $__removeModuleCall__Inputs {
    return new $__removeModuleCall__Inputs(this);
  }

  get outputs(): $__removeModuleCall__Outputs {
    return new $__removeModuleCall__Outputs(this);
  }
}

export class $__removeModuleCall__Inputs {
  _call: $__removeModuleCall;

  constructor(call: $__removeModuleCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bytesData(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class $__removeModuleCall__Outputs {
  _call: $__removeModuleCall;

  constructor(call: $__removeModuleCall) {
    this._call = call;
  }
}

export class $__removeModuleBulkCall extends EthereumCall {
  get inputs(): $__removeModuleBulkCall__Inputs {
    return new $__removeModuleBulkCall__Inputs(this);
  }

  get outputs(): $__removeModuleBulkCall__Outputs {
    return new $__removeModuleBulkCall__Outputs(this);
  }
}

export class $__removeModuleBulkCall__Inputs {
  _call: $__removeModuleBulkCall;

  constructor(call: $__removeModuleBulkCall) {
    this._call = call;
  }

  get _module(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _bytesData(): Array<Bytes> {
    return this._call.inputValues[1].value.toBytesArray();
  }
}

export class $__removeModuleBulkCall__Outputs {
  _call: $__removeModuleBulkCall;

  constructor(call: $__removeModuleBulkCall) {
    this._call = call;
  }
}

export class $__setRoleCall extends EthereumCall {
  get inputs(): $__setRoleCall__Inputs {
    return new $__setRoleCall__Inputs(this);
  }

  get outputs(): $__setRoleCall__Outputs {
    return new $__setRoleCall__Outputs(this);
  }
}

export class $__setRoleCall__Inputs {
  _call: $__setRoleCall;

  constructor(call: $__setRoleCall) {
    this._call = call;
  }

  get _user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _roleID(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class $__setRoleCall__Outputs {
  _call: $__setRoleCall;

  constructor(call: $__setRoleCall) {
    this._call = call;
  }
}

export class $__setRoleBulkCall extends EthereumCall {
  get inputs(): $__setRoleBulkCall__Inputs {
    return new $__setRoleBulkCall__Inputs(this);
  }

  get outputs(): $__setRoleBulkCall__Outputs {
    return new $__setRoleBulkCall__Outputs(this);
  }
}

export class $__setRoleBulkCall__Inputs {
  _call: $__setRoleBulkCall;

  constructor(call: $__setRoleBulkCall) {
    this._call = call;
  }

  get _user(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _roleID(): Array<i32> {
    return this._call.inputValues[1].value.toI32Array();
  }
}

export class $__setRoleBulkCall__Outputs {
  _call: $__setRoleBulkCall;

  constructor(call: $__setRoleBulkCall) {
    this._call = call;
  }
}

export class $__uninstallCall extends EthereumCall {
  get inputs(): $__uninstallCall__Inputs {
    return new $__uninstallCall__Inputs(this);
  }

  get outputs(): $__uninstallCall__Outputs {
    return new $__uninstallCall__Outputs(this);
  }
}

export class $__uninstallCall__Inputs {
  _call: $__uninstallCall;

  constructor(call: $__uninstallCall) {
    this._call = call;
  }

  get _bytesData(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class $__uninstallCall__Outputs {
  _call: $__uninstallCall;

  constructor(call: $__uninstallCall) {
    this._call = call;
  }
}
