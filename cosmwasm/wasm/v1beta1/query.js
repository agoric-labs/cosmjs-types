"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryCodesResponse = exports.QueryCodesRequest = exports.QueryCodeResponse = exports.CodeInfoResponse = exports.QueryCodeRequest = exports.QuerySmartContractStateResponse = exports.QuerySmartContractStateRequest = exports.QueryRawContractStateResponse = exports.QueryRawContractStateRequest = exports.QueryAllContractStateResponse = exports.QueryAllContractStateRequest = exports.QueryContractsByCodeResponse = exports.QueryContractsByCodeRequest = exports.QueryContractHistoryResponse = exports.QueryContractHistoryRequest = exports.QueryContractInfoResponse = exports.QueryContractInfoRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const types_1 = require("../../../cosmwasm/wasm/v1beta1/types");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
exports.protobufPackage = "cosmwasm.wasm.v1beta1";
const baseQueryContractInfoRequest = { address: "" };
exports.QueryContractInfoRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryContractInfoRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryContractInfoRequest };
        message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = { ...baseQueryContractInfoRequest };
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
const baseQueryContractInfoResponse = { address: "" };
exports.QueryContractInfoResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.contractInfo !== undefined) {
            types_1.ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryContractInfoResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.contractInfo = types_1.ContractInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryContractInfoResponse };
        message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
        message.contractInfo =
            object.contractInfo !== undefined && object.contractInfo !== null
                ? types_1.ContractInfo.fromJSON(object.contractInfo)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.contractInfo !== undefined &&
            (obj.contractInfo = message.contractInfo ? types_1.ContractInfo.toJSON(message.contractInfo) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = { ...baseQueryContractInfoResponse };
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.contractInfo =
            object.contractInfo !== undefined && object.contractInfo !== null
                ? types_1.ContractInfo.fromPartial(object.contractInfo)
                : undefined;
        return message;
    },
};
const baseQueryContractHistoryRequest = { address: "" };
exports.QueryContractHistoryRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryContractHistoryRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryContractHistoryRequest };
        message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = { ...baseQueryContractHistoryRequest };
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryContractHistoryResponse = {};
exports.QueryContractHistoryResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.entries) {
            types_1.ContractCodeHistoryEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryContractHistoryResponse };
        message.entries = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(types_1.ContractCodeHistoryEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        const message = { ...baseQueryContractHistoryResponse };
        message.entries = ((_a = object.entries) !== null && _a !== void 0 ? _a : []).map((e) => types_1.ContractCodeHistoryEntry.fromJSON(e));
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map((e) => (e ? types_1.ContractCodeHistoryEntry.toJSON(e) : undefined));
        }
        else {
            obj.entries = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = { ...baseQueryContractHistoryResponse };
        message.entries = ((_a = object.entries) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.ContractCodeHistoryEntry.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryContractsByCodeRequest = { codeId: long_1.default.UZERO };
exports.QueryContractsByCodeRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.codeId.isZero()) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryContractsByCodeRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryContractsByCodeRequest };
        message.codeId =
            object.codeId !== undefined && object.codeId !== null ? long_1.default.fromString(object.codeId) : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = (message.codeId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryContractsByCodeRequest };
        message.codeId =
            object.codeId !== undefined && object.codeId !== null ? long_1.default.fromValue(object.codeId) : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryContractsByCodeResponse = { contracts: "" };
