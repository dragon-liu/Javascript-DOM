function displayAbbreviations() {
    if(!document.getElementsByTagName || !document.createElement
    || !document.createTextNode) return false;
    //取得所有缩略词
    var abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations.length < 1) return false;
    var defs = new Array();
    //遍历这些缩略词
    for(var i = 0; i < abbreviations.length; i++)
    {
        var current_addr = abbreviations[i];
        //针对IE6及以下浏览器
        if(current_addr.childNodes.length < 1) continue;
        var definition = current_addr.getAttribute("title");
        var key = current_addr.lastChild.nodeValue;
        defs[key] = definition;
    }
    //创建定义列表
    var dlist = document.createElement("dl");
    //遍历定义
    for(key in defs)
    {
        var definition = defs[key];
        //创建定义标题
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        //创建定义描述
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        //把它们都添加进定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    //IE6及以下浏览器则dlist为空，直接返回，不用创建标题了
    if(dlist.childNodes.length < 1) return false;
    //创建标题
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    //把标题和定义列表添加到页面主体
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);