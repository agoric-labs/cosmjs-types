import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { GenesisState as GenesisState1 } from "../../../../ibc/core/client/v1/genesis";
import { GenesisState as GenesisState2 } from "../../../../ibc/core/connection/v1/genesis";
import { GenesisState as GenesisState3 } from "../../../../ibc/core/channel/v1/genesis";
export declare const protobufPackage = "ibc.core.types.v1";
/** GenesisState defines the ibc module's genesis state. */
export interface GenesisState {
    /** ICS002 - Clients genesis state */
    clientGenesis?: GenesisState1;
    /** ICS003 - Connections genesis state */
    connectionGenesis?: GenesisState2;
    /** ICS004 - Channel genesis state */
    channelGenesis?: GenesisState3;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        clientGenesis?: {
            clients?: {
                clientId?: string | undefined;
                clientState?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
            clientsConsensus?: {
                clientId?: string | undefined;
                consensusStates?: {
                    height?: {
                        revisionNumber?: string | number | Long.Long | undefined;
                        revisionHeight?: string | number | Long.Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
            clientsMetadata?: {
                clientId?: string | undefined;
                clientMetadata?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            }[] | undefined;
            params?: {
                allowedClients?: string[] | undefined;
            } | undefined;
            createLocalhost?: boolean | undefined;
            nextClientSequence?: string | number | Long.Long | undefined;
        } | undefined;
        connectionGenesis?: {
            connections?: {
                id?: string | undefined;
                clientId?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
                counterparty?: {
                    clientId?: string | undefined;
                    connectionId?: string | undefined;
                    prefix?: {
                        keyPrefix?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                delayPeriod?: string | number | Long.Long | undefined;
            }[] | undefined;
            clientConnectionPaths?: {
                clientId?: string | undefined;
                paths?: string[] | undefined;
            }[] | undefined;
            nextConnectionSequence?: string | number | Long.Long | undefined;
            params?: {
                maxExpectedTimePerBlock?: string | number | Long.Long | undefined;
            } | undefined;
        } | undefined;
        channelGenesis?: {
            channels?: {
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
                counterparty?: {
                    portId?: string | undefined;
                    channelId?: string | undefined;
                } | undefined;
                connectionHops?: string[] | undefined;
                version?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[] | undefined;
            acknowledgements?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
            commitments?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
            receipts?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
            sendSequences?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
            }[] | undefined;
            recvSequences?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
            }[] | undefined;
            ackSequences?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
            }[] | undefined;
            nextChannelSequence?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        clientGenesis?: ({
            clients?: {
                clientId?: string | undefined;
                clientState?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
            clientsConsensus?: {
                clientId?: string | undefined;
                consensusStates?: {
                    height?: {
                        revisionNumber?: string | number | Long.Long | undefined;
                        revisionHeight?: string | number | Long.Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
            clientsMetadata?: {
                clientId?: string | undefined;
                clientMetadata?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            }[] | undefined;
            params?: {
                allowedClients?: string[] | undefined;
            } | undefined;
            createLocalhost?: boolean | undefined;
            nextClientSequence?: string | number | Long.Long | undefined;
        } & {
            clients?: ({
                clientId?: string | undefined;
                clientState?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] & ({
                clientId?: string | undefined;
                clientState?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } & {
                clientId?: string | undefined;
                clientState?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["clientGenesis"]["clients"][number]["clientState"], keyof import("../../../../google/protobuf/any").Any>, never>) | undefined;
            } & Record<Exclude<keyof I["clientGenesis"]["clients"][number], keyof import("../../client/v1/client").IdentifiedClientState>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clients"], keyof {
                clientId?: string | undefined;
                clientState?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            clientsConsensus?: ({
                clientId?: string | undefined;
                consensusStates?: {
                    height?: {
                        revisionNumber?: string | number | Long.Long | undefined;
                        revisionHeight?: string | number | Long.Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] | undefined;
            }[] & ({
                clientId?: string | undefined;
                consensusStates?: {
                    height?: {
                        revisionNumber?: string | number | Long.Long | undefined;
                        revisionHeight?: string | number | Long.Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                clientId?: string | undefined;
                consensusStates?: ({
                    height?: {
                        revisionNumber?: string | number | Long.Long | undefined;
                        revisionHeight?: string | number | Long.Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] & ({
                    height?: {
                        revisionNumber?: string | number | Long.Long | undefined;
                        revisionHeight?: string | number | Long.Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    height?: ({
                        revisionNumber?: string | number | Long.Long | undefined;
                        revisionHeight?: string | number | Long.Long | undefined;
                    } & {
                        revisionNumber?: string | number | (Long.Long & {
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
                        } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["height"]["revisionNumber"], keyof Long.Long>, never>) | undefined;
                        revisionHeight?: string | number | (Long.Long & {
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
                        } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["height"]["revisionHeight"], keyof Long.Long>, never>) | undefined;
                    } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["height"], keyof import("../../client/v1/client").Height>, never>) | undefined;
                    consensusState?: ({
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["consensusState"], keyof import("../../../../google/protobuf/any").Any>, never>) | undefined;
                } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number], keyof import("../../client/v1/client").ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"], keyof {
                    height?: {
                        revisionNumber?: string | number | Long.Long | undefined;
                        revisionHeight?: string | number | Long.Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"][number], keyof import("../../client/v1/client").ClientConsensusStates>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsConsensus"], keyof {
                clientId?: string | undefined;
                consensusStates?: {
                    height?: {
                        revisionNumber?: string | number | Long.Long | undefined;
                        revisionHeight?: string | number | Long.Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
            clientsMetadata?: ({
                clientId?: string | undefined;
                clientMetadata?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            }[] & ({
                clientId?: string | undefined;
                clientMetadata?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                clientId?: string | undefined;
                clientMetadata?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number]["clientMetadata"][number], keyof import("../../../../ibc/core/client/v1/genesis").GenesisMetadata>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number]["clientMetadata"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"][number], keyof import("../../../../ibc/core/client/v1/genesis").IdentifiedGenesisMetadata>, never>)[] & Record<Exclude<keyof I["clientGenesis"]["clientsMetadata"], keyof {
                clientId?: string | undefined;
                clientMetadata?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
            params?: ({
                allowedClients?: string[] | undefined;
            } & {
                allowedClients?: (string[] & string[] & Record<Exclude<keyof I["clientGenesis"]["params"]["allowedClients"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["clientGenesis"]["params"], "allowedClients">, never>) | undefined;
            createLocalhost?: boolean | undefined;
            nextClientSequence?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["clientGenesis"]["nextClientSequence"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["clientGenesis"], keyof GenesisState1>, never>) | undefined;
        connectionGenesis?: ({
            connections?: {
                id?: string | undefined;
                clientId?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
                counterparty?: {
                    clientId?: string | undefined;
                    connectionId?: string | undefined;
                    prefix?: {
                        keyPrefix?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                delayPeriod?: string | number | Long.Long | undefined;
            }[] | undefined;
            clientConnectionPaths?: {
                clientId?: string | undefined;
                paths?: string[] | undefined;
            }[] | undefined;
            nextConnectionSequence?: string | number | Long.Long | undefined;
            params?: {
                maxExpectedTimePerBlock?: string | number | Long.Long | undefined;
            } | undefined;
        } & {
            connections?: ({
                id?: string | undefined;
                clientId?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
                counterparty?: {
                    clientId?: string | undefined;
                    connectionId?: string | undefined;
                    prefix?: {
                        keyPrefix?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                delayPeriod?: string | number | Long.Long | undefined;
            }[] & ({
                id?: string | undefined;
                clientId?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
                counterparty?: {
                    clientId?: string | undefined;
                    connectionId?: string | undefined;
                    prefix?: {
                        keyPrefix?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                delayPeriod?: string | number | Long.Long | undefined;
            } & {
                id?: string | undefined;
                clientId?: string | undefined;
                versions?: ({
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] & ({
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                } & {
                    identifier?: string | undefined;
                    features?: (string[] & string[] & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"][number]["features"], keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"][number], keyof import("../../connection/v1/connection").Version>, never>)[] & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"], keyof {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[]>, never>) | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
                counterparty?: ({
                    clientId?: string | undefined;
                    connectionId?: string | undefined;
                    prefix?: {
                        keyPrefix?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    clientId?: string | undefined;
                    connectionId?: string | undefined;
                    prefix?: ({
                        keyPrefix?: Uint8Array | undefined;
                    } & {
                        keyPrefix?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["counterparty"]["prefix"], "keyPrefix">, never>) | undefined;
                } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["counterparty"], keyof import("../../connection/v1/connection").Counterparty>, never>) | undefined;
                delayPeriod?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number]["delayPeriod"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["connectionGenesis"]["connections"][number], keyof import("../../connection/v1/connection").IdentifiedConnection>, never>)[] & Record<Exclude<keyof I["connectionGenesis"]["connections"], keyof {
                id?: string | undefined;
                clientId?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
                counterparty?: {
                    clientId?: string | undefined;
                    connectionId?: string | undefined;
                    prefix?: {
                        keyPrefix?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                delayPeriod?: string | number | Long.Long | undefined;
            }[]>, never>) | undefined;
            clientConnectionPaths?: ({
                clientId?: string | undefined;
                paths?: string[] | undefined;
            }[] & ({
                clientId?: string | undefined;
                paths?: string[] | undefined;
            } & {
                clientId?: string | undefined;
                paths?: (string[] & string[] & Record<Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"][number]["paths"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"][number], keyof import("../../connection/v1/connection").ConnectionPaths>, never>)[] & Record<Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"], keyof {
                clientId?: string | undefined;
                paths?: string[] | undefined;
            }[]>, never>) | undefined;
            nextConnectionSequence?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["connectionGenesis"]["nextConnectionSequence"], keyof Long.Long>, never>) | undefined;
            params?: ({
                maxExpectedTimePerBlock?: string | number | Long.Long | undefined;
            } & {
                maxExpectedTimePerBlock?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["connectionGenesis"]["params"]["maxExpectedTimePerBlock"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["connectionGenesis"]["params"], "maxExpectedTimePerBlock">, never>) | undefined;
        } & Record<Exclude<keyof I["connectionGenesis"], keyof GenesisState2>, never>) | undefined;
        channelGenesis?: ({
            channels?: {
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
                counterparty?: {
                    portId?: string | undefined;
                    channelId?: string | undefined;
                } | undefined;
                connectionHops?: string[] | undefined;
                version?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[] | undefined;
            acknowledgements?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
            commitments?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
            receipts?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
            sendSequences?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
            }[] | undefined;
            recvSequences?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
            }[] | undefined;
            ackSequences?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
            }[] | undefined;
            nextChannelSequence?: string | number | Long.Long | undefined;
        } & {
            channels?: ({
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
                counterparty?: {
                    portId?: string | undefined;
                    channelId?: string | undefined;
                } | undefined;
                connectionHops?: string[] | undefined;
                version?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[] & ({
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
                counterparty?: {
                    portId?: string | undefined;
                    channelId?: string | undefined;
                } | undefined;
                connectionHops?: string[] | undefined;
                version?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            } & {
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
                counterparty?: ({
                    portId?: string | undefined;
                    channelId?: string | undefined;
                } & {
                    portId?: string | undefined;
                    channelId?: string | undefined;
                } & Record<Exclude<keyof I["channelGenesis"]["channels"][number]["counterparty"], keyof import("../../channel/v1/channel").Counterparty>, never>) | undefined;
                connectionHops?: (string[] & string[] & Record<Exclude<keyof I["channelGenesis"]["channels"][number]["connectionHops"], keyof string[]>, never>) | undefined;
                version?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            } & Record<Exclude<keyof I["channelGenesis"]["channels"][number], keyof import("../../channel/v1/channel").IdentifiedChannel>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["channels"], keyof {
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
                counterparty?: {
                    portId?: string | undefined;
                    channelId?: string | undefined;
                } | undefined;
                connectionHops?: string[] | undefined;
                version?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[]>, never>) | undefined;
            acknowledgements?: ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
                data?: Uint8Array | undefined;
            }[] & ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
                data?: Uint8Array | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["channelGenesis"]["acknowledgements"][number]["sequence"], keyof Long.Long>, never>) | undefined;
                data?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["channelGenesis"]["acknowledgements"][number], keyof import("../../channel/v1/channel").PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["acknowledgements"], keyof {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
                data?: Uint8Array | undefined;
            }[]>, never>) | undefined;
            commitments?: ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
                data?: Uint8Array | undefined;
            }[] & ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
                data?: Uint8Array | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["channelGenesis"]["commitments"][number]["sequence"], keyof Long.Long>, never>) | undefined;
                data?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["channelGenesis"]["commitments"][number], keyof import("../../channel/v1/channel").PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["commitments"], keyof {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
                data?: Uint8Array | undefined;
            }[]>, never>) | undefined;
            receipts?: ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
                data?: Uint8Array | undefined;
            }[] & ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
                data?: Uint8Array | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["channelGenesis"]["receipts"][number]["sequence"], keyof Long.Long>, never>) | undefined;
                data?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["channelGenesis"]["receipts"][number], keyof import("../../channel/v1/channel").PacketState>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["receipts"], keyof {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
                data?: Uint8Array | undefined;
            }[]>, never>) | undefined;
            sendSequences?: ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
            }[] & ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["channelGenesis"]["sendSequences"][number]["sequence"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["channelGenesis"]["sendSequences"][number], keyof import("../../../../ibc/core/channel/v1/genesis").PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["sendSequences"], keyof {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
            }[]>, never>) | undefined;
            recvSequences?: ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
            }[] & ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["channelGenesis"]["recvSequences"][number]["sequence"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["channelGenesis"]["recvSequences"][number], keyof import("../../../../ibc/core/channel/v1/genesis").PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["recvSequences"], keyof {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
            }[]>, never>) | undefined;
            ackSequences?: ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
            }[] & ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["channelGenesis"]["ackSequences"][number]["sequence"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["channelGenesis"]["ackSequences"][number], keyof import("../../../../ibc/core/channel/v1/genesis").PacketSequence>, never>)[] & Record<Exclude<keyof I["channelGenesis"]["ackSequences"], keyof {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long.Long | undefined;
            }[]>, never>) | undefined;
            nextChannelSequence?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["channelGenesis"]["nextChannelSequence"], keyof Long.Long>, never>) | undefined;
        } & Record<Exclude<keyof I["channelGenesis"], keyof GenesisState3>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
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
