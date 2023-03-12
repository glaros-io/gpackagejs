# gpackagejs
JS utilities

## Features

### Utilities

### AJAX

## Quick Start

### CDN

#### Utility Package

```
https://cdn.jsdelivr.net/gh/glaros-io/gpackagejs@300d0af4ce2516fbf09a5ffe613d2c19c6bb3f5d/base.js
```

#### AJAX Package

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
const args = getGet();
```

### GET/POST Request

```
request(func, method, uri, data, xhr)
```

- `func` is the function after getting response
- `method` is either `POST` or `GET` case insensitive
- `uri` (optional)
- `data` (optional)
- `xhr` (optional)
