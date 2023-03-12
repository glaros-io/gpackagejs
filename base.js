class gBase {
    constructor(){
        this.name = 'G-Base';
        this.version = '1.0.0';
    }
    gajaxVersion(){return JSON.stringify({'name': this.name, 'version': this.version})}
    getGET(){
        let args = new Object;
        url = location.search.substring(1).split('&');
        for(i=0; url[i]; i++) {
            var k = url[i].split('=');
            args[k[0]] = k[1];
        }
        return args;
    }
}