exports.QueryContractsByCodeResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.contracts) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryContractsByCodeResponse };
        message.contracts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contracts.push(reader.string());
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        const message = { ...baseQueryContractsByCodeResponse };
        message.contracts = ((_a = object.contracts) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.contracts) {
            obj.contracts = message.contracts.map((e) => e);
        }
        else {
            obj.contracts = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = { ...baseQueryContractsByCodeResponse };
        message.contracts = ((_a = object.contracts) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryAllContractStateRequest = { address: "" };
exports.QueryAllContractStateRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllContractStateRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllContractStateRequest };
        message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = { ...baseQueryAllContractStateRequest };
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryAllContractStateResponse = {};
exports.QueryAllContractStateResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.models) {
            types_1.Model.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllContractStateResponse };
        message.models = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.models.push(types_1.Model.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        const message = { ...baseQueryAllContractStateResponse };
        message.models = ((_a = object.models) !== null && _a !== void 0 ? _a : []).map((e) => types_1.Model.fromJSON(e));
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.models) {
            obj.models = message.models.map((e) => (e ? types_1.Model.toJSON(e) : undefined));
        }
        else {
            obj.models = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = { ...baseQueryAllContractStateResponse };
        message.models = ((_a = object.models) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.Model.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryRawContractStateRequest = { address: "" };
exports.QueryRawContractStateRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.queryData.length !== 0) {
            writer.uint32(18).bytes(message.queryData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryRawContractStateRequest };
        message.queryData = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.queryData = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryRawContractStateRequest };
        message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
        message.queryData =
            object.queryData !== undefined && object.queryData !== null
                ? bytesFromBase64(object.queryData)
                : new Uint8Array();
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.queryData !== undefined &&
            (obj.queryData = base64FromBytes(message.queryData !== undefined ? message.queryData : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = { ...baseQueryRawContractStateRequest };
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.queryData = (_b = object.queryData) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
const baseQueryRawContractStateResponse = {};
exports.QueryRawContractStateResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryRawContractStateResponse };
        message.data = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryRawContractStateResponse };
        message.data =
            object.data !== undefined && object.data !== null ? bytesFromBase64(object.data) : new Uint8Array();
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = { ...baseQueryRawContractStateResponse };
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
const baseQuerySmartContractStateRequest = { address: "" };
exports.QuerySmartContractStateRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.queryData.length !== 0) {
            writer.uint32(18).bytes(message.queryData);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQuerySmartContractStateRequest };
        message.queryData = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.queryData = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQuerySmartContractStateRequest };
        message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
        message.queryData =
            object.queryData !== undefined && object.queryData !== null
                ? bytesFromBase64(object.queryData)
                : new Uint8Array();
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.queryData !== undefined &&
            (obj.queryData = base64FromBytes(message.queryData !== undefined ? message.queryData : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = { ...baseQuerySmartContractStateRequest };
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.queryData = (_b = object.queryData) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
const baseQuerySmartContractStateResponse = {};
exports.QuerySmartContractStateResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQuerySmartContractStateResponse };
        message.data = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQuerySmartContractStateResponse };
        message.data =
            object.data !== undefined && object.data !== null ? bytesFromBase64(object.data) : new Uint8Array();
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = { ...baseQuerySmartContractStateResponse };
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
const baseQueryCodeRequest = { codeId: long_1.default.UZERO };
exports.QueryCodeRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.codeId.isZero()) {
            writer.uint32(8).uint64(message.codeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryCodeRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryCodeRequest };
        message.codeId =
            object.codeId !== undefined && object.codeId !== null ? long_1.default.fromString(object.codeId) : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = (message.codeId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryCodeRequest };
        message.codeId =
            object.codeId !== undefined && object.codeId !== null ? long_1.default.fromValue(object.codeId) : long_1.default.UZERO;
        return message;
    },
};
const baseCodeInfoResponse = { codeId: long_1.default.UZERO, creator: "", source: "", builder: "" };
exports.CodeInfoResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.codeId.isZero()) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.dataHash.length !== 0) {
            writer.uint32(26).bytes(message.dataHash);
        }
        if (message.source !== "") {
            writer.uint32(34).string(message.source);
        }
        if (message.builder !== "") {
            writer.uint32(42).string(message.builder);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCodeInfoResponse };
        message.dataHash = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.dataHash = reader.bytes();
                    break;
                case 4:
                    message.source = reader.string();
                    break;
                case 5:
                    message.builder = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCodeInfoResponse };
        message.codeId =
            object.codeId !== undefined && object.codeId !== null ? long_1.default.fromString(object.codeId) : long_1.default.UZERO;
        message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
        message.dataHash =
            object.dataHash !== undefined && object.dataHash !== null
                ? bytesFromBase64(object.dataHash)
                : new Uint8Array();
        message.source = object.source !== undefined && object.source !== null ? String(object.source) : "";
        message.builder = object.builder !== undefined && object.builder !== null ? String(object.builder) : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = (message.codeId || long_1.default.UZERO).toString());
        message.creator !== undefined && (obj.creator = message.creator);
        message.dataHash !== undefined &&
            (obj.dataHash = base64FromBytes(message.dataHash !== undefined ? message.dataHash : new Uint8Array()));
        message.source !== undefined && (obj.source = message.source);
        message.builder !== undefined && (obj.builder = message.builder);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = { ...baseCodeInfoResponse };
        message.codeId =
            object.codeId !== undefined && object.codeId !== null ? long_1.default.fromValue(object.codeId) : long_1.default.UZERO;
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.dataHash = (_b = object.dataHash) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.source = (_c = object.source) !== null && _c !== void 0 ? _c : "";
        message.builder = (_d = object.builder) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
