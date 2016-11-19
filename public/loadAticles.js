console.log("loadAticles ok");
function loadHome(){
    var main = $('#main')[0];
    var div = document.createElement('div');
    console.log("start getJSON");
    $.getJSON('/api/home.json', function(c){
        console.log("c:"+c);
        console.log("get json ok status:"+c.status);
        if (c.status == 0) {
            for (var item of c.content) {
                var txt = markdown.toHTML(item.content);
                var html = `<div id="article">
                        <dl class="linkedlist">
                            <dt>
                                <a href="post/${item.filename}">${item.title}</a>
                                <a> </a>
                                <a class="permalink">★</a>
                            </dt>
                            <dt class="dateline">
                                <a class="dateline">发表于${item.date}</a>
                            </dt>
                            <dd>
                                <div class="markdown">
                                ${txt}
                                </div>
                            </dd>
                        </dl>
                    </div>`;
                //console.log("html:"+html);
                var div = document.createElement('div');
                div.innerHTML = html;
                main.appendChild(div);
            }
        }
    });
}
loadHome();