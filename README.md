# gPackageJS

![GitHub](https://img.shields.io/github/license/glaros-io/gpackagejs)
![GitHub top language](https://img.shields.io/github/languages/top/glaros-io/gpackagejs)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/glaros-io/gpackagejs)
![GitHub all releases](https://img.shields.io/github/downloads/glaros-io/gpackagejs/total)

Independent of any frameworks, scripts are primarily written for Glaros/DERaC applications. These scripts pack routine works such as getting GET parameters from URL and AJAX requests.

## Quick Start

### CDN

Sources are provided via [JSDELIVR](https://www.jsdelivr.com).

###### Utility Package

```
https://cdn.jsdelivr.net/gh/glaros-io/gpackagejs@300d0af4ce2516fbf09a5ffe613d2c19c6bb3f5d/base.js
```

###### AJAX Package

```
https://cdn.jsdelivr.net/gh/glaros-io/gpackagejs@954f52842f668a99dc5a38ce7426bbaafd0c8234/ajax.js
```

### Install

The base package is included as follows via CDN.

```
<script src="<CDN LINK TO BASE PACKAGE>"></script>
<script>
var gbase = new gBase();
</script>
```

The ajax package can be similarly included as follows via CDN. Params can be omitted if you do not use CSRF validation. `CSRF TOKEN NAME` varies on platform that you use. For example, default token names are `X-CSRFToken` for Flask and `X-CSRF-TOKEN` for CodeIgniter.

```
<script src="<CDN LINK TO AJAX PACKAGE>"></script>
<script>
let baseURL = "<BASE REQUEST URL>";
let params = {
    "tokenName": "<CSRF TOKEN NAME>",
    "accessToken": "<CSRF TOKEN HASH>",
};
var gajax = new Ajax(baseURL, params);
</script>
```

## Usage

### Get GET Parameters

```
const args = gbase.getGet();
```

You can access your parameters as a list `args`, for example, parameter `my_param` is given by `args['my_param']`.

### GET/POST Request

```
gajax.request(func, method, uri, data, xhr)
```

- `func` is the function after getting response, for example, `(status, response) => {...}`, where `status` is the status code and `response` is the `responseText` of the response.
- `method` is either `POST` or `GET` case insensitive
- `uri` (optional) is the URI additional to `baseURI`, for example, `baseURI = "/api"` and `uri = "v1"` make a request for `/api/v1` that can be omitted when additional URI is not applied
- `data` (optional) is the set of submitting parameters provided in JSON format that can be omitted when no parameter is submitted
- `xhr` (optional) is the XMLHttpRequest object that can be omitted when existing XMLHttpRequest object is not reused
