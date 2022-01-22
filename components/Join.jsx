const Join = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 my-20">
      <div className="text-white p-8 lg:p-16 relative" style={{background: 'linear-gradient(90deg, #18181e, transparent)'}}>
        <h3 className="text-2xl lg:text-5xl">Join with UNIPAD<br/> and find Metaverse <br /> tokens with us!</h3>
        <div className="flex flex-col lg:flex-row mt-10 gap-6">
          <a
            href="https://t.me/unipadportal" target="_blank" rel="noopener"
            className="inline-flex items-center px-4 py-2 text-base text-black font-bold bg-teal hover:bg-gray-700"
          >
            Join our telegram
          </a>
          <a
            href="https://twitter.com/unipadnetwork" target="_blank" rel="noopener"
            className="inline-flex items-center px-4 py-2 text-base text-white font-bold bg-lighterGrey hover:bg-gray-700"
          >
            Follow us on twitter
          </a>
        </div>
        <img src="/unipad2.png" alt="Join us" className="absolute hidden lg:block" width="500" style={{top: '-140px', right: '-10px'}} />
      </div>
    </div>
  );
}

export default Join;