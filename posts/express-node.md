Date: 2016-11-20 15:15
Title: Express Node and markdown
Tag: web

自从看过[daringfireball.net][1]后就长草了，于是学着自己撸了这个站的css，然后就又双叒叕换了个首页样式，一直想用markdown文件作为网站仅有的数据库，因为farbox收费于是之前选择使用[JustWriting][2]来作为网站的实现

现在切换成自己实现的了，用Express-node的ejs模板来做的，因为之前一直在做AppleTV4的应用，对于使用服务器仅提供JSON+API由浏览器拿到JSON后渲染出页面来的做法比较开心，于是类似地采用Ajax来拉数据再用DOM操作渲染出来…

之后想看能不能改用react jsx来做，嗯，或者vue.js更合适

[1]:	http://daringfireball.net "daringfireball.net"
[2]:	https://github.com/hjue/JustWriting "JustWriting"