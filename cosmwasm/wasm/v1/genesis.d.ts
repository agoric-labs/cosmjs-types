import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params, CodeInfo, ContractInfo, Model } from "../../../cosmwasm/wasm/v1/types";
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract } from "../../../cosmwasm/wasm/v1/tx";
export declare const protobufPackage = "cosmwasm.wasm.v1";
/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
    params?: Params;
    codes: Code[];
    contracts: Contract[];
    sequences: Sequence[];
    genMsgs: GenesisState_GenMsgs[];
}
/**
 * GenMsgs define the messages that can be executed during genesis phase in
 * order. The intention is to have more human readable data that is auditable.
 */
export interface GenesisState_GenMsgs {
    storeCode?: MsgStoreCode | undefined;
    instantiateContract?: MsgInstantiateContract | undefined;
    executeContract?: MsgExecuteContract | undefined;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
    codeId: Long;
    codeInfo?: CodeInfo;
    codeBytes: Uint8Array;
    /** Pinned to wasmvm cache */
    pinned: boolean;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
    contractAddress: string;
    contractInfo?: ContractInfo;
    contractState: Model[];
}
/** Sequence key and value of an id generation counter */
export interface Sequence {
    idKey: Uint8Array;
    value: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            codeUploadAccess?: {
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
            } | undefined;
            instantiateDefaultPermission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
            maxWasmCodeSize?: string | number | Long.Long | undefined;
        } | undefined;
        codes?: {
            codeId?: string | number | Long.Long | undefined;
            codeInfo?: {
                codeHash?: Uint8Array | undefined;
                creator?: string | undefined;
                instantiateConfig?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                    address?: string | undefined;
                } | undefined;
            } | undefined;
            codeBytes?: Uint8Array | undefined;
            pinned?: boolean | undefined;
        }[] | undefined;
        contracts?: {
            contractAddress?: string | undefined;
            contractInfo?: {
                codeId?: string | number | Long.Long | undefined;
                creator?: string | undefined;
                admin?: string | undefined;
                label?: string | undefined;
                created?: {
                    blockHeight?: string | number | Long.Long | undefined;
                    txIndex?: string | number | Long.Long | undefined;
                } | undefined;
                ibcPortId?: string | undefined;
                extension?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            contractState?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        }[] | undefined;
        sequences?: {
            idKey?: Uint8Array | undefined;
            value?: string | number | Long.Long | undefined;
        }[] | undefined;
        genMsgs?: {
            storeCode?: {
                sender?: string | undefined;
                wasmByteCode?: Uint8Array | undefined;
                instantiatePermission?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                    address?: string | undefined;
                } | undefined;
            } | undefined;
            instantiateContract?: {
                sender?: string | undefined;
                admin?: string | undefined;
                codeId?: string | number | Long.Long | undefined;
                label?: string | undefined;
                msg?: Uint8Array | undefined;
                funds?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } | undefined;
            executeContract?: {
                sender?: string | undefined;
                contract?: string | undefined;
                msg?: Uint8Array | undefined;
                funds?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        params?: ({
            codeUploadAccess?: {
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
            } | undefined;
            instantiateDefaultPermission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
            maxWasmCodeSize?: string | number | Long.Long | undefined;
        } & {
            codeUploadAccess?: ({
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
            } & {
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
            } & Record<Exclude<keyof I["params"]["codeUploadAccess"], keyof import("../../../cosmwasm/wasm/v1/types").AccessConfig>, never>) | undefined;
            instantiateDefaultPermission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
            maxWasmCodeSize?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["params"]["maxWasmCodeSize"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        codes?: ({
            codeId?: string | number | Long.Long | undefined;
            codeInfo?: {
                codeHash?: Uint8Array | undefined;
                creator?: string | undefined;
                instantiateConfig?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                    address?: string | undefined;
                } | undefined;
            } | undefined;
            codeBytes?: Uint8Array | undefined;
            pinned?: boolean | undefined;
        }[] & ({
            codeId?: string | number | Long.Long | undefined;
            codeInfo?: {
                codeHash?: Uint8Array | undefined;
                creator?: string | undefined;
                instantiateConfig?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                    address?: string | undefined;
                } | undefined;
            } | undefined;
            codeBytes?: Uint8Array | undefined;
            pinned?: boolean | undefined;
        } & {
            codeId?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["codes"][number]["codeId"], keyof Long.Long>, never>) | undefined;
            codeInfo?: ({
                codeHash?: Uint8Array | undefined;
                creator?: string | undefined;
                instantiateConfig?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                    address?: string | undefined;
                } | undefined;
            } & {
                codeHash?: Uint8Array | undefined;
                creator?: string | undefined;
                instantiateConfig?: ({
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                    address?: string | undefined;
                } & {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                    address?: string | undefined;
                } & Record<Exclude<keyof I["codes"][number]["codeInfo"]["instantiateConfig"], keyof import("../../../cosmwasm/wasm/v1/types").AccessConfig>, never>) | undefined;
            } & Record<Exclude<keyof I["codes"][number]["codeInfo"], keyof CodeInfo>, never>) | undefined;
            codeBytes?: Uint8Array | undefined;
            pinned?: boolean | undefined;
        } & Record<Exclude<keyof I["codes"][number], keyof Code>, never>)[] & Record<Exclude<keyof I["codes"], keyof {
            codeId?: string | number | Long.Long | undefined;
            codeInfo?: {
                codeHash?: Uint8Array | undefined;
                creator?: string | undefined;
                instantiateConfig?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                    address?: string | undefined;
                } | undefined;
            } | undefined;
            codeBytes?: Uint8Array | undefined;
            pinned?: boolean | undefined;
        }[]>, never>) | undefined;
        contracts?: ({
            contractAddress?: string | undefined;
            contractInfo?: {
                codeId?: string | number | Long.Long | undefined;
                creator?: string | undefined;
                admin?: string | undefined;
                label?: string | undefined;
                created?: {
                    blockHeight?: string | number | Long.Long | undefined;
                    txIndex?: string | number | Long.Long | undefined;
                } | undefined;
                ibcPortId?: string | undefined;
                extension?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            contractState?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        }[] & ({
            contractAddress?: string | undefined;
            contractInfo?: {
                codeId?: string | number | Long.Long | undefined;
                creator?: string | undefined;
                admin?: string | undefined;
                label?: string | undefined;
                created?: {
                    blockHeight?: string | number | Long.Long | undefined;
                    txIndex?: string | number | Long.Long | undefined;
                } | undefined;
                ibcPortId?: string | undefined;
                extension?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            contractState?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        } & {
            contractAddress?: string | undefined;
            contractInfo?: ({
                codeId?: string | number | Long.Long | undefined;
                creator?: string | undefined;
                admin?: string | undefined;
                label?: string | undefined;
                created?: {
                    blockHeight?: string | number | Long.Long | undefined;
                    txIndex?: string | number | Long.Long | undefined;
                } | undefined;
                ibcPortId?: string | undefined;
                extension?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } & {
                codeId?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["contracts"][number]["contractInfo"]["codeId"], keyof Long.Long>, never>) | undefined;
                creator?: string | undefined;
                admin?: string | undefined;
                label?: string | undefined;
                created?: ({
                    blockHeight?: string | number | Long.Long | undefined;
                    txIndex?: string | number | Long.Long | undefined;
                } & {
                    blockHeight?: string | number | (Long.Long & {
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
                    } & Record<Exclude<keyof I["contracts"][number]["contractInfo"]["created"]["blockHeight"], keyof Long.Long>, never>) | undefined;
                    txIndex?: string | number | (Long.Long & {
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
                    } & Record<Exclude<keyof I["contracts"][number]["contractInfo"]["created"]["txIndex"], keyof Long.Long>, never>) | undefined;
                } & Record<Exclude<keyof I["contracts"][number]["contractInfo"]["created"], keyof import("../../../cosmwasm/wasm/v1/types").AbsoluteTxPosition>, never>) | undefined;
                ibcPortId?: string | undefined;
                extension?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["contracts"][number]["contractInfo"]["extension"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
            } & Record<Exclude<keyof I["contracts"][number]["contractInfo"], keyof ContractInfo>, never>) | undefined;
            contractState?: ({
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
            }[] & ({
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
            } & {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["contracts"][number]["contractState"][number], keyof Model>, never>)[] & Record<Exclude<keyof I["contracts"][number]["contractState"], keyof {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["contracts"][number], keyof Contract>, never>)[] & Record<Exclude<keyof I["contracts"], keyof {
            contractAddress?: string | undefined;
            contractInfo?: {
                codeId?: string | number | Long.Long | undefined;
                creator?: string | undefined;
                admin?: string | undefined;
                label?: string | undefined;
                created?: {
                    blockHeight?: string | number | Long.Long | undefined;
                    txIndex?: string | number | Long.Long | undefined;
                } | undefined;
                ibcPortId?: string | undefined;
                extension?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            contractState?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        sequences?: ({
            idKey?: Uint8Array | undefined;
            value?: string | number | Long.Long | undefined;
        }[] & ({
            idKey?: Uint8Array | undefined;
            value?: string | number | Long.Long | undefined;
        } & {
            idKey?: Uint8Array | undefined;
            value?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["sequences"][number]["value"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["sequences"][number], keyof Sequence>, never>)[] & Record<Exclude<keyof I["sequences"], keyof {
            idKey?: Uint8Array | undefined;
            value?: string | number | Long.Long | undefined;
        }[]>, never>) | undefined;
        genMsgs?: ({
            storeCode?: {
                sender?: string | undefined;
                wasmByteCode?: Uint8Array | undefined;
                instantiatePermission?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                    address?: string | undefined;
                } | undefined;
            } | undefined;
            instantiateContract?: {
                sender?: string | undefined;
                admin?: string | undefined;
                codeId?: string | number | Long.Long | undefined;
                label?: string | undefined;
                msg?: Uint8Array | undefined;
                funds?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } | undefined;
            executeContract?: {
                sender?: string | undefined;
                contract?: string | undefined;
                msg?: Uint8Array | undefined;
                funds?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } | undefined;
        }[] & ({
            storeCode?: {
                sender?: string | undefined;
                wasmByteCode?: Uint8Array | undefined;
                instantiatePermission?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                    address?: string | undefined;
                } | undefined;
            } | undefined;
            instantiateContract?: {
                sender?: string | undefined;
                admin?: string | undefined;
                codeId?: string | number | Long.Long | undefined;
                label?: string | undefined;
                msg?: Uint8Array | undefined;
                funds?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } | undefined;
            executeContract?: {
                sender?: string | undefined;
                contract?: string | undefined;
                msg?: Uint8Array | undefined;
                funds?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            storeCode?: ({
                sender?: string | undefined;
                wasmByteCode?: Uint8Array | undefined;
                instantiatePermission?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                    address?: string | undefined;
                } | undefined;
            } & {
                sender?: string | undefined;
                wasmByteCode?: Uint8Array | undefined;
                instantiatePermission?: ({
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                    address?: string | undefined;
                } & {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                    address?: string | undefined;
                } & Record<Exclude<keyof I["genMsgs"][number]["storeCode"]["instantiatePermission"], keyof import("../../../cosmwasm/wasm/v1/types").AccessConfig>, never>) | undefined;
            } & Record<Exclude<keyof I["genMsgs"][number]["storeCode"], keyof MsgStoreCode>, never>) | undefined;
            instantiateContract?: ({
                sender?: string | undefined;
                admin?: string | undefined;
                codeId?: string | number | Long.Long | undefined;
                label?: string | undefined;
                msg?: Uint8Array | undefined;
                funds?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } & {
                sender?: string | undefined;
                admin?: string | undefined;
                codeId?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["genMsgs"][number]["instantiateContract"]["codeId"], keyof Long.Long>, never>) | undefined;
                label?: string | undefined;
                msg?: Uint8Array | undefined;
                funds?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["genMsgs"][number]["instantiateContract"]["funds"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["genMsgs"][number]["instantiateContract"]["funds"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["genMsgs"][number]["instantiateContract"], keyof MsgInstantiateContract>, never>) | undefined;
            executeContract?: ({
                sender?: string | undefined;
                contract?: string | undefined;
                msg?: Uint8Array | undefined;
                funds?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } & {
                sender?: string | undefined;
                contract?: string | undefined;
                msg?: Uint8Array | undefined;
                funds?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["genMsgs"][number]["executeContract"]["funds"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["genMsgs"][number]["executeContract"]["funds"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["genMsgs"][number]["executeContract"], keyof MsgExecuteContract>, never>) | undefined;
        } & Record<Exclude<keyof I["genMsgs"][number], keyof GenesisState_GenMsgs>, never>)[] & Record<Exclude<keyof I["genMsgs"], keyof {
            storeCode?: {
                sender?: string | undefined;
                wasmByteCode?: Uint8Array | undefined;
                instantiatePermission?: {
                    permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                    address?: string | undefined;
                } | undefined;
            } | undefined;
            instantiateContract?: {
                sender?: string | undefined;
                admin?: string | undefined;
                codeId?: string | number | Long.Long | undefined;
                label?: string | undefined;
                msg?: Uint8Array | undefined;
                funds?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } | undefined;
            executeContract?: {
                sender?: string | undefined;
                contract?: string | undefined;
                msg?: Uint8Array | undefined;
                funds?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const GenesisState_GenMsgs: {
    encode(message: GenesisState_GenMsgs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState_GenMsgs;
    fromJSON(object: any): GenesisState_GenMsgs;
    toJSON(message: GenesisState_GenMsgs): unknown;
    fromPartial<I extends {
        storeCode?: {
            sender?: string | undefined;
            wasmByteCode?: Uint8Array | undefined;
            instantiatePermission?: {
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
            } | undefined;
        } | undefined;
        instantiateContract?: {
            sender?: string | undefined;
            admin?: string | undefined;
            codeId?: string | number | Long.Long | undefined;
            label?: string | undefined;
            msg?: Uint8Array | undefined;
            funds?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } | undefined;
        executeContract?: {
            sender?: string | undefined;
            contract?: string | undefined;
            msg?: Uint8Array | undefined;
            funds?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        storeCode?: ({
            sender?: string | undefined;
            wasmByteCode?: Uint8Array | undefined;
            instantiatePermission?: {
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
            } | undefined;
        } & {
            sender?: string | undefined;
            wasmByteCode?: Uint8Array | undefined;
            instantiatePermission?: ({
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
            } & {
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
            } & Record<Exclude<keyof I["storeCode"]["instantiatePermission"], keyof import("../../../cosmwasm/wasm/v1/types").AccessConfig>, never>) | undefined;
        } & Record<Exclude<keyof I["storeCode"], keyof MsgStoreCode>, never>) | undefined;
        instantiateContract?: ({
            sender?: string | undefined;
            admin?: string | undefined;
            codeId?: string | number | Long.Long | undefined;
            label?: string | undefined;
            msg?: Uint8Array | undefined;
            funds?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            sender?: string | undefined;
            admin?: string | undefined;
            codeId?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["instantiateContract"]["codeId"], keyof Long.Long>, never>) | undefined;
            label?: string | undefined;
            msg?: Uint8Array | undefined;
            funds?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["instantiateContract"]["funds"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["instantiateContract"]["funds"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["instantiateContract"], keyof MsgInstantiateContract>, never>) | undefined;
        executeContract?: ({
            sender?: string | undefined;
            contract?: string | undefined;
            msg?: Uint8Array | undefined;
            funds?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            sender?: string | undefined;
            contract?: string | undefined;
            msg?: Uint8Array | undefined;
            funds?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["executeContract"]["funds"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["executeContract"]["funds"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["executeContract"], keyof MsgExecuteContract>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState_GenMsgs>, never>>(object: I): GenesisState_GenMsgs;
};
export declare const Code: {
    encode(message: Code, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Code;
    fromJSON(object: any): Code;
    toJSON(message: Code): unknown;
    fromPartial<I extends {
        codeId?: string | number | Long.Long | undefined;
        codeInfo?: {
            codeHash?: Uint8Array | undefined;
            creator?: string | undefined;
            instantiateConfig?: {
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
            } | undefined;
        } | undefined;
        codeBytes?: Uint8Array | undefined;
        pinned?: boolean | undefined;
    } & {
        codeId?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["codeId"], keyof Long.Long>, never>) | undefined;
        codeInfo?: ({
            codeHash?: Uint8Array | undefined;
            creator?: string | undefined;
            instantiateConfig?: {
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
            } | undefined;
        } & {
            codeHash?: Uint8Array | undefined;
            creator?: string | undefined;
            instantiateConfig?: ({
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
            } & {
                permission?: import("../../../cosmwasm/wasm/v1/types").AccessType | undefined;
                address?: string | undefined;
            } & Record<Exclude<keyof I["codeInfo"]["instantiateConfig"], keyof import("../../../cosmwasm/wasm/v1/types").AccessConfig>, never>) | undefined;
        } & Record<Exclude<keyof I["codeInfo"], keyof CodeInfo>, never>) | undefined;
        codeBytes?: Uint8Array | undefined;
        pinned?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof Code>, never>>(object: I): Code;
};
export declare const Contract: {
    encode(message: Contract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Contract;
    fromJSON(object: any): Contract;
    toJSON(message: Contract): unknown;
    fromPartial<I extends {
        contractAddress?: string | undefined;
        contractInfo?: {
            codeId?: string | number | Long.Long | undefined;
            creator?: string | undefined;
            admin?: string | undefined;
            label?: string | undefined;
            created?: {
                blockHeight?: string | number | Long.Long | undefined;
                txIndex?: string | number | Long.Long | undefined;
            } | undefined;
            ibcPortId?: string | undefined;
            extension?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        contractState?: {
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        contractAddress?: string | undefined;
        contractInfo?: ({
            codeId?: string | number | Long.Long | undefined;
            creator?: string | undefined;
            admin?: string | undefined;
            label?: string | undefined;
            created?: {
                blockHeight?: string | number | Long.Long | undefined;
                txIndex?: string | number | Long.Long | undefined;
            } | undefined;
            ibcPortId?: string | undefined;
            extension?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            codeId?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["contractInfo"]["codeId"], keyof Long.Long>, never>) | undefined;
            creator?: string | undefined;
            admin?: string | undefined;
            label?: string | undefined;
            created?: ({
                blockHeight?: string | number | Long.Long | undefined;
                txIndex?: string | number | Long.Long | undefined;
            } & {
                blockHeight?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["contractInfo"]["created"]["blockHeight"], keyof Long.Long>, never>) | undefined;
                txIndex?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["contractInfo"]["created"]["txIndex"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["contractInfo"]["created"], keyof import("../../../cosmwasm/wasm/v1/types").AbsoluteTxPosition>, never>) | undefined;
            ibcPortId?: string | undefined;
            extension?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["contractInfo"]["extension"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
        } & Record<Exclude<keyof I["contractInfo"], keyof ContractInfo>, never>) | undefined;
        contractState?: ({
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
        } & {
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["contractState"][number], keyof Model>, never>)[] & Record<Exclude<keyof I["contractState"], keyof {
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Contract>, never>>(object: I): Contract;
};
export declare const Sequence: {
    encode(message: Sequence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Sequence;
    fromJSON(object: any): Sequence;
    toJSON(message: Sequence): unknown;
    fromPartial<I extends {
        idKey?: Uint8Array | undefined;
        value?: string | number | Long.Long | undefined;
    } & {
        idKey?: Uint8Array | undefined;
        value?: string | number | (Long.Long & {
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
        } & Record<Exclude<keyof I["value"], keyof Long.Long>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Sequence>, never>>(object: I): Sequence;
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
