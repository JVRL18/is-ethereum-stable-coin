const tokens = [
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", //USDC
    "0xdAC17F958D2ee523a2206206994597C13D831ec7", //USDT
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", //WETH
    "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", //WBTC
    "0x6B175474E89094C44Da98b954EedeAC495271d0F", //DAI
    "0x767FE9EDC9E0dF98E07454847909b5E959D7ca0E", //ILV
    "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2", //MKR
    "0x514910771AF9Ca656af840dff83E8264EcF986CA", //LINK (CHAIN LINK)
    "0x853d955aCEf822Db058eb8505911ED77F175b99e", //FRAX
    "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0", //FXS
    "0x0001A500A6B18995B03f44bb040A5fFc28E45CB0", //OLAS
    "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0", //wstETH
]

export default function isEthereumStableCoin(address) {
    if (!address) throw Error("No address was provided.")

    const normalizedTokens = tokens.map(e => { return e.toLowerCase() })

    return normalizedTokens.includes(address.toLowerCase())
}