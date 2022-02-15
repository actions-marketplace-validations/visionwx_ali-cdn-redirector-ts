# ali-cdn-redirector-ts

## Description
this action is used to trigger CDN redirector update.

## Usage
```
- name: CDN Redirector
    uses: visionwx/ali-cdn-redirector-ts@v1.0.0
    with:
        accessKeyId: ${{ secrets.ALIYUN_CDN_ACCESS_KEY_ID }}
        accessKeySecret: ${{ secrets.ALIYUN_CDN_ACCESS_KEY_SECRET }}
        domain: dw.xxx.com
        regex: ^/test/some.zip$
        replacement: /test/some/v0.1.1.zip
        configId: 123456
```

## Inputs
- accessKeyId: the aliyun access key id with permission to manage CDN
- accessKeySecret: the aliyun access key secret with permission to manage CDN
- regex: regex string to match the request path
- replacement: destination url to redirect the request path
- domain: cdn domain
- configId: cdn redirect configId