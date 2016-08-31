import { Template } from 'meteor/templating';

Template.upload.events({
  'change #uploader'(event, instance) {
    let node = document.getElementById('uploader').files[0];

    // 实例化 FileReader 对象,以便将其内容读取到内存中
    var reader = new FileReader();
    reader.readAsDataURL(node);
    reader.onload = function(event) {
      let dataUrl = event.target.result;
      
      console.log(typeof dataUrl);
      Meteor.call('qiniu-upload', dataUrl, function(err, res) {
        if (!err) {
          alert('图片上传成功');
        }else {
          alert('图片上传失败，请重试');
        }
      });
    }
  },
});
