import MainLayout from '../layouts/MainLayout'
import LogoCloud from '../components/LogoCloud'
import Tokenomics from '../components/Tokenomics'
import Roadmap from '../components/Roadmap'
import Join from '../components/Join'
import ScrollableAnchor from 'react-scrollable-anchor'
import YoutubeEmbed from '../components/YoutubeEmbed'

export default function Index({ burned }) {
  return (
  <MainLayout>
    <div className="relative overflow-hidden">
    <main>
      <section className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto py-16 px-8">
        <div>
          <div className="max-w-4xl">
            <div className="gradientText uppercase text-lg" style={{ letterSpacing: '8px' }}>#1 Decentralized Launchpad for Multiverse</div>
            <h1 className="text-white text-2xl lg:text-6xl mt-6" style={{ lineHeight: typeof window !== 'undefined' && window.innerWidth > 1000 ? '90px': '1' }}>The Omni-king, and supreme ruler of all <span className="gradientText" >meme tokens.</span></h1>
          </div>
          <div className="text-teal text-lg mt-10">Bringing decentralized launchpad and community together to rule the Multiverse.</div>
          <div className="mt-2 text-lg text-lightGrey">The objective is to bring value to the DeFi space as a whole by delivering disruptive, flexible and audited technology.</div>
          <div className="mt-2 text-lg text-lightGrey">
           Strenghten your project and reward your communities using our services.<br/>
            We will utilize all avenues available (marketing/partnerships/experienced developers)<br /> to reach our goals. 
            Will you come along for the journey?
          </div>
        </div>
        <div>
          <img src="/zeno_large.png" className="mt-10" alt="" srcSet="" />
        </div>
      </section>
      <LogoCloud />
      <ScrollableAnchor id={'tokenomics'}><div></div></ScrollableAnchor>
      <Tokenomics burned={burned} />
      <ScrollableAnchor id={'roadmap'}><div></div></ScrollableAnchor>
      <Roadmap />
      <div className="border border-b-2 border-teal mt-8 max-w-[100px] mx-auto"></div>
      <Join />
      <div className="max-w-7xl mx-auto pt-16">
        <YoutubeEmbed embedId="cIF_K5x2jTo" />
      </div>
    </main>
      <footer className="bg-[#141419]" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <p className="py-8 text-base text-gray-400 md:mt-0 md:order-1 text-center">
          &copy; {new Date().getFullYear()} Zeno Ino. All rights reserved <span className="mx-2">|</span> info@zenoinu.com
        </p>
      </footer>
      </div>
    </MainLayout>
  )
}

export async function getServerSideProps(context) {
  const { burned } = await fetch('https://www.zenoinu.com/api/supply').then(res => res.json());
  return {
    props: { burned }, // will be passed to the page component as props
  }
}