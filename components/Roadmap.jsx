
const Roadmap = () => {
  return (
    <section>
      <div className="max-w-7xl px-8 mx-auto pt-20 text-white">
        <div className="flex flex-row items-center">
          <h2 className="text-4xl">Roadmap</h2>
          <img src="/road.png" alt="" className="h-8 ml-5" />
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between mt-10">
          <div className="flex flex-row lg:max-w-[33%]">
            <div className="flex flex-col items-center pt-2 mr-4">
              <div className="border-2 border-teal rounded-full p-1"></div>
              <div className="mt-2" style={{ width: '1px', height: '80px', background: 'linear-gradient(#2accfe, transparent)'}}></div>
            </div>
            <div>
              <div className="text-lg font-medium">Phase 1</div>
              <div className="mt-3 text-lightGrey">Launch ZENO on uniswap. Marketing Blitz (Tiktok,Youtube,Telegram,Twitter). Get listed on CMC + Coingecko</div>
            </div>
          </div>
          <div className="flex flex-row lg:max-w-[33%]">
            <div className="flex flex-col items-center pt-2 mr-4">
              <div className="border-2 border-teal rounded-full p-1"></div>
              <div className="mt-2" style={{ width: '1px', height: '80px', background: 'linear-gradient(#2accfe, transparent)'}}></div>
            </div>
            <div>
              <div className="text-lg font-medium">Phase 2</div>
              <div className="mt-3 text-lightGrey">Integrate ZENO with other partnerships. Whitepaper/ Release sneak peak of dapp. Smart contract audit</div>
            </div>
          </div>
          <div className="flex flex-row lg:max-w-[33%]">
            <div className="flex flex-col items-center pt-2 mr-4">
              <div className="border-2 border-teal rounded-full p-1"></div>
              <div className="mt-2" style={{ width: '1px', height: '80px', background: 'linear-gradient(#2accfe, transparent)'}}></div>
            </div>
            <div>
              <div className="text-lg font-medium">Phase 3</div>
              <div className="mt-3 text-lightGrey">Release of interactive DAPP News articles. Dextools/CMC advertising & Listing on exchanges . Bridge chains.</div>
            </div>
          </div>
        </div>
        <div className="text-lightGrey text-sm text-center mt-10">More phases coming soon!</div>
      </div>
    </section>
  );
}

export default Roadmap;
