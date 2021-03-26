const CloudBase = require('@cloudbase/manager-node')
const fs = require('fs')
const { hosting } = new CloudBase({
    secretId: 'Your SecretId', // 腾讯云API密钥SecretId https://console.cloud.tencent.com/cam/capi
    secretKey: 'Your SecretKey', // 腾讯云API密钥SecretKey  https://console.cloud.tencent.com/cam/capi
    envId: 'Your envId' // 云开发环境ID，可在腾讯云云开发控制台获取 https://console.cloud.tencent.com/tcb/env/index
})

exports.main = async(event, context) => {
    //写入文件到云函数临时目录
    const content = '测试内容!'

    fs.writeFile('/tmp/test.txt', content, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("File saved successfully!");
    })
    let fileCount = 0
        // 上传文件
    await hosting.uploadFiles({
        files: [{
            localPath: '/tmp/test.txt',
            cloudPath: 'hosting/test_data/data.txt'
        }],
        ignore: ['**/ignore.*'],
        onFileFinish: () => {
            fileCount++
        }
    })
    console.log(fileCount) // 1
    return fileCount
}