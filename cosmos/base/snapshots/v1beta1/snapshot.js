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
exports.SnapshotExtensionPayload = exports.SnapshotExtensionMeta = exports.SnapshotIAVLItem = exports.SnapshotStoreItem = exports.SnapshotItem = exports.Metadata = exports.Snapshot = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.base.snapshots.v1beta1";
function createBaseSnapshot() {
    return { height: long_1.default.UZERO, format: 0, chunks: 0, hash: new Uint8Array(), metadata: undefined };
}
exports.Snapshot = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunks !== 0) {
            writer.uint32(24).uint32(message.chunks);
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.metadata !== undefined) {
            exports.Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunks = reader.uint32();
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.metadata = exports.Metadata.decode(reader, reader.uint32());
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
            height: isSet(object.height) ? long_1.default.fromValue(object.height) : long_1.default.UZERO,
            format: isSet(object.format) ? Number(object.format) : 0,
            chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
            metadata: isSet(object.metadata) ? exports.Metadata.fromJSON(object.metadata) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || long_1.default.UZERO).toString());
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.metadata !== undefined &&
            (obj.metadata = message.metadata ? exports.Metadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSnapshot();
        message.height =
            object.height !== undefined && object.height !== null ? long_1.default.fromValue(object.height) : long_1.default.UZERO;
        message.format = (_a = object.format) !== null && _a !== void 0 ? _a : 0;
        message.chunks = (_b = object.chunks) !== null && _b !== void 0 ? _b : 0;
        message.hash = (_c = object.hash) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? exports.Metadata.fromPartial(object.metadata)
                : undefined;
        return message;
    },
};
function createBaseMetadata() {
    return { chunkHashes: [] };
}
exports.Metadata = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.chunkHashes) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunkHashes.push(reader.bytes());
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
            chunkHashes: Array.isArray(object === null || object === void 0 ? void 0 : object.chunkHashes)
                ? object.chunkHashes.map((e) => bytesFromBase64(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.chunkHashes) {
            obj.chunkHashes = message.chunkHashes.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.chunkHashes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMetadata();
        message.chunkHashes = ((_a = object.chunkHashes) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseSnapshotItem() {
    return { store: undefined, iavl: undefined, extension: undefined, extensionPayload: undefined };
}
exports.SnapshotItem = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.store !== undefined) {
            exports.SnapshotStoreItem.encode(message.store, writer.uint32(10).fork()).ldelim();
        }
        if (message.iavl !== undefined) {
            exports.SnapshotIAVLItem.encode(message.iavl, writer.uint32(18).fork()).ldelim();
        }
        if (message.extension !== undefined) {
            exports.SnapshotExtensionMeta.encode(message.extension, writer.uint32(26).fork()).ldelim();
        }
        if (message.extensionPayload !== undefined) {
            exports.SnapshotExtensionPayload.encode(message.extensionPayload, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.store = exports.SnapshotStoreItem.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.iavl = exports.SnapshotIAVLItem.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.extension = exports.SnapshotExtensionMeta.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.extensionPayload = exports.SnapshotExtensionPayload.decode(reader, reader.uint32());
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
            store: isSet(object.store) ? exports.SnapshotStoreItem.fromJSON(object.store) : undefined,
            iavl: isSet(object.iavl) ? exports.SnapshotIAVLItem.fromJSON(object.iavl) : undefined,
            extension: isSet(object.extension) ? exports.SnapshotExtensionMeta.fromJSON(object.extension) : undefined,
            extensionPayload: isSet(object.extensionPayload)
                ? exports.SnapshotExtensionPayload.fromJSON(object.extensionPayload)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.store !== undefined &&
            (obj.store = message.store ? exports.SnapshotStoreItem.toJSON(message.store) : undefined);
        message.iavl !== undefined &&
            (obj.iavl = message.iavl ? exports.SnapshotIAVLItem.toJSON(message.iavl) : undefined);
        message.extension !== undefined &&
            (obj.extension = message.extension ? exports.SnapshotExtensionMeta.toJSON(message.extension) : undefined);
        message.extensionPayload !== undefined &&
            (obj.extensionPayload = message.extensionPayload
                ? exports.SnapshotExtensionPayload.toJSON(message.extensionPayload)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshotItem();
        message.store =
            object.store !== undefined && object.store !== null
                ? exports.SnapshotStoreItem.fromPartial(object.store)
                : undefined;
        message.iavl =
            object.iavl !== undefined && object.iavl !== null
                ? exports.SnapshotIAVLItem.fromPartial(object.iavl)
                : undefined;
        message.extension =
            object.extension !== undefined && object.extension !== null
                ? exports.SnapshotExtensionMeta.fromPartial(object.extension)
                : undefined;
        message.extensionPayload =
            object.extensionPayload !== undefined && object.extensionPayload !== null
                ? exports.SnapshotExtensionPayload.fromPartial(object.extensionPayload)
                : undefined;
        return message;
    },
};
function createBaseSnapshotStoreItem() {
    return { name: "" };
}
exports.SnapshotStoreItem = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotStoreItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSnapshotStoreItem();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseSnapshotIAVLItem() {
    return { key: new Uint8Array(), value: new Uint8Array(), version: long_1.default.ZERO, height: 0 };
}
exports.SnapshotIAVLItem = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (!message.version.isZero()) {
            writer.uint32(24).int64(message.version);
        }
        if (message.height !== 0) {
            writer.uint32(32).int32(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotIAVLItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.version = reader.int64();
                    break;
                case 4:
                    message.height = reader.int32();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
            version: isSet(object.version) ? long_1.default.fromValue(object.version) : long_1.default.ZERO,
            height: isSet(object.height) ? Number(object.height) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.version !== undefined && (obj.version = (message.version || long_1.default.ZERO).toString());
        message.height !== undefined && (obj.height = Math.round(message.height));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSnapshotIAVLItem();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.version =
            object.version !== undefined && object.version !== null ? long_1.default.fromValue(object.version) : long_1.default.ZERO;
        message.height = (_c = object.height) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseSnapshotExtensionMeta() {
    return { name: "", format: 0 };
}
exports.SnapshotExtensionMeta = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotExtensionMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.format = reader.uint32();
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
            name: isSet(object.name) ? String(object.name) : "",
            format: isSet(object.format) ? Number(object.format) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.format !== undefined && (obj.format = Math.round(message.format));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSnapshotExtensionMeta();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.format = (_b = object.format) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseSnapshotExtensionPayload() {
    return { payload: new Uint8Array() };
}
exports.SnapshotExtensionPayload = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.payload.length !== 0) {
            writer.uint32(10).bytes(message.payload);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotExtensionPayload();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payload = reader.bytes();
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
            payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.payload !== undefined &&
            (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSnapshotExtensionPayload();
        message.payload = (_a = object.payload) !== null && _a !== void 0 ? _a : new Uint8Array();
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
//# sourceMappingURL=snapshot.js.map