# twitter-tid-deobf-fork

This repository performs deobfuscation of the `X-Client-Transaction-Id` header used on Twitter.  
It is automatically updated daily at 22:00 UTC.

It is a fork of [https://github.com/obfio/twitter-tid-deobf](https://github.com/obfio/twitter-tid-deobf).

Output: https://github.com/fa0311/twitter-tid-deobf-fork/blob/main/output/b.js

## Usage

Update `source/a.js`

```shell
JSON_URL="https://raw.githubusercontent.com/fa0311/TwitterInternalAPIDocument/refs/heads/develop/docs/json/ScriptLoadJson.json"
curl -s "$JSON_URL" | jq -r '.["ondemand.s"]' | xargs curl -L --compressed -o source/a.js
```

Run

```shell
# run step by step
node deobf.js source/a.js output/a.js
node deobf2.js output/a.js output/b.js
node deobf.js output/b.js output/b.js
node deobf2.js output/b.js output/b.js
```


```shell
npm install
npm run run2
```

Run base `obfio/twitter-tid-deobf`

```shell
npm --prefix base install
npm --prefix base run run
```
