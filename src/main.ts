// This file is auto-generated, don't edit it
import Cdn20180510, * as $Cdn20180510 from '@alicloud/cdn20180510';
// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import * as $tea from '@alicloud/tea-typescript';
import * as core from '@actions/core';
// const github = require('@actions/github');


function getEnvPara(parameterName:string, defaultValue:any = undefined, raiseExceptionIfNone: boolean = true) {
    let parameterValue = process.env[parameterName] ?? defaultValue;
    if (parameterValue === undefined) {
        console.log(parameterName + " not defined");
        core.setFailed(parameterName + " not defined");
        return;
    }
    return parameterValue;
}

function getInputPara(parameterName:string) {
  let val = core.getInput(parameterName);
  if (val === "") {
    val = getEnvPara(parameterName);
  }
  return val;
}

const ACCESS_KEY_ID = getInputPara("accessKeyId");
const ACCESS_KEY_SECRET = getInputPara("accessKeySecret");
const DOMAIN = getInputPara("domain");
const REDIRECT_REGEX = getInputPara("regex");
const REDIRECT_REPLACEMENT = getInputPara("replacement");
const REDIRECT_CONFIG_ID = getInputPara("configId");

export default class Cdn {

  /**
   * 使用AK&SK初始化账号Client
   * @param accessKeyId
   * @param accessKeySecret
   * @return Client
   * @throws Exception
   */
  static createClient(): Cdn20180510 {
    let config = new $OpenApi.Config({
      // 您的AccessKey ID
      accessKeyId: ACCESS_KEY_ID,
      // 您的AccessKey Secret
      accessKeySecret: ACCESS_KEY_SECRET,
    });
    // 访问的域名
    config.endpoint = `cdn.aliyuncs.com`;
    return new Cdn20180510(config);
  }

  static async updateHostRedirect(args: string[]): Promise<void> {
    let client = Cdn.createClient();
    let batchSetCdnDomainConfigRequest = new $Cdn20180510.BatchSetCdnDomainConfigRequest({
      domainNames: DOMAIN,
      functions: "[ { \"functionArgs\": [ { \"argName\": \"regex\", \"argValue\": \"" + REDIRECT_REGEX + "\" }, { \"argName\": \"replacement\", \"argValue\": \"" + REDIRECT_REPLACEMENT + "\" } ], \"functionName\": \"host_redirect\" , \"configId\": \"" + REDIRECT_CONFIG_ID + "\"} ]",
    });
    // 复制代码运行请自行打印 API 的返回值
    await client.batchSetCdnDomainConfig(batchSetCdnDomainConfigRequest);
  }

}

Cdn.updateHostRedirect(process.argv.slice(2));