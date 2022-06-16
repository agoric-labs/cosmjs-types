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
exports.GenesisState = exports.GenesisOwners = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const capability_1 = require("../../../cosmos/capability/v1beta1/capability");
exports.protobufPackage = "cosmos.capability.v1beta1";
function createBaseGenesisOwners() {
    return { index: long_1.default.UZERO, indexOwners: undefined };
}
exports.GenesisOwners = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.index.isZero()) {
            writer.uint32(8).uint64(message.index);
        }
        if (message.indexOwners !== undefined) {
            capability_1.CapabilityOwners.encode(message.indexOwners, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisOwners();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint64();
                    break;
                case 2:
                    message.indexOwners = capability_1.CapabilityOwners.decode(reader, reader.uint32());
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
            index: isSet(object.index) ? long_1.default.fromValue(object.index) : long_1.default.UZERO,
            indexOwners: isSet(object.indexOwners) ? capability_1.CapabilityOwners.fromJSON(object.indexOwners) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = (message.index || long_1.default.UZERO).toString());
        message.indexOwners !== undefined &&
            (obj.indexOwners = message.indexOwners ? capability_1.CapabilityOwners.toJSON(message.indexOwners) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisOwners();
        message.index =
            object.index !== undefined && object.index !== null ? long_1.default.fromValue(object.index) : long_1.default.UZERO;
        message.indexOwners =
            object.indexOwners !== undefined && object.indexOwners !== null
                ? capability_1.CapabilityOwners.fromPartial(object.indexOwners)
                : undefined;
        return message;
    },
};
function createBaseGenesisState() {
    return { index: long_1.default.UZERO, owners: [] };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.index.isZero()) {
            writer.uint32(8).uint64(message.index);
        }
        for (const v of message.owners) {
            exports.GenesisOwners.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.index = reader.uint64();
                    break;
                case 2:
                    message.owners.push(exports.GenesisOwners.decode(reader, reader.uint32()));
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
            index: isSet(object.index) ? long_1.default.fromValue(object.index) : long_1.default.UZERO,
            owners: Array.isArray(object === null || object === void 0 ? void 0 : object.owners) ? object.owners.map((e) => exports.GenesisOwners.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = (message.index || long_1.default.UZERO).toString());
        if (message.owners) {
            obj.owners = message.owners.map((e) => (e ? exports.GenesisOwners.toJSON(e) : undefined));
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisState();
        message.index =
            object.index !== undefined && object.index !== null ? long_1.default.fromValue(object.index) : long_1.default.UZERO;
        message.owners = ((_a = object.owners) === null || _a === void 0 ? void 0 : _a.map((e) => exports.GenesisOwners.fromPartial(e))) || [];
        return message;
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=genesis.js.map