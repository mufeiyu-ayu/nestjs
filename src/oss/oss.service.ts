import { HttpException, Injectable } from '@nestjs/common';
import * as Client from 'ali-oss';
import * as dayjs from 'dayjs';
@Injectable()
export class OssService {
  config = new Client({
    region: 'oss-cn-shenzhen',
    //  阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
    accessKeyId: '###',
    accessKeySecret: '###', // 存储桶名字
    // 填写Bucket名称。
    bucket: 'nestdb',
  });
  async getSignature() {
    const config = {
      // 填写你自己的 AccessKey
      accessKeyId: '###',
      accessKeySecret: '###', // 存储桶名字
      bucket: 'nestdb', // 文件存储路径
      dir: 'files/',
    };
    const client = new Client(config);
    const date = new Date(); // 时长加 1 天，作为签名的有限期
    date.setDate(date.getDate() + 1);
    const policy = {
      // 设置签名的有效期，格式为Unix时间戳
      expiration: date.toISOString(),
      conditions: [
        ['content-length-range', 0, 10485760000], // 设置上传文件的大小限制
      ],
    }; // 生成签名，策略等信息
    const formData = await client.calculatePostSignature(policy); // 生成 bucket 域名，客户端将向此地址发送请求
    const location = await client.getBucketLocation();
    const host = `http://${config.bucket}.${location.location}.aliyuncs.com`; // 响应给客户端的签名和策略等信息
    return {
      expire: dayjs().add(1, 'days').unix().toString(),
      policy: formData.policy,
      signature: formData.Signature,
      accessId: formData.OSSAccessKeyId,
      host,
      dir: config.dir,
    };
  }
  deleteImg(adress: string) {
    const regex = /\/files\/(.+)$/;
    if (!adress) return;
    const result = regex.exec(adress)[0];
    console.log(result);
    this.config.delete(result).catch(() => {
      throw new HttpException('删除失败', 400);
    });
  }
}
