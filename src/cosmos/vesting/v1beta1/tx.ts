/* eslint-disable */
import { Coin } from "../../base/v1beta1/coin";
import { Period } from "./vesting";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.vesting.v1beta1";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
  /** Address of the account providing the funds, which must also sign the request. */
  fromAddress: string;
  /** Address of the vesting account to create. */
  toAddress: string;
  /** Amount to transfer to the new account. */
  amount: Coin[];
  /** End time of the vesting duration. */
  endTime: bigint;
  /**
   * If true, creates a DelayedVestingAccount,
   * otherwise creates a ContinuousVestingAccount.
   */
  delayed: boolean;
}
/** MsgCreateVestingAccountResponse defines the MsgCreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponse {}
/**
 * MsgCreatePeriodicVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreatePeriodicVestingAccount {
  /** Address of the account providing the funds, which must also sign the request. */
  fromAddress: string;
  /** Address of the account to receive the funds. */
  toAddress: string;
  /** Start time of the vesting. Periods start relative to this time. */
  startTime: bigint;
  /** Vesting events as a sequence of durations and amounts, starting relative to start_time. */
  vestingPeriods: Period[];
  /**
   * If true, merge this new grant into an existing PeriodicVestingAccount,
   * or create it if it does not exist. If false, creates a new account,
   * or fails if an account already exists
   */
  merge: boolean;
}
/**
 * MsgCreatePeriodicVestingAccountResponse defines the MsgCreatePeriodicVestingAccount
 * response type.
 */
export interface MsgCreatePeriodicVestingAccountResponse {}
/** MsgCreateClawbackVestingAccount defines a message that enables creating a ClawbackVestingAccount. */
export interface MsgCreateClawbackVestingAccount {
  /** Address of the account providing the funds, which must also sign the request. */
  fromAddress: string;
  /** Address of the account to receive the funds. */
  toAddress: string;
  /** Start time of the vesting. Periods start relative to this time. */
  startTime: bigint;
  /** Unlocking events as a sequence of durations and amounts, starting relative to start_time. */
  lockupPeriods: Period[];
  /** Vesting events as a sequence of durations and amounts, starting relative to start_time. */
  vestingPeriods: Period[];
  /**
   * If true, merge this new grant into an existing ClawbackVestingAccount,
   * or create it if it does not exist. If false, creates a new account.
   * New grants to an existing account must be from the same from_address.
   */
  merge: boolean;
}
/** MsgCreateClawbackVestingAccountResponse defines the MsgCreateClawbackVestingAccount response type. */
export interface MsgCreateClawbackVestingAccountResponse {}
/** MsgClawback defines a message that removes unvested tokens from a ClawbackVestingAccount. */
export interface MsgClawback {
  /** funder_address is the address which funded the account */
  funderAddress: string;
  /** address is the address of the ClawbackVestingAccount to claw back from. */
  address: string;
  /**
   * dest_address specifies where the clawed-back tokens should be transferred.
   * If empty, the tokens will be transferred back to the original funder of the account.
   */
  destAddress: string;
}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponse {}
/**
 * MsgReturnGrants defines a message for a grantee to return all granted assets,
 * including delegated, undelegated and unbonding, vested and unvested,
 * are transferred to the original funder of the account. Might not be complete if
 * some vested assets have been transferred out of the account. Currently only applies to
 * ClawbackVesting accounts.
 */
