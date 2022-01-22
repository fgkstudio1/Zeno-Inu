
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
              <div className="text-lg font-medium">January 2022</div>
              <div className="mt-3 text-lightGrey">Create Awareness, Develop Smart Contract, Launch Website V1</div>
            </div>
          </div>
          <div className="flex flex-row lg:max-w-[33%]">
            <div className="flex flex-col items-center pt-2 mr-4">
              <div className="border-2 border-teal rounded-full p-1"></div>
              <div className="mt-2" style={{ width: '1px', height: '80px', background: 'linear-gradient(#2accfe, transparent)'}}></div>
            </div>
            <div>
              <div className="text-lg font-medium">February 2022</div>
              <div className="mt-3 text-lightGrey">Parabolic Marketing, Private Sale with Loyal Investor and create more awareness about UNIPAD</div>
            </div>
          </div>
          <div className="flex flex-row lg:max-w-[33%]">
            <div className="flex flex-col items-center pt-2 mr-4">
              <div className="border-2 border-teal rounded-full p-1"></div>
              <div className="mt-2" style={{ width: '1px', height: '80px', background: 'linear-gradient(#2accfe, transparent)'}}></div>
            </div>
            <div>
              <div className="text-lg font-medium">February 2022</div>
              <div className="mt-3 text-lightGrey">Presale with Pinksale, Listing at Coinmarketcap and Coingecko. Apply listing to CEX/DEX.</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between mt-10">
          <div className="flex flex-row lg:max-w-[33%]">
            <div className="flex flex-col items-center pt-2 mr-4">
              <div className="border-2 border-teal rounded-full p-1"></div>
              <div className="mt-2" style={{ width: '1px', height: '80px', background: 'linear-gradient(#2accfe, transparent)'}}></div>
            </div>
            <div>
              <div className="text-lg font-medium">March 2022</div>
              <div className="mt-3 text-lightGrey">Release Launchpad V1 For Metaverse & Gaming Project. Release Stake Pool and Farm for IDO requirement</div>
            </div>
          </div>
          <div className="flex flex-row lg:max-w-[33%]">
            <div className="flex flex-col items-center pt-2 mr-4">
              <div className="border-2 border-teal rounded-full p-1"></div>
              <div className="mt-2" style={{ width: '1px', height: '80px', background: 'linear-gradient(#2accfe, transparent)'}}></div>
            </div>
            <div>
              <div className="text-lg font-medium">April-July 2022</div>
              <div className="mt-3 text-lightGrey">Release Unipad NFTs and Staking pool for NFTs.</div>
            </div>
          </div>
          <div className="flex flex-row lg:max-w-[33%]">
            <div className="flex flex-col items-center pt-2 mr-4">
              <div className="border-2 border-teal rounded-full p-1"></div>
              <div className="mt-2" style={{ width: '1px', height: '80px', background: 'linear-gradient(#2accfe, transparent)'}}></div>
            </div>
            <div>
              <div className="text-lg font-medium">July-December 2022</div>
              <div className="mt-3 text-lightGrey">Release Our Metaverse P2E Games for Loyal Community. NFTs Utility on games and more...</div>
            </div>
          </div>
        </div>
        <div className="text-lightGrey text-sm text-center mt-10">More phases coming soon!</div>
      </div>
    </section>
  );
}

export default Roadmap;
