module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  const { result } = await fetch('https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x7d2ee0a3856cffd58fb0963c0e24bf1277a0be0e&address=0xdead000000000000000042069420694206942069&tag=latest&apikey=H15534B7KYWKYY5UQPEQ2JGUB5BSEU8IHY').then(res => res.json());
  return res.json({ total: 1000000000000, circulating: 1000000000000 - (result / 1000000000), burned: result / 1000000000 })
}