export interface MsgReturnGrants {
  /** address is the address of the grantee account returning the grant. */
  address: string;
}
/** MsgReturnGrantsResponse defines the ReturnGrants response type. */
export interface MsgReturnGrantsResponse {}
function createBaseMsgCreateVestingAccount(): MsgCreateVestingAccount {
  return {
    fromAddress: "",
    toAddress: "",
    amount: [],
    endTime: BigInt(0),
    delayed: false,
  };
}
export const MsgCreateVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
  encode(message: MsgCreateVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.endTime !== BigInt(0)) {
      writer.uint32(32).int64(message.endTime);
    }
    if (message.delayed === true) {
      writer.uint32(40).bool(message.delayed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.endTime = reader.int64();
          break;
        case 5:
          message.delayed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateVestingAccount {
    const obj = createBaseMsgCreateVestingAccount();
    if (isSet(object.fromAddress)) obj.fromAddress = String(object.fromAddress);
    if (isSet(object.toAddress)) obj.toAddress = String(object.toAddress);
    if (Array.isArray(object?.amount)) obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.endTime)) obj.endTime = BigInt(object.endTime.toString());
    if (isSet(object.delayed)) obj.delayed = Boolean(object.delayed);
    return obj;
  },
  toJSON(message: MsgCreateVestingAccount): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    message.endTime !== undefined && (obj.endTime = (message.endTime || BigInt(0)).toString());
    message.delayed !== undefined && (obj.delayed = message.delayed);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateVestingAccount>, I>>(object: I): MsgCreateVestingAccount {
    const message = createBaseMsgCreateVestingAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = BigInt(object.endTime.toString());
    }
    message.delayed = object.delayed ?? false;
    return message;
  },
};
function createBaseMsgCreateVestingAccountResponse(): MsgCreateVestingAccountResponse {
  return {};
}
export const MsgCreateVestingAccountResponse = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
  encode(_: MsgCreateVestingAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVestingAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVestingAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCreateVestingAccountResponse {
    const obj = createBaseMsgCreateVestingAccountResponse();
    return obj;
  },
  toJSON(_: MsgCreateVestingAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateVestingAccountResponse>, I>>(
    _: I,
  ): MsgCreateVestingAccountResponse {
    const message = createBaseMsgCreateVestingAccountResponse();
    return message;
  },
};
function createBaseMsgCreatePeriodicVestingAccount(): MsgCreatePeriodicVestingAccount {
  return {
    fromAddress: "",
    toAddress: "",
    startTime: BigInt(0),
    vestingPeriods: [],
    merge: false,
  };
}
export const MsgCreatePeriodicVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
  encode(
    message: MsgCreatePeriodicVestingAccount,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(24).int64(message.startTime);
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.merge === true) {
      writer.uint32(40).bool(message.merge);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePeriodicVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePeriodicVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.startTime = reader.int64();
          break;
        case 4:
          message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
          break;
        case 5:
          message.merge = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreatePeriodicVestingAccount {
    const obj = createBaseMsgCreatePeriodicVestingAccount();
    if (isSet(object.fromAddress)) obj.fromAddress = String(object.fromAddress);
    if (isSet(object.toAddress)) obj.toAddress = String(object.toAddress);
    if (isSet(object.startTime)) obj.startTime = BigInt(object.startTime.toString());
    if (Array.isArray(object?.vestingPeriods))
      obj.vestingPeriods = object.vestingPeriods.map((e: any) => Period.fromJSON(e));
    if (isSet(object.merge)) obj.merge = Boolean(object.merge);
    return obj;
  },
  toJSON(message: MsgCreatePeriodicVestingAccount): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.startTime !== undefined && (obj.startTime = (message.startTime || BigInt(0)).toString());
    if (message.vestingPeriods) {
      obj.vestingPeriods = message.vestingPeriods.map((e) => (e ? Period.toJSON(e) : undefined));
    } else {
      obj.vestingPeriods = [];
    }
    message.merge !== undefined && (obj.merge = message.merge);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreatePeriodicVestingAccount>, I>>(
    object: I,
  ): MsgCreatePeriodicVestingAccount {
    const message = createBaseMsgCreatePeriodicVestingAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = BigInt(object.startTime.toString());
    }
    message.vestingPeriods = object.vestingPeriods?.map((e) => Period.fromPartial(e)) || [];
    message.merge = object.merge ?? false;
    return message;
  },
};
function createBaseMsgCreatePeriodicVestingAccountResponse(): MsgCreatePeriodicVestingAccountResponse {
  return {};
}
export const MsgCreatePeriodicVestingAccountResponse = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse",
  encode(
    _: MsgCreatePeriodicVestingAccountResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePeriodicVestingAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePeriodicVestingAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCreatePeriodicVestingAccountResponse {
    const obj = createBaseMsgCreatePeriodicVestingAccountResponse();
    return obj;
  },
  toJSON(_: MsgCreatePeriodicVestingAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreatePeriodicVestingAccountResponse>, I>>(
    _: I,
  ): MsgCreatePeriodicVestingAccountResponse {
    const message = createBaseMsgCreatePeriodicVestingAccountResponse();
    return message;
  },
};
function createBaseMsgCreateClawbackVestingAccount(): MsgCreateClawbackVestingAccount {
  return {
    fromAddress: "",
    toAddress: "",
    startTime: BigInt(0),
    lockupPeriods: [],
    vestingPeriods: [],
    merge: false,
  };
}
export const MsgCreateClawbackVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccount",
  encode(
    message: MsgCreateClawbackVestingAccount,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    if (message.startTime !== BigInt(0)) {
      writer.uint32(24).int64(message.startTime);
    }
    for (const v of message.lockupPeriods) {
      Period.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.vestingPeriods) {
      Period.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.merge === true) {
      writer.uint32(48).bool(message.merge);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClawbackVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClawbackVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.startTime = reader.int64();
          break;
        case 4:
          message.lockupPeriods.push(Period.decode(reader, reader.uint32()));
          break;
        case 5:
          message.vestingPeriods.push(Period.decode(reader, reader.uint32()));
          break;
        case 6:
          message.merge = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateClawbackVestingAccount {
    const obj = createBaseMsgCreateClawbackVestingAccount();
    if (isSet(object.fromAddress)) obj.fromAddress = String(object.fromAddress);
    if (isSet(object.toAddress)) obj.toAddress = String(object.toAddress);
    if (isSet(object.startTime)) obj.startTime = BigInt(object.startTime.toString());
    if (Array.isArray(object?.lockupPeriods))
      obj.lockupPeriods = object.lockupPeriods.map((e: any) => Period.fromJSON(e));
    if (Array.isArray(object?.vestingPeriods))
      obj.vestingPeriods = object.vestingPeriods.map((e: any) => Period.fromJSON(e));
    if (isSet(object.merge)) obj.merge = Boolean(object.merge);
    return obj;
  },
  toJSON(message: MsgCreateClawbackVestingAccount): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.startTime !== undefined && (obj.startTime = (message.startTime || BigInt(0)).toString());
    if (message.lockupPeriods) {
      obj.lockupPeriods = message.lockupPeriods.map((e) => (e ? Period.toJSON(e) : undefined));
    } else {
      obj.lockupPeriods = [];
    }
    if (message.vestingPeriods) {
      obj.vestingPeriods = message.vestingPeriods.map((e) => (e ? Period.toJSON(e) : undefined));
    } else {
      obj.vestingPeriods = [];
    }
    message.merge !== undefined && (obj.merge = message.merge);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateClawbackVestingAccount>, I>>(
    object: I,
  ): MsgCreateClawbackVestingAccount {
    const message = createBaseMsgCreateClawbackVestingAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = BigInt(object.startTime.toString());
    }
    message.lockupPeriods = object.lockupPeriods?.map((e) => Period.fromPartial(e)) || [];
    message.vestingPeriods = object.vestingPeriods?.map((e) => Period.fromPartial(e)) || [];
    message.merge = object.merge ?? false;
    return message;
  },
};
function createBaseMsgCreateClawbackVestingAccountResponse(): MsgCreateClawbackVestingAccountResponse {
  return {};
}
export const MsgCreateClawbackVestingAccountResponse = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccountResponse",
  encode(
    _: MsgCreateClawbackVestingAccountResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClawbackVestingAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClawbackVestingAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCreateClawbackVestingAccountResponse {
    const obj = createBaseMsgCreateClawbackVestingAccountResponse();
    return obj;
  },
  toJSON(_: MsgCreateClawbackVestingAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateClawbackVestingAccountResponse>, I>>(
    _: I,
  ): MsgCreateClawbackVestingAccountResponse {
    const message = createBaseMsgCreateClawbackVestingAccountResponse();
    return message;
  },
};
function createBaseMsgClawback(): MsgClawback {
  return {
    funderAddress: "",
    address: "",
    destAddress: "",
  };
}
export const MsgClawback = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgClawback",
  encode(message: MsgClawback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.funderAddress !== "") {
      writer.uint32(10).string(message.funderAddress);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.destAddress !== "") {
      writer.uint32(26).string(message.destAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClawback {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClawback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.funderAddress = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.destAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgClawback {
    const obj = createBaseMsgClawback();
    if (isSet(object.funderAddress)) obj.funderAddress = String(object.funderAddress);
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.destAddress)) obj.destAddress = String(object.destAddress);
    return obj;
  },
  toJSON(message: MsgClawback): unknown {
    const obj: any = {};
    message.funderAddress !== undefined && (obj.funderAddress = message.funderAddress);
    message.address !== undefined && (obj.address = message.address);
    message.destAddress !== undefined && (obj.destAddress = message.destAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgClawback>, I>>(object: I): MsgClawback {
    const message = createBaseMsgClawback();
    message.funderAddress = object.funderAddress ?? "";
    message.address = object.address ?? "";
    message.destAddress = object.destAddress ?? "";
    return message;
  },
};
function createBaseMsgClawbackResponse(): MsgClawbackResponse {
  return {};
}
export const MsgClawbackResponse = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgClawbackResponse",
  encode(_: MsgClawbackResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgClawbackResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClawbackResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgClawbackResponse {
    const obj = createBaseMsgClawbackResponse();
    return obj;
  },
  toJSON(_: MsgClawbackResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgClawbackResponse>, I>>(_: I): MsgClawbackResponse {
    const message = createBaseMsgClawbackResponse();
    return message;
  },
};
function createBaseMsgReturnGrants(): MsgReturnGrants {
  return {
    address: "",
  };
}
export const MsgReturnGrants = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgReturnGrants",
  encode(message: MsgReturnGrants, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReturnGrants {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReturnGrants();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgReturnGrants {
    const obj = createBaseMsgReturnGrants();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: MsgReturnGrants): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgReturnGrants>, I>>(object: I): MsgReturnGrants {
    const message = createBaseMsgReturnGrants();
    message.address = object.address ?? "";
    return message;
  },
};
function createBaseMsgReturnGrantsResponse(): MsgReturnGrantsResponse {
  return {};
}
export const MsgReturnGrantsResponse = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgReturnGrantsResponse",
  encode(_: MsgReturnGrantsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgReturnGrantsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReturnGrantsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgReturnGrantsResponse {
    const obj = createBaseMsgReturnGrantsResponse();
    return obj;
  },
  toJSON(_: MsgReturnGrantsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgReturnGrantsResponse>, I>>(_: I): MsgReturnGrantsResponse {
    const message = createBaseMsgReturnGrantsResponse();
    return message;
  },
};
/** Msg defines the bank Msg service. */
export interface Msg {
  /**
   * CreateVestingAccount defines a method that enables creating a vesting
   * account.
   */
  CreateVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse>;
  /**
   * CreatePeriodicVestingAccount defines a method that enables creating a
   * periodic vesting account.
   */
  CreatePeriodicVestingAccount(
    request: MsgCreatePeriodicVestingAccount,
  ): Promise<MsgCreatePeriodicVestingAccountResponse>;
  /**
   * CreateClawbackVestingAccount defines a method that enables creating a
   * vesting account that is subject to clawback.
   */
  CreateClawbackVestingAccount(
    request: MsgCreateClawbackVestingAccount,
  ): Promise<MsgCreateClawbackVestingAccountResponse>;
  /** Clawback removes the unvested tokens from a ClawbackVestingAccount. */
  Clawback(request: MsgClawback): Promise<MsgClawbackResponse>;
  /** ReturnGrants returns vesting grants to the funder. */
  ReturnGrants(request: MsgReturnGrants): Promise<MsgReturnGrantsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateVestingAccount = this.CreateVestingAccount.bind(this);
    this.CreatePeriodicVestingAccount = this.CreatePeriodicVestingAccount.bind(this);
    this.CreateClawbackVestingAccount = this.CreateClawbackVestingAccount.bind(this);
    this.Clawback = this.Clawback.bind(this);
    this.ReturnGrants = this.ReturnGrants.bind(this);
  }
  CreateVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse> {
    const data = MsgCreateVestingAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreateVestingAccount", data);
    return promise.then((data) => MsgCreateVestingAccountResponse.decode(new BinaryReader(data)));
  }
  CreatePeriodicVestingAccount(
    request: MsgCreatePeriodicVestingAccount,
  ): Promise<MsgCreatePeriodicVestingAccountResponse> {
    const data = MsgCreatePeriodicVestingAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreatePeriodicVestingAccount", data);
    return promise.then((data) => MsgCreatePeriodicVestingAccountResponse.decode(new BinaryReader(data)));
  }
  CreateClawbackVestingAccount(
    request: MsgCreateClawbackVestingAccount,
  ): Promise<MsgCreateClawbackVestingAccountResponse> {
    const data = MsgCreateClawbackVestingAccount.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "CreateClawbackVestingAccount", data);
    return promise.then((data) => MsgCreateClawbackVestingAccountResponse.decode(new BinaryReader(data)));
  }
  Clawback(request: MsgClawback): Promise<MsgClawbackResponse> {
    const data = MsgClawback.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "Clawback", data);
    return promise.then((data) => MsgClawbackResponse.decode(new BinaryReader(data)));
  }
  ReturnGrants(request: MsgReturnGrants): Promise<MsgReturnGrantsResponse> {
    const data = MsgReturnGrants.encode(request).finish();
    const promise = this.rpc.request("cosmos.vesting.v1beta1.Msg", "ReturnGrants", data);
    return promise.then((data) => MsgReturnGrantsResponse.decode(new BinaryReader(data)));
  }
}
