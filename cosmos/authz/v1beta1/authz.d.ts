import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
export declare const protobufPackage = "cosmos.authz.v1beta1";
/** Since: cosmos-sdk 0.43 */
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorization {
    /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
    msg: string;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface Grant {
    authorization?: Any;
    expiration?: Timestamp;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GrantAuthorization {
    granter: string;
    grantee: string;
    authorization?: Any;
    expiration?: Timestamp;
}
export declare const GenericAuthorization: {
    encode(message: GenericAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenericAuthorization;
    fromJSON(object: any): GenericAuthorization;
    toJSON(message: GenericAuthorization): unknown;
    fromPartial<I extends {
        msg?: string | undefined;
    } & {
        msg?: string | undefined;
    } & Record<Exclude<keyof I, "msg">, never>>(object: I): GenericAuthorization;
};
export declare const Grant: {
    encode(message: Grant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Grant;
    fromJSON(object: any): Grant;
    toJSON(message: Grant): unknown;
    fromPartial<I extends {
        authorization?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        expiration?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        authorization?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["authorization"], keyof Any>, never>) | undefined;
        expiration?: ({
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["expiration"]["seconds"], keyof Long.Long>, never>) | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["expiration"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Grant>, never>>(object: I): Grant;
};
export declare const GrantAuthorization: {
    encode(message: GrantAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GrantAuthorization;
    fromJSON(object: any): GrantAuthorization;
    toJSON(message: GrantAuthorization): unknown;
    fromPartial<I extends {
        granter?: string | undefined;
        grantee?: string | undefined;
        authorization?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        expiration?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        granter?: string | undefined;
        grantee?: string | undefined;
        authorization?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["authorization"], keyof Any>, never>) | undefined;
        expiration?: ({
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["expiration"]["seconds"], keyof Long.Long>, never>) | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["expiration"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GrantAuthorization>, never>>(object: I): GrantAuthorization;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