const baseQueryCodeResponse = {};
exports.QueryCodeResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.codeInfo !== undefined) {
            exports.CodeInfoResponse.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryCodeResponse };
        message.data = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeInfo = exports.CodeInfoResponse.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryCodeResponse };
        message.codeInfo =
            object.codeInfo !== undefined && object.codeInfo !== null
                ? exports.CodeInfoResponse.fromJSON(object.codeInfo)
                : undefined;
        message.data =
            object.data !== undefined && object.data !== null ? bytesFromBase64(object.data) : new Uint8Array();
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.codeInfo !== undefined &&
            (obj.codeInfo = message.codeInfo ? exports.CodeInfoResponse.toJSON(message.codeInfo) : undefined);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = { ...baseQueryCodeResponse };
        message.codeInfo =
            object.codeInfo !== undefined && object.codeInfo !== null
                ? exports.CodeInfoResponse.fromPartial(object.codeInfo)
                : undefined;
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
const baseQueryCodesRequest = {};
exports.QueryCodesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryCodesRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryCodesRequest };
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryCodesRequest };
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryCodesResponse = {};
exports.QueryCodesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.codeInfos) {
            exports.CodeInfoResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryCodesResponse };
        message.codeInfos = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeInfos.push(exports.CodeInfoResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
        const message = { ...baseQueryCodesResponse };
        message.codeInfos = ((_a = object.codeInfos) !== null && _a !== void 0 ? _a : []).map((e) => exports.CodeInfoResponse.fromJSON(e));
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.codeInfos) {
            obj.codeInfos = message.codeInfos.map((e) => (e ? exports.CodeInfoResponse.toJSON(e) : undefined));
        }
        else {
            obj.codeInfos = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = { ...baseQueryCodesResponse };
        message.codeInfos = ((_a = object.codeInfos) === null || _a === void 0 ? void 0 : _a.map((e) => exports.CodeInfoResponse.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.ContractInfo = this.ContractInfo.bind(this);
        this.ContractHistory = this.ContractHistory.bind(this);
        this.ContractsByCode = this.ContractsByCode.bind(this);
        this.AllContractState = this.AllContractState.bind(this);
        this.RawContractState = this.RawContractState.bind(this);
        this.SmartContractState = this.SmartContractState.bind(this);
        this.Code = this.Code.bind(this);
        this.Codes = this.Codes.bind(this);
    }
    ContractInfo(request) {
        const data = exports.QueryContractInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1beta1.Query", "ContractInfo", data);
        return promise.then((data) => exports.QueryContractInfoResponse.decode(new minimal_1.default.Reader(data)));
    }
    ContractHistory(request) {
        const data = exports.QueryContractHistoryRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1beta1.Query", "ContractHistory", data);
        return promise.then((data) => exports.QueryContractHistoryResponse.decode(new minimal_1.default.Reader(data)));
    }
    ContractsByCode(request) {
        const data = exports.QueryContractsByCodeRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1beta1.Query", "ContractsByCode", data);
        return promise.then((data) => exports.QueryContractsByCodeResponse.decode(new minimal_1.default.Reader(data)));
    }
    AllContractState(request) {
        const data = exports.QueryAllContractStateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1beta1.Query", "AllContractState", data);
        return promise.then((data) => exports.QueryAllContractStateResponse.decode(new minimal_1.default.Reader(data)));
    }
    RawContractState(request) {
        const data = exports.QueryRawContractStateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1beta1.Query", "RawContractState", data);
        return promise.then((data) => exports.QueryRawContractStateResponse.decode(new minimal_1.default.Reader(data)));
    }
    SmartContractState(request) {
        const data = exports.QuerySmartContractStateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1beta1.Query", "SmartContractState", data);
        return promise.then((data) => exports.QuerySmartContractStateResponse.decode(new minimal_1.default.Reader(data)));
    }
    Code(request) {
        const data = exports.QueryCodeRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1beta1.Query", "Code", data);
        return promise.then((data) => exports.QueryCodeResponse.decode(new minimal_1.default.Reader(data)));
    }
    Codes(request) {
        const data = exports.QueryCodesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmwasm.wasm.v1beta1.Query", "Codes", data);
        return promise.then((data) => exports.QueryCodesResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
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
//# sourceMappingURL=query.js.map