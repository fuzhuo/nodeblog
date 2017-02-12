var fs=require('fs');
function articles(pg,pz=5, callback) {
    var ans = {};
    ans['status']=0;
    ans['pg']=pg;
    ans['pz']=pz;
    ans['content']=new Array();
    fs.readdir('posts', function(err, files){
        if (err) console.log(err);
        var count = files.length;
        let i=0;
        files.forEach(function(filename){
            //console.log(filename);
            if (filename.match(/\.md$/) != null) {
            var item = {};
            var data = fs.readFileSync('posts/'+filename, 'utf-8');
            var date = data.match(/Date: (.*)/)[1];
            var title = data.match(/Title: (.*)/)[1];
            var tags = data.match(/Tag: (.*)/)[1];
            var content = data.replace(/Date: .*\n/, '').replace(/Title: .*\n/,'').replace(/Tag: .*\n\n/,'');
            //console.log("date: "+date+", title: "+title+", tags:" +tags);
            //console.log('content:'+content);
            item['date']=date;
            item['title']=title;
            item['filename']=filename.replace(/\.md$/,'');
            item['tags']=tags;
            item['content']=content;
            //console.log(JSON.stringify(item));
            ans['content'].push(item);
            }
        });
        ans.content.sort((a,b) => {return a.date<b.date;});
        callback(ans);
    });
}

module.exports = articles;
