"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastValidatorPower = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const staking_1 = require("../../../cosmos/staking/v1beta1/staking");
exports.protobufPackage = "cosmos.staking.v1beta1";
function createBaseGenesisState() {
    return {
        params: undefined,
        lastTotalPower: new Uint8Array(),
        lastValidatorPowers: [],
        validators: [],
        delegations: [],
        unbondingDelegations: [],
        redelegations: [],
        exported: false,
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            staking_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.lastTotalPower.length !== 0) {
            writer.uint32(18).bytes(message.lastTotalPower);
        }
        for (const v of message.lastValidatorPowers) {
            exports.LastValidatorPower.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.validators) {
            staking_1.Validator.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.delegations) {
            staking_1.Delegation.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.unbondingDelegations) {
            staking_1.UnbondingDelegation.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.redelegations) {
            staking_1.Redelegation.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.exported === true) {
            writer.uint32(64).bool(message.exported);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = staking_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lastTotalPower = reader.bytes();
                    break;
                case 3:
                    message.lastValidatorPowers.push(exports.LastValidatorPower.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.validators.push(staking_1.Validator.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.delegations.push(staking_1.Delegation.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.unbondingDelegations.push(staking_1.UnbondingDelegation.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.redelegations.push(staking_1.Redelegation.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.exported = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? staking_1.Params.fromJSON(object.params) : undefined,
            lastTotalPower: isSet(object.lastTotalPower)
                ? bytesFromBase64(object.lastTotalPower)
                : new Uint8Array(),
            lastValidatorPowers: Array.isArray(object === null || object === void 0 ? void 0 : object.lastValidatorPowers)
                ? object.lastValidatorPowers.map((e) => exports.LastValidatorPower.fromJSON(e))
                : [],
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators)
                ? object.validators.map((e) => staking_1.Validator.fromJSON(e))
                : [],
            delegations: Array.isArray(object === null || object === void 0 ? void 0 : object.delegations)
                ? object.delegations.map((e) => staking_1.Delegation.fromJSON(e))
                : [],
            unbondingDelegations: Array.isArray(object === null || object === void 0 ? void 0 : object.unbondingDelegations)
                ? object.unbondingDelegations.map((e) => staking_1.UnbondingDelegation.fromJSON(e))
                : [],
            redelegations: Array.isArray(object === null || object === void 0 ? void 0 : object.redelegations)
                ? object.redelegations.map((e) => staking_1.Redelegation.fromJSON(e))
                : [],
            exported: isSet(object.exported) ? Boolean(object.exported) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? staking_1.Params.toJSON(message.params) : undefined);
        message.lastTotalPower !== undefined &&
            (obj.lastTotalPower = base64FromBytes(message.lastTotalPower !== undefined ? message.lastTotalPower : new Uint8Array()));
        if (message.lastValidatorPowers) {
            obj.lastValidatorPowers = message.lastValidatorPowers.map((e) => e ? exports.LastValidatorPower.toJSON(e) : undefined);
        }
        else {
            obj.lastValidatorPowers = [];
        }
        if (message.validators) {
            obj.validators = message.validators.map((e) => (e ? staking_1.Validator.toJSON(e) : undefined));
        }
        else {
            obj.validators = [];
        }
        if (message.delegations) {
            obj.delegations = message.delegations.map((e) => (e ? staking_1.Delegation.toJSON(e) : undefined));
        }
        else {
            obj.delegations = [];
        }
        if (message.unbondingDelegations) {
            obj.unbondingDelegations = message.unbondingDelegations.map((e) => e ? staking_1.UnbondingDelegation.toJSON(e) : undefined);
        }
        else {
            obj.unbondingDelegations = [];
        }
        if (message.redelegations) {
            obj.redelegations = message.redelegations.map((e) => (e ? staking_1.Redelegation.toJSON(e) : undefined));
        }
        else {
            obj.redelegations = [];
        }
        message.exported !== undefined && (obj.exported = message.exported);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null ? staking_1.Params.fromPartial(object.params) : undefined;
        message.lastTotalPower = (_a = object.lastTotalPower) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.lastValidatorPowers =
            ((_b = object.lastValidatorPowers) === null || _b === void 0 ? void 0 : _b.map((e) => exports.LastValidatorPower.fromPartial(e))) || [];
        message.validators = ((_c = object.validators) === null || _c === void 0 ? void 0 : _c.map((e) => staking_1.Validator.fromPartial(e))) || [];
        message.delegations = ((_d = object.delegations) === null || _d === void 0 ? void 0 : _d.map((e) => staking_1.Delegation.fromPartial(e))) || [];
        message.unbondingDelegations =
            ((_e = object.unbondingDelegations) === null || _e === void 0 ? void 0 : _e.map((e) => staking_1.UnbondingDelegation.fromPartial(e))) || [];
        message.redelegations = ((_f = object.redelegations) === null || _f === void 0 ? void 0 : _f.map((e) => staking_1.Redelegation.fromPartial(e))) || [];
        message.exported = (_g = object.exported) !== null && _g !== void 0 ? _g : false;
        return message;
    },
};
function createBaseLastValidatorPower() {
    return { address: "", power: long_1.default.ZERO };
}
exports.LastValidatorPower = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (!message.power.isZero()) {
            writer.uint32(16).int64(message.power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastValidatorPower();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.power = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            power: isSet(object.power) ? long_1.default.fromValue(object.power) : long_1.default.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.power !== undefined && (obj.power = (message.power || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLastValidatorPower();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.power =
            object.power !== undefined && object.power !== null ? long_1.default.fromValue(object.power) : long_1.default.ZERO;
        return message;
    },
};
var tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = tsProtoGlobalThis.atob || ((b64) => tsProtoGlobalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = tsProtoGlobalThis.btoa || ((bin) => tsProtoGlobalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    arr.forEach((byte) => {
        bin.push(String.fromCharCode(byte));
    });
    return btoa(bin.join(""));
}
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=genesis.js.map