export default function LogoCloud() {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center uppercase text-lightGrey font-medium">Find us on</div>
        <div className="flex flex-col lg:flex-row gap-8 mt-4 justify-between">
          <a href="https://coinmarketcap.com/currencies/zeno-inu/" target="_blank" rel="noopener" className="flex justify-center" title="SOON!">
            <img src="/coinmarketcap.png" className="h-9 min-w-[207px]" alt="CoinMarketCap" />
          </a>
          <a href="https://www.coingecko.com/en/coins/zeno-inu" target="_blank" rel="noopener" className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img src="/coingecko.png" className="h-9 min-w-[164px]" alt="CoinGecko" />
          </a>
          <a href="https://app.uniswap.org/#/swap?outputCurrency=0x7D2ee0a3856cfFD58fB0963C0E24BF1277a0be0e&use=V2" target="_blank" rel="noopener" className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img src="/uniswap.png" className="h-9 min-w-[171px]" alt="UniSwap" />
          </a>
          <a href="https://www.dextools.io/app/ether/pair-explorer/0x216a09bdf716b20b7c16bb164d9e3cc69b3c79fb" target="_blank" rel="noopener" className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              src="/dextools.png"
              alt="DexTools"
              className="h-9 min-w-[159px]"
            />
          </a>
          <a href="https://etherscan.io/token/0x7d2ee0a3856cffd58fb0963c0e24bf1277a0be0e" target="_blank" rel="noopener" className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              src="/etherscan.png"
              alt="Etherscan"
              className="h-9 min-w-[159px]"
            />
          </a>
          <a href="https://www.team.finance/view-coin/0x7D2ee0a3856cfFD58fB0963C0E24BF1277a0be0e?name=Zeno%20Inu&symbol=ZENO" target="_blank" rel="noopener" className="flex justify-center" title="SOON!">
            <img src="/teamfinance.png" className="h-9 min-w-[97px]" alt="CoinMarketCap" />
          </a>
        </div>
      </div>
      <img src="/scroll.png" className="mx-auto hidden lg:block mb-10" alt="scroll" />
    </section>
  )
}