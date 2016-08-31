import qiniu from 'qiniu';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

const ak = 'AccessKey';
const sk = 'SecretKey';
const bucket = 'bucket';


Meteor.methods({
  'qiniu-upload'(dataUrl) {
    check(dataUrl, String);
    
    qiniu.conf.ACCESS_KEY = ak;
    qiniu.conf.SECRET_KEY = sk;

    // 华北地区的空间需要使用以下域名
    qiniu.conf.UP_HOST = 'http://up-z1.qiniu.com';

    // 由于Meteor.methods 不是异步函数,但是qiniu是异步,所以最好将两者变成一致,我这里利用Async变成同步
    let wrappedQiniuIo = Async.wrap(qiniu.io, ['put']);

    let putPolicy = new qiniu.rs.PutPolicy(bucket);
    let token = putPolicy.token();
    let extra = new qiniu.io.PutExtra();

    // qiniu上传图片需要图片的二进制数据
    let buffer = new Buffer(dataUrl.replace(/^data:image\/\w+;base64,/, ''), 'base64');

    let ret = wrappedQiniuIo.put(token, '', buffer, extra);
    console.log(ret.key);
  }
})
