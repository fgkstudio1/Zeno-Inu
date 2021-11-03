import Graph from './Graph'

const Tokenomics = ({ burned }) => {
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
            <div className="text-lightGrey mt-10">To ensure continued growth, we need to allocate funds for development, marketing and holders. For that reason tax was introduced.</div>
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
        <div className="flex flex-col lg:flex-row py-4 gap-x-10">
        <div>
          <div className="text-teal text-lg font-bold">
            Tokens burned so far
          </div>
          <div className="flex flex-row text-lightGrey items-center mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 21.926 29.204">
            <path id="fire" d="M24.926,17.17c-.365-4.385-2.314-7.065-4.142-9.5S17.617,3.405,17.617.6c0-.244-.122-.487-.365-.487a.544.544,0,0,0-.609,0A15.8,15.8,0,0,0,10.918,8.4a33.3,33.3,0,0,0-.609,6.09C7.872,14,7.263,10.227,7.263,10.227c0-.244-.365-.487-.731-.487H6.411C6.289,9.861,3.244,11.445,3,17.657v.609A10.917,10.917,0,0,0,13.963,29.229h0A10.917,10.917,0,0,0,24.926,18.266ZM10.309,24.113v-.244a5.05,5.05,0,0,1,.365-1.949,2.24,2.24,0,0,0,2.071,1.462.575.575,0,0,0,.609-.609,10.907,10.907,0,0,1,.244-2.8,5.3,5.3,0,0,1,1.218-2.314,8.424,8.424,0,0,0,1.218,2.314,7.418,7.418,0,0,1,1.584,3.776v.365a3.88,3.88,0,0,1-3.654,3.9A3.794,3.794,0,0,1,10.309,24.113Z" transform="translate(-3 -0.025)" fill="#8d90a3"/>
          </svg>
           <span className="ml-2">{(burned / 10000000000).toFixed(2)}%</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Tokenomics;

