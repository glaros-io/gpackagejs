/*
    G-Ajax version 1.0.2
    Coded by Tetsuya Saito, December 2022
    (c) Glaros, Inc. and DERaC
*/

class gAjax {
    constructor(baseURL = './', params = {'tokenName': null, 'accessToken': null}){
        this.name = 'G-Ajax';
        this.version = '1.0.2';
        this.baseURL = baseURL.replace(/\/{1,}$/, '');
        this.tokenName = params.tokenName;
        this.accessToken = params.accessToken;
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
    request(func, method, params){
        let uri = (params.uri === undefined) ? '' : params.uri;
        let data = (params.data === undefined) ? '' : params.data;
        let xhr = (params.xhr === undefined) ? new XMLHttpRequest() : params.xhr;
        let url = this.prepareRequest(uri);
        xhr.onreadystatechange = function(){
            if(this.readyState == 4) func(this.status, this.responseText);
        }
        if(data !== '') data = this.encodeParams(data);
        xhr.open(method, url, false);
        if(/post/i.test(method)) xhr.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
        if(this.tokenName !== undefined) xhr.setRequestHeader( this.tokenName, this.accessToken );
        xhr.send(data);
        xhr.abort();
    }
    get(func, params){
        let method = 'get';
        this.request(func, method, params);
    }
    post(func, params){
        let method = 'post';
        this.request(func, method, params);
    }
}
