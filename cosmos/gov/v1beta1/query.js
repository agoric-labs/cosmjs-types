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
exports.QueryClientImpl = exports.QueryTallyResultResponse = exports.QueryTallyResultRequest = exports.QueryDepositsResponse = exports.QueryDepositsRequest = exports.QueryDepositResponse = exports.QueryDepositRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryVotesResponse = exports.QueryVotesRequest = exports.QueryVoteResponse = exports.QueryVoteRequest = exports.QueryProposalsResponse = exports.QueryProposalsRequest = exports.QueryProposalResponse = exports.QueryProposalRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const gov_1 = require("../../../cosmos/gov/v1beta1/gov");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
exports.protobufPackage = "cosmos.gov.v1beta1";
function createBaseQueryProposalRequest() {
    return { proposalId: long_1.default.UZERO };
}
exports.QueryProposalRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
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
            proposalId: isSet(object.proposalId) ? long_1.default.fromValue(object.proposalId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalRequest();
        message.proposalId =
            object.proposalId !== undefined && object.proposalId !== null
                ? long_1.default.fromValue(object.proposalId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryProposalResponse() {
    return { proposal: undefined };
}
exports.QueryProposalResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proposal !== undefined) {
            gov_1.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = gov_1.Proposal.decode(reader, reader.uint32());
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
            proposal: isSet(object.proposal) ? gov_1.Proposal.fromJSON(object.proposal) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal !== undefined &&
            (obj.proposal = message.proposal ? gov_1.Proposal.toJSON(message.proposal) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalResponse();
        message.proposal =
            object.proposal !== undefined && object.proposal !== null
                ? gov_1.Proposal.fromPartial(object.proposal)
                : undefined;
        return message;
    },
};
function createBaseQueryProposalsRequest() {
    return { proposalStatus: 0, voter: "", depositor: "", pagination: undefined };
}
exports.QueryProposalsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proposalStatus !== 0) {
            writer.uint32(8).int32(message.proposalStatus);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.depositor !== "") {
            writer.uint32(26).string(message.depositor);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalStatus = reader.int32();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.depositor = reader.string();
                    break;
                case 4:
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
        return {
            proposalStatus: isSet(object.proposalStatus) ? (0, gov_1.proposalStatusFromJSON)(object.proposalStatus) : 0,
            voter: isSet(object.voter) ? String(object.voter) : "",
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalStatus !== undefined &&
            (obj.proposalStatus = (0, gov_1.proposalStatusToJSON)(message.proposalStatus));
        message.voter !== undefined && (obj.voter = message.voter);
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryProposalsRequest();
        message.proposalStatus = (_a = object.proposalStatus) !== null && _a !== void 0 ? _a : 0;
        message.voter = (_b = object.voter) !== null && _b !== void 0 ? _b : "";
        message.depositor = (_c = object.depositor) !== null && _c !== void 0 ? _c : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryProposalsResponse() {
    return { proposals: [], pagination: undefined };
}
exports.QueryProposalsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.proposals) {
            gov_1.Proposal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposals.push(gov_1.Proposal.decode(reader, reader.uint32()));
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
        return {
            proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals)
                ? object.proposals.map((e) => gov_1.Proposal.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map((e) => (e ? gov_1.Proposal.toJSON(e) : undefined));
        }
        else {
            obj.proposals = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryProposalsResponse();
        message.proposals = ((_a = object.proposals) === null || _a === void 0 ? void 0 : _a.map((e) => gov_1.Proposal.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryVoteRequest() {
    return { proposalId: long_1.default.UZERO, voter: "" };
}
exports.QueryVoteRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVoteRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
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
            proposalId: isSet(object.proposalId) ? long_1.default.fromValue(object.proposalId) : long_1.default.UZERO,
            voter: isSet(object.voter) ? String(object.voter) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || long_1.default.UZERO).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryVoteRequest();
        message.proposalId =
            object.proposalId !== undefined && object.proposalId !== null
                ? long_1.default.fromValue(object.proposalId)
                : long_1.default.UZERO;
        message.voter = (_a = object.voter) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryVoteResponse() {
    return { vote: undefined };
}
exports.QueryVoteResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vote !== undefined) {
            gov_1.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVoteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote = gov_1.Vote.decode(reader, reader.uint32());
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
            vote: isSet(object.vote) ? gov_1.Vote.fromJSON(object.vote) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.vote !== undefined && (obj.vote = message.vote ? gov_1.Vote.toJSON(message.vote) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVoteResponse();
        message.vote =
            object.vote !== undefined && object.vote !== null ? gov_1.Vote.fromPartial(object.vote) : undefined;
        return message;
    },
};
function createBaseQueryVotesRequest() {
    return { proposalId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryVotesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
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
        return {
            proposalId: isSet(object.proposalId) ? long_1.default.fromValue(object.proposalId) : long_1.default.UZERO,
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesRequest();
        message.proposalId =
            object.proposalId !== undefined && object.proposalId !== null
                ? long_1.default.fromValue(object.proposalId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryVotesResponse() {
    return { votes: [], pagination: undefined };
}
exports.QueryVotesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.votes) {
            gov_1.Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(gov_1.Vote.decode(reader, reader.uint32()));
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
        return {
            votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map((e) => gov_1.Vote.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map((e) => (e ? gov_1.Vote.toJSON(e) : undefined));
        }
        else {
            obj.votes = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryVotesResponse();
        message.votes = ((_a = object.votes) === null || _a === void 0 ? void 0 : _a.map((e) => gov_1.Vote.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryParamsRequest() {
    return { paramsType: "" };
}
exports.QueryParamsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.paramsType !== "") {
            writer.uint32(10).string(message.paramsType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paramsType = reader.string();
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
            paramsType: isSet(object.paramsType) ? String(object.paramsType) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.paramsType !== undefined && (obj.paramsType = message.paramsType);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryParamsRequest();
        message.paramsType = (_a = object.paramsType) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { votingParams: undefined, depositParams: undefined, tallyParams: undefined };
}
exports.QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.votingParams !== undefined) {
            gov_1.VotingParams.encode(message.votingParams, writer.uint32(10).fork()).ldelim();
        }
        if (message.depositParams !== undefined) {
            gov_1.DepositParams.encode(message.depositParams, writer.uint32(18).fork()).ldelim();
        }
        if (message.tallyParams !== undefined) {
            gov_1.TallyParams.encode(message.tallyParams, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votingParams = gov_1.VotingParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.depositParams = gov_1.DepositParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tallyParams = gov_1.TallyParams.decode(reader, reader.uint32());
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
            votingParams: isSet(object.votingParams) ? gov_1.VotingParams.fromJSON(object.votingParams) : undefined,
            depositParams: isSet(object.depositParams) ? gov_1.DepositParams.fromJSON(object.depositParams) : undefined,
            tallyParams: isSet(object.tallyParams) ? gov_1.TallyParams.fromJSON(object.tallyParams) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.votingParams !== undefined &&
            (obj.votingParams = message.votingParams ? gov_1.VotingParams.toJSON(message.votingParams) : undefined);
        message.depositParams !== undefined &&
            (obj.depositParams = message.depositParams ? gov_1.DepositParams.toJSON(message.depositParams) : undefined);
        message.tallyParams !== undefined &&
            (obj.tallyParams = message.tallyParams ? gov_1.TallyParams.toJSON(message.tallyParams) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.votingParams =
            object.votingParams !== undefined && object.votingParams !== null
                ? gov_1.VotingParams.fromPartial(object.votingParams)
                : undefined;
        message.depositParams =
            object.depositParams !== undefined && object.depositParams !== null
                ? gov_1.DepositParams.fromPartial(object.depositParams)
                : undefined;
        message.tallyParams =
            object.tallyParams !== undefined && object.tallyParams !== null
                ? gov_1.TallyParams.fromPartial(object.tallyParams)
                : undefined;
        return message;
    },
};
function createBaseQueryDepositRequest() {
    return { proposalId: long_1.default.UZERO, depositor: "" };
}
exports.QueryDepositRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.depositor = reader.string();
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
            proposalId: isSet(object.proposalId) ? long_1.default.fromValue(object.proposalId) : long_1.default.UZERO,
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || long_1.default.UZERO).toString());
        message.depositor !== undefined && (obj.depositor = message.depositor);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDepositRequest();
        message.proposalId =
            object.proposalId !== undefined && object.proposalId !== null
                ? long_1.default.fromValue(object.proposalId)
                : long_1.default.UZERO;
        message.depositor = (_a = object.depositor) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDepositResponse() {
    return { deposit: undefined };
}
exports.QueryDepositResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deposit !== undefined) {
            gov_1.Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposit = gov_1.Deposit.decode(reader, reader.uint32());
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
            deposit: isSet(object.deposit) ? gov_1.Deposit.fromJSON(object.deposit) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.deposit !== undefined &&
            (obj.deposit = message.deposit ? gov_1.Deposit.toJSON(message.deposit) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDepositResponse();
        message.deposit =
            object.deposit !== undefined && object.deposit !== null
                ? gov_1.Deposit.fromPartial(object.deposit)
                : undefined;
        return message;
    },
};
function createBaseQueryDepositsRequest() {
    return { proposalId: long_1.default.UZERO, pagination: undefined };
}
exports.QueryDepositsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
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
        return {
            proposalId: isSet(object.proposalId) ? long_1.default.fromValue(object.proposalId) : long_1.default.UZERO,
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDepositsRequest();
        message.proposalId =
            object.proposalId !== undefined && object.proposalId !== null
                ? long_1.default.fromValue(object.proposalId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDepositsResponse() {
    return { deposits: [], pagination: undefined };
}
exports.QueryDepositsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.deposits) {
            gov_1.Deposit.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDepositsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposits.push(gov_1.Deposit.decode(reader, reader.uint32()));
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
        return {
            deposits: Array.isArray(object === null || object === void 0 ? void 0 : object.deposits) ? object.deposits.map((e) => gov_1.Deposit.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.deposits) {
            obj.deposits = message.deposits.map((e) => (e ? gov_1.Deposit.toJSON(e) : undefined));
        }
        else {
            obj.deposits = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDepositsResponse();
        message.deposits = ((_a = object.deposits) === null || _a === void 0 ? void 0 : _a.map((e) => gov_1.Deposit.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryTallyResultRequest() {
    return { proposalId: long_1.default.UZERO };
}
exports.QueryTallyResultRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTallyResultRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
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
            proposalId: isSet(object.proposalId) ? long_1.default.fromValue(object.proposalId) : long_1.default.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTallyResultRequest();
        message.proposalId =
            object.proposalId !== undefined && object.proposalId !== null
                ? long_1.default.fromValue(object.proposalId)
                : long_1.default.UZERO;
        return message;
    },
};
function createBaseQueryTallyResultResponse() {
    return { tally: undefined };
}
exports.QueryTallyResultResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tally !== undefined) {
            gov_1.TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTallyResultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tally = gov_1.TallyResult.decode(reader, reader.uint32());
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
            tally: isSet(object.tally) ? gov_1.TallyResult.fromJSON(object.tally) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.tally !== undefined &&
            (obj.tally = message.tally ? gov_1.TallyResult.toJSON(message.tally) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTallyResultResponse();
        message.tally =
            object.tally !== undefined && object.tally !== null ? gov_1.TallyResult.fromPartial(object.tally) : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Proposal = this.Proposal.bind(this);
        this.Proposals = this.Proposals.bind(this);
        this.Vote = this.Vote.bind(this);
        this.Votes = this.Votes.bind(this);
        this.Params = this.Params.bind(this);
        this.Deposit = this.Deposit.bind(this);
        this.Deposits = this.Deposits.bind(this);
        this.TallyResult = this.TallyResult.bind(this);
    }
    Proposal(request) {
        const data = exports.QueryProposalRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposal", data);
        return promise.then((data) => exports.QueryProposalResponse.decode(new _m0.Reader(data)));
    }
    Proposals(request) {
        const data = exports.QueryProposalsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposals", data);
        return promise.then((data) => exports.QueryProposalsResponse.decode(new _m0.Reader(data)));
    }
    Vote(request) {
        const data = exports.QueryVoteRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Vote", data);
        return promise.then((data) => exports.QueryVoteResponse.decode(new _m0.Reader(data)));
    }
    Votes(request) {
        const data = exports.QueryVotesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Votes", data);
        return promise.then((data) => exports.QueryVotesResponse.decode(new _m0.Reader(data)));
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    Deposit(request) {
        const data = exports.QueryDepositRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposit", data);
        return promise.then((data) => exports.QueryDepositResponse.decode(new _m0.Reader(data)));
    }
    Deposits(request) {
        const data = exports.QueryDepositsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposits", data);
        return promise.then((data) => exports.QueryDepositsResponse.decode(new _m0.Reader(data)));
    }
    TallyResult(request) {
        const data = exports.QueryTallyResultRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "TallyResult", data);
        return promise.then((data) => exports.QueryTallyResultResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map