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

export class EVME_BaseContractCreated extends EthereumEvent {
  get params(): EVME_BaseContractCreated__Params {
    return new EVME_BaseContractCreated__Params(this);
  }
}

export class EVME_BaseContractCreated__Params {
  _event: EVME_BaseContractCreated;

  constructor(event: EVME_BaseContractCreated) {
    this._event = event;
  }

  get base_contract(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class EVME_FeeReceiptUpdated extends EthereumEvent {
  get params(): EVME_FeeReceiptUpdated__Params {
    return new EVME_FeeReceiptUpdated__Params(this);
  }
}

export class EVME_FeeReceiptUpdated__Params {
  _event: EVME_FeeReceiptUpdated;

  constructor(event: EVME_FeeReceiptUpdated) {
    this._event = event;
  }

  get receipt(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class EVME_FeeTokenUpdated extends EthereumEvent {
  get params(): EVME_FeeTokenUpdated__Params {
    return new EVME_FeeTokenUpdated__Params(this);
  }
}

export class EVME_FeeTokenUpdated__Params {
  _event: EVME_FeeTokenUpdated;

  constructor(event: EVME_FeeTokenUpdated) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class EVME_ModuleFeePercentageUpdated extends EthereumEvent {
  get params(): EVME_ModuleFeePercentageUpdated__Params {
    return new EVME_ModuleFeePercentageUpdated__Params(this);
  }
}

export class EVME_ModuleFeePercentageUpdated__Params {
  _event: EVME_ModuleFeePercentageUpdated;

  constructor(event: EVME_ModuleFeePercentageUpdated) {
    this._event = event;
  }

  get fee(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class EVME_ModuleFeeUpdated extends EthereumEvent {
  get params(): EVME_ModuleFeeUpdated__Params {
    return new EVME_ModuleFeeUpdated__Params(this);
  }
}

export class EVME_ModuleFeeUpdated__Params {
  _event: EVME_ModuleFeeUpdated;

  constructor(event: EVME_ModuleFeeUpdated) {
    this._event = event;
  }

  get module(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get fee(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class EVME_ModuleInstallerUpdated extends EthereumEvent {
  get params(): EVME_ModuleInstallerUpdated__Params {
    return new EVME_ModuleInstallerUpdated__Params(this);
  }
}

export class EVME_ModuleInstallerUpdated__Params {
  _event: EVME_ModuleInstallerUpdated;

  constructor(event: EVME_ModuleInstallerUpdated) {
    this._event = event;
  }

  get module(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class EVME_ModulePromoCodeAdded extends EthereumEvent {
  get params(): EVME_ModulePromoCodeAdded__Params {
    return new EVME_ModulePromoCodeAdded__Params(this);
  }
}

export class EVME_ModulePromoCodeAdded__Params {
  _event: EVME_ModulePromoCodeAdded;

  constructor(event: EVME_ModulePromoCodeAdded) {
    this._event = event;
  }

  get module(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get promoCode(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get discount(): i32 {
    return this._event.parameters[2].value.toI32();
  }
}

export class EVME_ModulePromoCodeRemoved extends EthereumEvent {
  get params(): EVME_ModulePromoCodeRemoved__Params {
    return new EVME_ModulePromoCodeRemoved__Params(this);
  }
}

export class EVME_ModulePromoCodeRemoved__Params {
  _event: EVME_ModulePromoCodeRemoved;

  constructor(event: EVME_ModulePromoCodeRemoved) {
    this._event = event;
  }

  get module(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get promoCode(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class EVME_ModulePublisheUpdated extends EthereumEvent {
  get params(): EVME_ModulePublisheUpdated__Params {
    return new EVME_ModulePublisheUpdated__Params(this);
  }
}

export class EVME_ModulePublisheUpdated__Params {
  _event: EVME_ModulePublisheUpdated;

  constructor(event: EVME_ModulePublisheUpdated) {
    this._event = event;
  }

  get module(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get publisher(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class EVME_ModulePublished extends EthereumEvent {
  get params(): EVME_ModulePublished__Params {
    return new EVME_ModulePublished__Params(this);
  }
}

export class EVME_ModulePublished__Params {
  _event: EVME_ModulePublished;

  constructor(event: EVME_ModulePublished) {
    this._event = event;
  }

  get module(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get publisher(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get fee(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get title(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get info(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get namespace(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }
}

export class EVME_ModuleStatusUpdated extends EthereumEvent {
  get params(): EVME_ModuleStatusUpdated__Params {
    return new EVME_ModuleStatusUpdated__Params(this);
  }
}

export class EVME_ModuleStatusUpdated__Params {
  _event: EVME_ModuleStatusUpdated;

  constructor(event: EVME_ModuleStatusUpdated) {
    this._event = event;
  }

  get module(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get status(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class EVME_ModuleTags extends EthereumEvent {
  get params(): EVME_ModuleTags__Params {
    return new EVME_ModuleTags__Params(this);
  }
}

export class EVME_ModuleTags__Params {
  _event: EVME_ModuleTags;

  constructor(event: EVME_ModuleTags) {
    this._event = event;
  }

  get module(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tags(): Array<i32> {
    return this._event.parameters[1].value.toI32Array();
  }
}

export class EVME_ModuleUpdated extends EthereumEvent {
  get params(): EVME_ModuleUpdated__Params {
    return new EVME_ModuleUpdated__Params(this);
  }
}

export class EVME_ModuleUpdated__Params {
  _event: EVME_ModuleUpdated;

  constructor(event: EVME_ModuleUpdated) {
    this._event = event;
  }

  get module(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get title(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get info(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get namespace(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class EVME_PublishFeeUpdated extends EthereumEvent {
  get params(): EVME_PublishFeeUpdated__Params {
    return new EVME_PublishFeeUpdated__Params(this);
  }
}

export class EVME_PublishFeeUpdated__Params {
  _event: EVME_PublishFeeUpdated;

  constructor(event: EVME_PublishFeeUpdated) {
    this._event = event;
  }

  get fee(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class EVME_RequestModuleUpdate extends EthereumEvent {
  get params(): EVME_RequestModuleUpdate__Params {
    return new EVME_RequestModuleUpdate__Params(this);
  }
}

export class EVME_RequestModuleUpdate__Params {
  _event: EVME_RequestModuleUpdate;

  constructor(event: EVME_RequestModuleUpdate) {
    this._event = event;
  }

  get module(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipTransferred extends EthereumEvent {
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

export class Factory__getModuleDataResult {
  value0: Address;
  value1: Bytes;
  value2: Bytes;
  value3: Bytes;
  value4: i32;
  value5: BigInt;
  value6: Bytes;

  constructor(
    value0: Address,
    value1: Bytes,
    value2: Bytes,
    value3: Bytes,
    value4: i32,
    value5: BigInt,
    value6: Bytes
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromFixedBytes(this.value1));
    map.set("value2", EthereumValue.fromFixedBytes(this.value2));
    map.set("value3", EthereumValue.fromBytes(this.value3));
    map.set("value4", EthereumValue.fromI32(this.value4));
    map.set("value5", EthereumValue.fromUnsignedBigInt(this.value5));
    map.set("value6", EthereumValue.fromBytes(this.value6));
    return map;
  }
}

export class Factory__getModuleInterfaceResult {
  value0: i32;
  value1: Bytes;

  constructor(value0: i32, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromI32(this.value0));
    map.set("value1", EthereumValue.fromBytes(this.value1));
    return map;
  }
}

export class Factory extends SmartContract {
  static bind(address: Address): Factory {
    return new Factory("Factory", address);
  }

  baseContracts(param0: Address): boolean {
    let result = super.call("baseContracts", [
      EthereumValue.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_baseContracts(param0: Address): CallResult<boolean> {
    let result = super.tryCall("baseContracts", [
      EthereumValue.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  fee_receipt(): Address {
    let result = super.call("fee_receipt", []);

    return result[0].toAddress();
  }

  try_fee_receipt(): CallResult<Address> {
    let result = super.tryCall("fee_receipt", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  fee_token(): Address {
    let result = super.call("fee_token", []);

    return result[0].toAddress();
  }

  try_fee_token(): CallResult<Address> {
    let result = super.tryCall("fee_token", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  installerModule(): Address {
    let result = super.call("installerModule", []);

    return result[0].toAddress();
  }

  try_installerModule(): CallResult<Address> {
    let result = super.tryCall("installerModule", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  module_fee_perc(): i32 {
    let result = super.call("module_fee_perc", []);

    return result[0].toI32();
  }

  try_module_fee_perc(): CallResult<i32> {
    let result = super.tryCall("module_fee_perc", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toI32());
  }

  owner(): Address {
    let result = super.call("owner", []);

    return result[0].toAddress();
  }

  try_owner(): CallResult<Address> {
    let result = super.tryCall("owner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  publish_fee(): BigInt {
    let result = super.call("publish_fee", []);

    return result[0].toBigInt();
  }

  try_publish_fee(): CallResult<BigInt> {
    let result = super.tryCall("publish_fee", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  stringToBytes32(source: string): Bytes {
    let result = super.call("stringToBytes32", [
      EthereumValue.fromString(source)
    ]);

    return result[0].toBytes();
  }

  try_stringToBytes32(source: string): CallResult<Bytes> {
    let result = super.tryCall("stringToBytes32", [
      EthereumValue.fromString(source)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  getModuleData(_module: Address): Factory__getModuleDataResult {
    let result = super.call("getModuleData", [
      EthereumValue.fromAddress(_module)
    ]);

    return new Factory__getModuleDataResult(
      result[0].toAddress(),
      result[1].toBytes(),
      result[2].toBytes(),
      result[3].toBytes(),
      result[4].toI32(),
      result[5].toBigInt(),
      result[6].toBytes()
    );
  }

  try_getModuleData(
    _module: Address
  ): CallResult<Factory__getModuleDataResult> {
    let result = super.tryCall("getModuleData", [
      EthereumValue.fromAddress(_module)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new Factory__getModuleDataResult(
        value[0].toAddress(),
        value[1].toBytes(),
        value[2].toBytes(),
        value[3].toBytes(),
        value[4].toI32(),
        value[5].toBigInt(),
        value[6].toBytes()
      )
    );
  }

  getModuleInterface(_module: Address): Factory__getModuleInterfaceResult {
    let result = super.call("getModuleInterface", [
      EthereumValue.fromAddress(_module)
    ]);

    return new Factory__getModuleInterfaceResult(
      result[0].toI32(),
      result[1].toBytes()
    );
  }

  try_getModuleInterface(
    _module: Address
  ): CallResult<Factory__getModuleInterfaceResult> {
    let result = super.tryCall("getModuleInterface", [
      EthereumValue.fromAddress(_module)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new Factory__getModuleInterfaceResult(
        value[0].toI32(),
        value[1].toBytes()
      )
    );
  }

  iModuleProcess(_module: Address, _promoCode: string): Bytes {
    let result = super.call("iModuleProcess", [
      EthereumValue.fromAddress(_module),
      EthereumValue.fromString(_promoCode)
    ]);

    return result[0].toBytes();
  }

  try_iModuleProcess(_module: Address, _promoCode: string): CallResult<Bytes> {
    let result = super.tryCall("iModuleProcess", [
      EthereumValue.fromAddress(_module),
      EthereumValue.fromString(_promoCode)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytes());
  }

  deployBaseContract(): Address {
    let result = super.call("deployBaseContract", []);

    return result[0].toAddress();
  }

  try_deployBaseContract(): CallResult<Address> {
    let result = super.tryCall("deployBaseContract", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }
}

export class RenounceOwnershipCall extends EthereumCall {
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

export class TransferOwnershipCall extends EthereumCall {
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

export class UpdateInstallerModuleCall extends EthereumCall {
  get inputs(): UpdateInstallerModuleCall__Inputs {
    return new UpdateInstallerModuleCall__Inputs(this);
  }

  get outputs(): UpdateInstallerModuleCall__Outputs {
    return new UpdateInstallerModuleCall__Outputs(this);
  }
}

export class UpdateInstallerModuleCall__Inputs {
  _call: UpdateInstallerModuleCall;

  constructor(call: UpdateInstallerModuleCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateInstallerModuleCall__Outputs {
  _call: UpdateInstallerModuleCall;

  constructor(call: UpdateInstallerModuleCall) {
    this._call = call;
  }
}

export class UpdateFeeTokenCall extends EthereumCall {
  get inputs(): UpdateFeeTokenCall__Inputs {
    return new UpdateFeeTokenCall__Inputs(this);
  }

  get outputs(): UpdateFeeTokenCall__Outputs {
    return new UpdateFeeTokenCall__Outputs(this);
  }
}

export class UpdateFeeTokenCall__Inputs {
  _call: UpdateFeeTokenCall;

  constructor(call: UpdateFeeTokenCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateFeeTokenCall__Outputs {
  _call: UpdateFeeTokenCall;

  constructor(call: UpdateFeeTokenCall) {
    this._call = call;
  }
}

export class UpdatePublishFeeCall extends EthereumCall {
  get inputs(): UpdatePublishFeeCall__Inputs {
    return new UpdatePublishFeeCall__Inputs(this);
  }

  get outputs(): UpdatePublishFeeCall__Outputs {
    return new UpdatePublishFeeCall__Outputs(this);
  }
}

export class UpdatePublishFeeCall__Inputs {
  _call: UpdatePublishFeeCall;

  constructor(call: UpdatePublishFeeCall) {
    this._call = call;
  }

  get _fee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdatePublishFeeCall__Outputs {
  _call: UpdatePublishFeeCall;

  constructor(call: UpdatePublishFeeCall) {
    this._call = call;
  }
}

export class UpdateModuleFeePercentageCall extends EthereumCall {
  get inputs(): UpdateModuleFeePercentageCall__Inputs {
    return new UpdateModuleFeePercentageCall__Inputs(this);
  }

  get outputs(): UpdateModuleFeePercentageCall__Outputs {
    return new UpdateModuleFeePercentageCall__Outputs(this);
  }
}

export class UpdateModuleFeePercentageCall__Inputs {
  _call: UpdateModuleFeePercentageCall;

  constructor(call: UpdateModuleFeePercentageCall) {
    this._call = call;
  }

  get _fee(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class UpdateModuleFeePercentageCall__Outputs {
  _call: UpdateModuleFeePercentageCall;

  constructor(call: UpdateModuleFeePercentageCall) {
    this._call = call;
  }
}

export class UpdateFeeReceiptCall extends EthereumCall {
  get inputs(): UpdateFeeReceiptCall__Inputs {
    return new UpdateFeeReceiptCall__Inputs(this);
  }

  get outputs(): UpdateFeeReceiptCall__Outputs {
    return new UpdateFeeReceiptCall__Outputs(this);
  }
}

export class UpdateFeeReceiptCall__Inputs {
  _call: UpdateFeeReceiptCall;

  constructor(call: UpdateFeeReceiptCall) {
    this._call = call;
  }

  get _receipt(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateFeeReceiptCall__Outputs {
  _call: UpdateFeeReceiptCall;

  constructor(call: UpdateFeeReceiptCall) {
    this._call = call;
  }
}

export class SetModuleTagsCall extends EthereumCall {
  get inputs(): SetModuleTagsCall__Inputs {
    return new SetModuleTagsCall__Inputs(this);
  }

  get outputs(): SetModuleTagsCall__Outputs {
    return new SetModuleTagsCall__Outputs(this);
  }
}

export class SetModuleTagsCall__Inputs {
  _call: SetModuleTagsCall;

  constructor(call: SetModuleTagsCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tags(): Array<i32> {
    return this._call.inputValues[1].value.toI32Array();
  }
}

export class SetModuleTagsCall__Outputs {
  _call: SetModuleTagsCall;

  constructor(call: SetModuleTagsCall) {
    this._call = call;
  }
}

export class ApproveModuleCall extends EthereumCall {
  get inputs(): ApproveModuleCall__Inputs {
    return new ApproveModuleCall__Inputs(this);
  }

  get outputs(): ApproveModuleCall__Outputs {
    return new ApproveModuleCall__Outputs(this);
  }
}

export class ApproveModuleCall__Inputs {
  _call: ApproveModuleCall;

  constructor(call: ApproveModuleCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ApproveModuleCall__Outputs {
  _call: ApproveModuleCall;

  constructor(call: ApproveModuleCall) {
    this._call = call;
  }
}

export class DelistModuleCall extends EthereumCall {
  get inputs(): DelistModuleCall__Inputs {
    return new DelistModuleCall__Inputs(this);
  }

  get outputs(): DelistModuleCall__Outputs {
    return new DelistModuleCall__Outputs(this);
  }
}

export class DelistModuleCall__Inputs {
  _call: DelistModuleCall;

  constructor(call: DelistModuleCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class DelistModuleCall__Outputs {
  _call: DelistModuleCall;

  constructor(call: DelistModuleCall) {
    this._call = call;
  }
}

export class UnDelistModuleCall extends EthereumCall {
  get inputs(): UnDelistModuleCall__Inputs {
    return new UnDelistModuleCall__Inputs(this);
  }

  get outputs(): UnDelistModuleCall__Outputs {
    return new UnDelistModuleCall__Outputs(this);
  }
}

export class UnDelistModuleCall__Inputs {
  _call: UnDelistModuleCall;

  constructor(call: UnDelistModuleCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UnDelistModuleCall__Outputs {
  _call: UnDelistModuleCall;

  constructor(call: UnDelistModuleCall) {
    this._call = call;
  }
}

export class ProcessModuleUpdateCall extends EthereumCall {
  get inputs(): ProcessModuleUpdateCall__Inputs {
    return new ProcessModuleUpdateCall__Inputs(this);
  }

  get outputs(): ProcessModuleUpdateCall__Outputs {
    return new ProcessModuleUpdateCall__Outputs(this);
  }
}

export class ProcessModuleUpdateCall__Inputs {
  _call: ProcessModuleUpdateCall;

  constructor(call: ProcessModuleUpdateCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ProcessModuleUpdateCall__Outputs {
  _call: ProcessModuleUpdateCall;

  constructor(call: ProcessModuleUpdateCall) {
    this._call = call;
  }
}

export class PublishModuleCall extends EthereumCall {
  get inputs(): PublishModuleCall__Inputs {
    return new PublishModuleCall__Inputs(this);
  }

  get outputs(): PublishModuleCall__Outputs {
    return new PublishModuleCall__Outputs(this);
  }
}

export class PublishModuleCall__Inputs {
  _call: PublishModuleCall;

  constructor(call: PublishModuleCall) {
    this._call = call;
  }

  get _publisher(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _module(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _title(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get _namespace(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get _fee(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _info(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }

  get _interfaceBytes(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }
}

export class PublishModuleCall__Outputs {
  _call: PublishModuleCall;

  constructor(call: PublishModuleCall) {
    this._call = call;
  }
}

export class IModuleProcessCall extends EthereumCall {
  get inputs(): IModuleProcessCall__Inputs {
    return new IModuleProcessCall__Inputs(this);
  }

  get outputs(): IModuleProcessCall__Outputs {
    return new IModuleProcessCall__Outputs(this);
  }
}

export class IModuleProcessCall__Inputs {
  _call: IModuleProcessCall;

  constructor(call: IModuleProcessCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _promoCode(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class IModuleProcessCall__Outputs {
  _call: IModuleProcessCall;

  constructor(call: IModuleProcessCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class DeployBaseContractCall extends EthereumCall {
  get inputs(): DeployBaseContractCall__Inputs {
    return new DeployBaseContractCall__Inputs(this);
  }

  get outputs(): DeployBaseContractCall__Outputs {
    return new DeployBaseContractCall__Outputs(this);
  }
}

export class DeployBaseContractCall__Inputs {
  _call: DeployBaseContractCall;

  constructor(call: DeployBaseContractCall) {
    this._call = call;
  }
}

export class DeployBaseContractCall__Outputs {
  _call: DeployBaseContractCall;

  constructor(call: DeployBaseContractCall) {
    this._call = call;
  }

  get _base_contract(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class UpdateModuleStatusCall extends EthereumCall {
  get inputs(): UpdateModuleStatusCall__Inputs {
    return new UpdateModuleStatusCall__Inputs(this);
  }

  get outputs(): UpdateModuleStatusCall__Outputs {
    return new UpdateModuleStatusCall__Outputs(this);
  }
}

export class UpdateModuleStatusCall__Inputs {
  _call: UpdateModuleStatusCall;

  constructor(call: UpdateModuleStatusCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _disable(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class UpdateModuleStatusCall__Outputs {
  _call: UpdateModuleStatusCall;

  constructor(call: UpdateModuleStatusCall) {
    this._call = call;
  }
}

export class RequestModuleUpdateCall extends EthereumCall {
  get inputs(): RequestModuleUpdateCall__Inputs {
    return new RequestModuleUpdateCall__Inputs(this);
  }

  get outputs(): RequestModuleUpdateCall__Outputs {
    return new RequestModuleUpdateCall__Outputs(this);
  }
}

export class RequestModuleUpdateCall__Inputs {
  _call: RequestModuleUpdateCall;

  constructor(call: RequestModuleUpdateCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _title(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _info(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get _namespace(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class RequestModuleUpdateCall__Outputs {
  _call: RequestModuleUpdateCall;

  constructor(call: RequestModuleUpdateCall) {
    this._call = call;
  }
}

export class UpdateModulePublisherCall extends EthereumCall {
  get inputs(): UpdateModulePublisherCall__Inputs {
    return new UpdateModulePublisherCall__Inputs(this);
  }

  get outputs(): UpdateModulePublisherCall__Outputs {
    return new UpdateModulePublisherCall__Outputs(this);
  }
}

export class UpdateModulePublisherCall__Inputs {
  _call: UpdateModulePublisherCall;

  constructor(call: UpdateModulePublisherCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _publisher(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class UpdateModulePublisherCall__Outputs {
  _call: UpdateModulePublisherCall;

  constructor(call: UpdateModulePublisherCall) {
    this._call = call;
  }
}

export class UpdateModuleFeeCall extends EthereumCall {
  get inputs(): UpdateModuleFeeCall__Inputs {
    return new UpdateModuleFeeCall__Inputs(this);
  }

  get outputs(): UpdateModuleFeeCall__Outputs {
    return new UpdateModuleFeeCall__Outputs(this);
  }
}

export class UpdateModuleFeeCall__Inputs {
  _call: UpdateModuleFeeCall;

  constructor(call: UpdateModuleFeeCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _fee(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateModuleFeeCall__Outputs {
  _call: UpdateModuleFeeCall;

  constructor(call: UpdateModuleFeeCall) {
    this._call = call;
  }
}

export class AddModulePromoCall extends EthereumCall {
  get inputs(): AddModulePromoCall__Inputs {
    return new AddModulePromoCall__Inputs(this);
  }

  get outputs(): AddModulePromoCall__Outputs {
    return new AddModulePromoCall__Outputs(this);
  }
}

export class AddModulePromoCall__Inputs {
  _call: AddModulePromoCall;

  constructor(call: AddModulePromoCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _promoCode(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _discount(): i32 {
    return this._call.inputValues[2].value.toI32();
  }
}

export class AddModulePromoCall__Outputs {
  _call: AddModulePromoCall;

  constructor(call: AddModulePromoCall) {
    this._call = call;
  }
}

export class RemoveModulePromoCall extends EthereumCall {
  get inputs(): RemoveModulePromoCall__Inputs {
    return new RemoveModulePromoCall__Inputs(this);
  }

  get outputs(): RemoveModulePromoCall__Outputs {
    return new RemoveModulePromoCall__Outputs(this);
  }
}

export class RemoveModulePromoCall__Inputs {
  _call: RemoveModulePromoCall;

  constructor(call: RemoveModulePromoCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _promoCode(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class RemoveModulePromoCall__Outputs {
  _call: RemoveModulePromoCall;

  constructor(call: RemoveModulePromoCall) {
    this._call = call;
  }
}

export class AddModulePromoBulkCall extends EthereumCall {
  get inputs(): AddModulePromoBulkCall__Inputs {
    return new AddModulePromoBulkCall__Inputs(this);
  }

  get outputs(): AddModulePromoBulkCall__Outputs {
    return new AddModulePromoBulkCall__Outputs(this);
  }
}

export class AddModulePromoBulkCall__Inputs {
  _call: AddModulePromoBulkCall;

  constructor(call: AddModulePromoBulkCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _promoCode(): Array<string> {
    return this._call.inputValues[1].value.toStringArray();
  }

  get _discount(): Array<i32> {
    return this._call.inputValues[2].value.toI32Array();
  }
}

export class AddModulePromoBulkCall__Outputs {
  _call: AddModulePromoBulkCall;

  constructor(call: AddModulePromoBulkCall) {
    this._call = call;
  }
}

export class RemoveModulePromoBulkCall extends EthereumCall {
  get inputs(): RemoveModulePromoBulkCall__Inputs {
    return new RemoveModulePromoBulkCall__Inputs(this);
  }

  get outputs(): RemoveModulePromoBulkCall__Outputs {
    return new RemoveModulePromoBulkCall__Outputs(this);
  }
}

export class RemoveModulePromoBulkCall__Inputs {
  _call: RemoveModulePromoBulkCall;

  constructor(call: RemoveModulePromoBulkCall) {
    this._call = call;
  }

  get _module(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _promoCode(): Array<string> {
    return this._call.inputValues[1].value.toStringArray();
  }
}

export class RemoveModulePromoBulkCall__Outputs {
  _call: RemoveModulePromoBulkCall;

  constructor(call: RemoveModulePromoBulkCall) {
    this._call = call;
  }
}
