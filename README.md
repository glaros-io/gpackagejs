# gPackageJS

![GitHub](https://img.shields.io/github/license/glaros-io/gpackagejs)
![GitHub top language](https://img.shields.io/github/languages/top/glaros-io/gpackagejs)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/glaros-io/gpackagejs)
![GitHub all releases](https://img.shields.io/github/downloads/glaros-io/gpackagejs/total)

Independent of any frameworks, scripts are primarily written for Glaros/DERaC applications. These scripts pack routine works such as getting GET parameters from URL and AJAX requests. The focal point of the AJAX package is the inclusion of CSRF token header of various names for various frameworks/projects.

#### About Us

Glaros and DERaC are a system development and network security consulting companies, respectively, located in Kamakura, Japan. We consist of economists, hackers, and writers with more than master degrees or appropriate professional certificates. Main working frameworks are Flask, Django, CodeIgniter, and Google Maps Platform. DERaC also provides economic consulting services.

We are able to communicate with customers in English, Japanese, and Chinese.

## Quick Start

### CDN

Sources are provided via [JSDELIVR](https://www.jsdelivr.com).

###### Utility Package

```
https://cdn.jsdelivr.net/gh/glaros-io/gpackagejs@c263cf0b8e295c08e79306d51ac1191653e4a285/base.min.js
```

###### AJAX Package

```
https://cdn.jsdelivr.net/gh/glaros-io/gpackagejs@4ef2bcb4ec48445cc1f984ac701e6ac9fa074064/ajax.min.js
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
var gajax = new gAjax(baseURL, params);
</script>
```

## Usage

### Get GET Parameters

```
const args = gbase.getGet();
```

You can access your parameters as a list `args`, for example, parameter `my_param` is given by `args['my_param']`.

### GET/POST Request

#### Requests

There are three main functions for ajax requests: `get`, `post`, and `request`, where `get` for GET and `post` for POST requests are extensions of `request`. These functions require a posterior functiion `func` and a set of parameters `params` in a JSON form. `request` requires an additional parameter `method` to specify requesting method either GET or POST.

- `func` is the function after getting response, for example, `(status, response) => {...}`, where `status` is the status code and `response` is the `responseText` of the response.
- `method` is either `POST` or `GET` case insensitive (`request`)
- `params` (optional) is the set of parameters in JSON form sending with the request

###### GET request

```
gajax.get(func, params)
```

###### POST request

```
gajax.post(func, params)
```

###### GET/POST requests

```
gajax.request(func, method, params)
```

#### Parameters

Parameter set `params` is optional. It must be provided in JSON format if provided. Omitted parameters are replaced with default value.

```
params = {
    "uri": "<ADDITIONAL_URI>",
    "data": <DATA_IN_JSON_FORMAT>,
    "xhr": <XML_HTTP_REQUEST>,
}
```

- `uri` (optional) is the URI additional to `baseURI`, for example, `baseURI = "/api"` and `uri = "v1"` make a request for `/api/v1` that can be omitted when additional URI is not applied
- `data` (optional) is the set of submitting parameters provided in JSON format that can be omitted when no parameter is submitted
- `xhr` (optional) is the XMLHttpRequest object that can be omitted when existing XMLHttpRequest object is not reused
