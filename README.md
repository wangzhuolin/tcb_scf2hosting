# tcb_scf2hosting
腾讯云云开发 - 使用云函数上传文件到静态网站托管案例

> 通过使用云开发[ Node.js 管理端 SDK ](https://docs.cloudbase.net/api-reference/manager/node/introduction.html)以及运用云函数临时读写文件的[tmp目录](https://docs.cloudbase.net/cloud-function/how-works.html#yun-xing-huan-jing)来实现。

# 前提条件
- 开通按量付费云开发环境
- 开通静态网站托管
- 获取[腾讯云访问密钥](https://console.cloud.tencent.com/cam/capi)
# 操作步骤
- 登录[云开发控制台](https://console.cloud.tencent.com/tcb/env/index)，创建云函数
- 复制代码，导入云函数
- 修改配置信息（SecretId、SecretKey、envId）
- 保存并安装依赖
- 测试运行
