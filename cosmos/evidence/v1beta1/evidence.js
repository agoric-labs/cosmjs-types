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
exports.Equivocation = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "cosmos.evidence.v1beta1";
function createBaseEquivocation() {
    return { height: long_1.default.ZERO, time: undefined, power: long_1.default.ZERO, consensusAddress: "" };
}
exports.Equivocation = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(message.time, writer.uint32(18).fork()).ldelim();
        }
        if (!message.power.isZero()) {
            writer.uint32(24).int64(message.power);
        }
        if (message.consensusAddress !== "") {
            writer.uint32(34).string(message.consensusAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEquivocation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.time = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.power = reader.int64();
                    break;
                case 4:
                    message.consensusAddress = reader.string();
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
            height: isSet(object.height) ? long_1.default.fromValue(object.height) : long_1.default.ZERO,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            power: isSet(object.power) ? long_1.default.fromValue(object.power) : long_1.default.ZERO,
            consensusAddress: isSet(object.consensusAddress) ? String(object.consensusAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || long_1.default.ZERO).toString());
        message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
        message.power !== undefined && (obj.power = (message.power || long_1.default.ZERO).toString());
        message.consensusAddress !== undefined && (obj.consensusAddress = message.consensusAddress);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseEquivocation();
        message.height =
            object.height !== undefined && object.height !== null ? long_1.default.fromValue(object.height) : long_1.default.ZERO;
        message.time =
            object.time !== undefined && object.time !== null ? timestamp_1.Timestamp.fromPartial(object.time) : undefined;
        message.power =
            object.power !== undefined && object.power !== null ? long_1.default.fromValue(object.power) : long_1.default.ZERO;
        message.consensusAddress = (_a = object.consensusAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function toTimestamp(date) {
    const seconds = numberToLong(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds.toNumber() * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return toTimestamp(o);
    }
    else if (typeof o === "string") {
        return toTimestamp(new Date(o));
    }
    else {
        return timestamp_1.Timestamp.fromJSON(o);
    }
}
function numberToLong(number) {
    return long_1.default.fromNumber(number);
}
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=evidence.js.map