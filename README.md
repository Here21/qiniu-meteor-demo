# qiniu-meteor-demo
[更新在个人博客中](http://www.inhere.top),其中包括一些细节,DDP传输所遇到的问题等.
### Meteor中七牛上传实例,包括一些使用注意,会继续添加更多在开发中碰到的问题和使用技巧

需要在`/server/qiniu-upload.js`中填写`AccessKey/SecretKey`和`bucket`

运行:
```
meteor -p 5005
```

实例是使用的包(**已经包含在内,不需要另外安装**):
```
// meteor
meteorhacks:async@1.0.0

// npm
qiniu
```

