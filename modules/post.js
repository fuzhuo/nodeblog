var fs=require('fs');
function post(filename, callback) {
    var item = {};
    var data = fs.readFileSync('posts/'+filename+'.md', 'utf-8');
    var date = data.match(/Date: (.*)/)[1];
    var title = data.match(/Title: (.*)/)[1];
    var tags = data.match(/Tag: (.*)/)[1];
    var content = data.replace(/Date: .*\n/, '').replace(/Title: .*\n/,'').replace(/Tag: .*\n\n/,'');
    console.log("date: "+date+", title: "+title+", tags:" +tags);
    console.log('content:'+content);
    item['date']=date;
    item['title']=title;
    item['filename']=filename.replace(/\.md$/,'');
    item['tags']=tags;
    item['content']=content;
    callback(item);
}

module.exports = post;
