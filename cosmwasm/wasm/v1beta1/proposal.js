"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnpinCodesProposal = exports.PinCodesProposal = exports.ClearAdminProposal = exports.UpdateAdminProposal = exports.MigrateContractProposal = exports.InstantiateContractProposal = exports.StoreCodeProposal = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const types_1 = require("../../../cosmwasm/wasm/v1beta1/types");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "cosmwasm.wasm.v1beta1";
const baseStoreCodeProposal = { title: "", description: "", runAs: "", source: "", builder: "" };
exports.StoreCodeProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.wasmByteCode.length !== 0) {
            writer.uint32(34).bytes(message.wasmByteCode);
        }
        if (message.source !== "") {
            writer.uint32(42).string(message.source);
        }
        if (message.builder !== "") {
            writer.uint32(50).string(message.builder);
        }
        if (message.instantiatePermission !== undefined) {
            types_1.AccessConfig.encode(message.instantiatePermission, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStoreCodeProposal };
        message.wasmByteCode = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.runAs = reader.string();
                    break;
                case 4:
                    message.wasmByteCode = reader.bytes();
                    break;
                case 5:
                    message.source = reader.string();
                    break;
                case 6:
                    message.builder = reader.string();
                    break;
                case 7:
                    message.instantiatePermission = types_1.AccessConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStoreCodeProposal };
        message.title = object.title !== undefined && object.title !== null ? String(object.title) : "";
        message.description =
            object.description !== undefined && object.description !== null ? String(object.description) : "";
        message.runAs = object.runAs !== undefined && object.runAs !== null ? String(object.runAs) : "";
        message.wasmByteCode =
            object.wasmByteCode !== undefined && object.wasmByteCode !== null
                ? bytesFromBase64(object.wasmByteCode)
                : new Uint8Array();
        message.source = object.source !== undefined && object.source !== null ? String(object.source) : "";
        message.builder = object.builder !== undefined && object.builder !== null ? String(object.builder) : "";
        message.instantiatePermission =
            object.instantiatePermission !== undefined && object.instantiatePermission !== null
                ? types_1.AccessConfig.fromJSON(object.instantiatePermission)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.runAs !== undefined && (obj.runAs = message.runAs);
        message.wasmByteCode !== undefined &&
            (obj.wasmByteCode = base64FromBytes(message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array()));
        message.source !== undefined && (obj.source = message.source);
        message.builder !== undefined && (obj.builder = message.builder);
        message.instantiatePermission !== undefined &&
            (obj.instantiatePermission = message.instantiatePermission
                ? types_1.AccessConfig.toJSON(message.instantiatePermission)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = { ...baseStoreCodeProposal };
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.runAs = (_c = object.runAs) !== null && _c !== void 0 ? _c : "";
        message.wasmByteCode = (_d = object.wasmByteCode) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.source = (_e = object.source) !== null && _e !== void 0 ? _e : "";
        message.builder = (_f = object.builder) !== null && _f !== void 0 ? _f : "";
        message.instantiatePermission =
            object.instantiatePermission !== undefined && object.instantiatePermission !== null
                ? types_1.AccessConfig.fromPartial(object.instantiatePermission)
                : undefined;
        return message;
    },
};
const baseInstantiateContractProposal = {
    title: "",
    description: "",
    runAs: "",
    admin: "",
    codeId: long_1.default.UZERO,
    label: "",
};
exports.InstantiateContractProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.admin !== "") {
            writer.uint32(34).string(message.admin);
        }
        if (!message.codeId.isZero()) {
            writer.uint32(40).uint64(message.codeId);
        }
        if (message.label !== "") {
            writer.uint32(50).string(message.label);
        }
        if (message.initMsg.length !== 0) {
            writer.uint32(58).bytes(message.initMsg);
        }
        for (const v of message.funds) {
            coin_1.Coin.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInstantiateContractProposal };
        message.funds = [];
        message.initMsg = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.runAs = reader.string();
                    break;
                case 4:
                    message.admin = reader.string();
                    break;
                case 5:
                    message.codeId = reader.uint64();
                    break;
                case 6:
                    message.label = reader.string();
                    break;
                case 7:
                    message.initMsg = reader.bytes();
                    break;
                case 8:
                    message.funds.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = { ...baseInstantiateContractProposal };
        message.title = object.title !== undefined && object.title !== null ? String(object.title) : "";
        message.description =
            object.description !== undefined && object.description !== null ? String(object.description) : "";
        message.runAs = object.runAs !== undefined && object.runAs !== null ? String(object.runAs) : "";
        message.admin = object.admin !== undefined && object.admin !== null ? String(object.admin) : "";
        message.codeId =
            object.codeId !== undefined && object.codeId !== null ? long_1.default.fromString(object.codeId) : long_1.default.UZERO;
        message.label = object.label !== undefined && object.label !== null ? String(object.label) : "";
        message.initMsg =
            object.initMsg !== undefined && object.initMsg !== null
                ? bytesFromBase64(object.initMsg)
                : new Uint8Array();
        message.funds = ((_a = object.funds) !== null && _a !== void 0 ? _a : []).map((e) => coin_1.Coin.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.runAs !== undefined && (obj.runAs = message.runAs);
        message.admin !== undefined && (obj.admin = message.admin);
        message.codeId !== undefined && (obj.codeId = (message.codeId || long_1.default.UZERO).toString());
        message.label !== undefined && (obj.label = message.label);
        message.initMsg !== undefined &&
            (obj.initMsg = base64FromBytes(message.initMsg !== undefined ? message.initMsg : new Uint8Array()));
        if (message.funds) {
            obj.funds = message.funds.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.funds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = { ...baseInstantiateContractProposal };
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.runAs = (_c = object.runAs) !== null && _c !== void 0 ? _c : "";
        message.admin = (_d = object.admin) !== null && _d !== void 0 ? _d : "";
        message.codeId =
            object.codeId !== undefined && object.codeId !== null ? long_1.default.fromValue(object.codeId) : long_1.default.UZERO;
        message.label = (_e = object.label) !== null && _e !== void 0 ? _e : "";
        message.initMsg = (_f = object.initMsg) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.funds = ((_g = object.funds) === null || _g === void 0 ? void 0 : _g.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
const baseMigrateContractProposal = {
    title: "",
    description: "",
    runAs: "",
    contract: "",
    codeId: long_1.default.UZERO,
};
exports.MigrateContractProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.contract !== "") {
            writer.uint32(34).string(message.contract);
        }
        if (!message.codeId.isZero()) {
            writer.uint32(40).uint64(message.codeId);
        }
        if (message.migrateMsg.length !== 0) {
            writer.uint32(50).bytes(message.migrateMsg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMigrateContractProposal };
        message.migrateMsg = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.runAs = reader.string();
                    break;
                case 4:
                    message.contract = reader.string();
                    break;
                case 5:
                    message.codeId = reader.uint64();
                    break;
                case 6:
                    message.migrateMsg = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMigrateContractProposal };
        message.title = object.title !== undefined && object.title !== null ? String(object.title) : "";
        message.description =
            object.description !== undefined && object.description !== null ? String(object.description) : "";
        message.runAs = object.runAs !== undefined && object.runAs !== null ? String(object.runAs) : "";
        message.contract =
            object.contract !== undefined && object.contract !== null ? String(object.contract) : "";
        message.codeId =
            object.codeId !== undefined && object.codeId !== null ? long_1.default.fromString(object.codeId) : long_1.default.UZERO;
        message.migrateMsg =
            object.migrateMsg !== undefined && object.migrateMsg !== null
                ? bytesFromBase64(object.migrateMsg)
                : new Uint8Array();
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.runAs !== undefined && (obj.runAs = message.runAs);
        message.contract !== undefined && (obj.contract = message.contract);
        message.codeId !== undefined && (obj.codeId = (message.codeId || long_1.default.UZERO).toString());
        message.migrateMsg !== undefined &&
            (obj.migrateMsg = base64FromBytes(message.migrateMsg !== undefined ? message.migrateMsg : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = { ...baseMigrateContractProposal };
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.runAs = (_c = object.runAs) !== null && _c !== void 0 ? _c : "";
        message.contract = (_d = object.contract) !== null && _d !== void 0 ? _d : "";
        message.codeId =
            object.codeId !== undefined && object.codeId !== null ? long_1.default.fromValue(object.codeId) : long_1.default.UZERO;
        message.migrateMsg = (_e = object.migrateMsg) !== null && _e !== void 0 ? _e : new Uint8Array();
        return message;
    },
};
const baseUpdateAdminProposal = { title: "", description: "", newAdmin: "", contract: "" };
exports.UpdateAdminProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        if (message.contract !== "") {
            writer.uint32(34).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUpdateAdminProposal };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.newAdmin = reader.string();
                    break;
                case 4:
                    message.contract = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseUpdateAdminProposal };
        message.title = object.title !== undefined && object.title !== null ? String(object.title) : "";
        message.description =
            object.description !== undefined && object.description !== null ? String(object.description) : "";
        message.newAdmin =
            object.newAdmin !== undefined && object.newAdmin !== null ? String(object.newAdmin) : "";
        message.contract =
            object.contract !== undefined && object.contract !== null ? String(object.contract) : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
        message.contract !== undefined && (obj.contract = message.contract);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = { ...baseUpdateAdminProposal };
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.newAdmin = (_c = object.newAdmin) !== null && _c !== void 0 ? _c : "";
        message.contract = (_d = object.contract) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
const baseClearAdminProposal = { title: "", description: "", contract: "" };
exports.ClearAdminProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClearAdminProposal };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.contract = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseClearAdminProposal };
        message.title = object.title !== undefined && object.title !== null ? String(object.title) : "";
        message.description =
            object.description !== undefined && object.description !== null ? String(object.description) : "";
        message.contract =
            object.contract !== undefined && object.contract !== null ? String(object.contract) : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.contract !== undefined && (obj.contract = message.contract);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = { ...baseClearAdminProposal };
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.contract = (_c = object.contract) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
const basePinCodesProposal = { title: "", description: "", codeIds: long_1.default.UZERO };
exports.PinCodesProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        writer.uint32(26).fork();
        for (const v of message.codeIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePinCodesProposal };
        message.codeIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.codeIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.codeIds.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = { ...basePinCodesProposal };
        message.title = object.title !== undefined && object.title !== null ? String(object.title) : "";
        message.description =
            object.description !== undefined && object.description !== null ? String(object.description) : "";
        message.codeIds = ((_a = object.codeIds) !== null && _a !== void 0 ? _a : []).map((e) => long_1.default.fromString(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.codeIds) {
            obj.codeIds = message.codeIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.codeIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = { ...basePinCodesProposal };
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.codeIds = ((_c = object.codeIds) === null || _c === void 0 ? void 0 : _c.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
const baseUnpinCodesProposal = { title: "", description: "", codeIds: long_1.default.UZERO };
exports.UnpinCodesProposal = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        writer.uint32(26).fork();
        for (const v of message.codeIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseUnpinCodesProposal };
        message.codeIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.codeIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.codeIds.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = { ...baseUnpinCodesProposal };
        message.title = object.title !== undefined && object.title !== null ? String(object.title) : "";
        message.description =
            object.description !== undefined && object.description !== null ? String(object.description) : "";
        message.codeIds = ((_a = object.codeIds) !== null && _a !== void 0 ? _a : []).map((e) => long_1.default.fromString(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.codeIds) {
            obj.codeIds = message.codeIds.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.codeIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = { ...baseUnpinCodesProposal };
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.codeIds = ((_c = object.codeIds) === null || _c === void 0 ? void 0 : _c.map((e) => long_1.default.fromValue(e))) || [];
        return message;
    },
};
var globalThis = (() => {
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
const atob = globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(""));
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=proposal.js.map