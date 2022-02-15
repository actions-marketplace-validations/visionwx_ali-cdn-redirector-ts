import Cdn20180510 from '@alicloud/cdn20180510';
export default class Cdn {
    /**
     * 使用AK&SK初始化账号Client
     * @param accessKeyId
     * @param accessKeySecret
     * @return Client
     * @throws Exception
     */
    static createClient(): Cdn20180510;
    static updateHostRedirect(args: string[]): Promise<void>;
}
