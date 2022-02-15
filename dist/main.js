"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// This file is auto-generated, don't edit it
var cdn20180510_1 = require("@alicloud/cdn20180510"), $Cdn20180510 = cdn20180510_1;
// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
var $OpenApi = require("@alicloud/openapi-client");
var core = require("@actions/core");
// const github = require('@actions/github');
function getEnvPara(parameterName, defaultValue, raiseExceptionIfNone) {
    var _a;
    if (defaultValue === void 0) { defaultValue = undefined; }
    if (raiseExceptionIfNone === void 0) { raiseExceptionIfNone = true; }
    var parameterValue = (_a = process.env[parameterName]) !== null && _a !== void 0 ? _a : defaultValue;
    if (parameterValue === undefined) {
        console.log(parameterName + " not defined");
        core.setFailed(parameterName + " not defined");
        return;
    }
    return parameterValue;
}
var ACCESS_KEY_ID = getEnvPara("ACCESS_KEY_ID");
var ACCESS_KEY_SECRET = getEnvPara("ACCESS_KEY_SECRET");
var DOMAIN = getEnvPara("DOMAIN");
var REDIRECT_REGEX = getEnvPara("REDIRECT_REGEX");
var REDIRECT_REPLACEMENT = getEnvPara("REDIRECT_REPLACEMENT");
var REDIRECT_CONFIG_ID = getEnvPara("REDIRECT_CONFIG_ID");
var Cdn = /** @class */ (function () {
    function Cdn() {
    }
    /**
     * 使用AK&SK初始化账号Client
     * @param accessKeyId
     * @param accessKeySecret
     * @return Client
     * @throws Exception
     */
    Cdn.createClient = function () {
        var config = new $OpenApi.Config({
            // 您的AccessKey ID
            accessKeyId: ACCESS_KEY_ID,
            // 您的AccessKey Secret
            accessKeySecret: ACCESS_KEY_SECRET,
        });
        // 访问的域名
        config.endpoint = "cdn.aliyuncs.com";
        return new cdn20180510_1.default(config);
    };
    Cdn.updateHostRedirect = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var client, batchSetCdnDomainConfigRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = Cdn.createClient();
                        batchSetCdnDomainConfigRequest = new $Cdn20180510.BatchSetCdnDomainConfigRequest({
                            domainNames: DOMAIN,
                            functions: "[ { \"functionArgs\": [ { \"argName\": \"regex\", \"argValue\": \"" + REDIRECT_REGEX + "\" }, { \"argName\": \"replacement\", \"argValue\": \"" + REDIRECT_REPLACEMENT + "\" } ], \"functionName\": \"host_redirect\" , \"configId\": \"" + REDIRECT_CONFIG_ID + "\"} ]",
                        });
                        // 复制代码运行请自行打印 API 的返回值
                        return [4 /*yield*/, client.batchSetCdnDomainConfig(batchSetCdnDomainConfigRequest)];
                    case 1:
                        // 复制代码运行请自行打印 API 的返回值
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Cdn;
}());
exports.default = Cdn;
Cdn.updateHostRedirect(process.argv.slice(2));
