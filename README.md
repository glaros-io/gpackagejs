# gpackagejs
JS utilities

## Usage

The base package is included as follows via CDN.

```
<script src="https://cdn.jsdelivr.net/gh/glaros-io/gpackagejs@300d0af4ce2516fbf09a5ffe613d2c19c6bb3f5d/base.js"></script>
<script>
var gbase = new gBase();
</script>
```

The ajax package can be similarly included as follows via CDN.

```
<script src="https://cdn.jsdelivr.net/gh/glaros-io/gpackagejs@954f52842f668a99dc5a38ce7426bbaafd0c8234/ajax.js"></script>
<script>
let baseURL = "<BASE REQUEST URL>";
let params = {
    "tokenName": "<CSRF TOKEN NAME>",
    "accessToken": "<CSRF TOKEN HASH>",
};
var gbase = new Ajax(baseURL, params);
</script>
```
