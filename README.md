# twitter-tid-deobf-fork

Run twitter-tid-deobf

```shell
npm --prefix base install
npm --prefix base run run
```

Update `source/a.js`

```shell
JSON_URL="https://raw.githubusercontent.com/fa0311/TwitterInternalAPIDocument/refs/heads/master/docs/json/ScriptLoadJson.json"
curl -s $JSON_URL | jq -r '.["ondemand.s"]' | xargs curl -s -o response.html
```

Run twitter-tid-deobf-fork

```shell
npm install
npm run run2
```
