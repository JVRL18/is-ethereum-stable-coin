## 📦 Installing on command line (requires nodejs)

`yarn add is-ethereum-stable-coin`

or

`npm i is-ethereum-stable-coin`

## 👷 Usage

> Mainly for checking is a token is a memecoin/shitcoin, focus on UniswapV2

```js
import isEthereumStableCoin from "is-ethereum-stable-coin";

if (isStableCoin(address)) {
  console.log(address + ' is a "stable" coin');
} else {
  console.log(address + ' is not a "stable" coin');
}
```
