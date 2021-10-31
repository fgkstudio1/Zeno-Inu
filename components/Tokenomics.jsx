import Graph from './Graph'

const Tokenomics = () => {
  return (
    <section className="bg-[#18181e]">
      <div className="max-w-7xl px-8 mx-auto py-20 text-white">
        <div className="flex flex-row items-center">
          <h2 className="text-4xl">Tokenomics tax</h2>
          <img src="/tax.png" alt="" className="h-8 ml-5" />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between mt-10">
          <div className="lg:max-w-[33%]">
            <h3 className="text-3xl">How we distribute<br/> token tax</h3>
            <div className="border border-b-2 border-teal mt-5 max-w-[100px]"></div>
            <div className="text-lightGrey mt-10">To ensure continued growth, we need to allocate funds for development, marketing and holders. For that reason tax was introdouced.</div>
            <div className="text-lightGrey mt-10">Initially 30% of tokens were sent to the burn address, which also gets a piece of the tax that is distributed to holders which ensures that the supply is constantly diminishing.</div>
          </div>
          <div className="p-10 lg:max-w-[33%]">
            <Graph />
          </div>
          <div className="flex flex-col gap-y-6 lg:pl-10 lg:max-w-[33%]">
            <div className="flex flex-row">
              <div className="flex flex-col items-center pt-2 mr-4">
                <div className="border-2 border-teal rounded-full p-1"></div>
                <div className="mt-2" style={{ width: '1px', height: '80px', background: 'linear-gradient(#2accfe, transparent)'}}></div>
              </div>
              <div>
                <div className="text-lg font-medium">2% Holders</div>
                <div className="mt-6 text-lightGrey">2% of all sales tax will be distributed<br /> amongst all diamond handed holders.</div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col items-center pt-2 mr-4">
                <div className="border-2 border-chartGreen rounded-full p-1"></div>
                <div className="mt-2" style={{ width: '1px', height: '80px', background: 'linear-gradient(#3CDD9C, transparent)'}}></div>
              </div>
              <div>
                <div className="text-lg font-medium">6% Marketing</div>
                <div className="mt-6 text-lightGrey">6% of all sales tax will be used for marketing and advertising $ZENO<br /> across the universe.</div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col items-center pt-2 mr-4">
                <div className="border-2 border-chartPurple rounded-full p-1"></div>
                <div className="mt-2" style={{ width: '1px', height: '80px', background: 'linear-gradient(#C97EFD, transparent)'}}></div>
              </div>
              <div>
                <div className="text-lg font-medium">2% Development</div>
                <div className="mt-6 text-lightGrey">2% of all sales tax will be used for<br /> further development of the Zeno Inu<br /> brand and identity.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
