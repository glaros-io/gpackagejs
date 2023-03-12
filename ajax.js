class gAjax {
    constructor(baseURL, tokenName = 'X-CSRF-TOKEN', accessToken = null){
        this.name = 'G-Ajax';
        this.version = '1.0.2';
        this.baseURL = baseURL.replace(/\/{1,}$/, '');
        this.tokenName = tokenName;
        this.accessToken = accessToken;
    }
    gajaxVersion(){return JSON.stringify({'name': this.name, 'version': this.version})}
    prepareRequest(uri = null){
        let url = this.baseURL;
        if(uri !== null){
            if(/^\/{1,}/.test(uri)) uri = uri.replace(/^\/{1,}/, '');
            url += '/' + uri;
        }
        return url.replace(/\/{1,}$/, '')
    }
    encodeParams(data){
        let params = [];
        for(var name in data){
            let value = data[name];
            let param = encodeURIComponent(name) + '=' + encodeURIComponent(value);
            params.push(param);
        }
        return params.join('&').replace(/%20/g, '+');
    }
    request(func, method, uri = null, data = null, xhr = new XMLHttpRequest()){
        let url = this.prepareRequest(uri);
        xhr.onreadystatechange = function(){
            if(this.readyState == 4) func(this.status, this.responseText);
        }
        xhr.onreadystatechange = function(){
            if(this.readyState == 4) func(this.status, this.responseText);
        }
        data = this.encodeParams(data);
        xhr.open(method, url, false);
        if(/post/i.test(method)) xhr.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
        xhr.setRequestHeader( this.tokenName, this.accessToken );
        xhr.send(data);
        xhr.abort();
    }
}
