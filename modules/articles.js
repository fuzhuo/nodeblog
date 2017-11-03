var fs=require('fs');
var ans = null;

function getItemFromAns(filename) {
    if (ans==null) return null;
    for (let item of ans.content) {
        if (item.filename == filename.replace(/\.md$/,'')) {
            return item;
        }
    }
    return null;
}

function articles(pg,pz=5, callback) {
    if (ans == null) {
        ans = {}
        ans['status']=0;
        ans['pg']=pg;
        ans['pz']=pz;
        ans['content']=new Array();
    }
    fs.readdir('posts', function(err, files){
        if (err) console.log(err);
        var count = files.length;
        let i=0;
        files.forEach(function(filename) {
            if (filename.match(/\.md$/) != null) {
                //console.log(filename);
                let item = getItemFromAns(filename);
                var stats = fs.statSync('posts/'+filename);
                if (stats && stats.mtime) {
                    let mtime = stats.mtime;
                    if (item && item.mtime && item.mtime == mtime) {
                        //console.log("skip unchanged file " + filename);
                        return;
                    } else if (item==null) {
                        console.log("new file " + filename);
                    } else {
                        console.log("changed file %s '%s' '%s' %s", filename, item.mtime, mtime, item.mtime==mtime);
                    }
                    if (item==null) {
                        item={};
                        ans['content'].push(item);
                    }
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
                    item.mtime = ''+mtime;
                    //console.log(JSON.stringify(item));
                }
            }
        });
        ans.content.sort((a,b) => {return a.date<b.date;});
        callback(ans);
    });
}

module.exports = articles;
