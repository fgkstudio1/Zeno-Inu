import Head from "next/head";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/solid'

const navigation = [
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Tokenomics', href: '#tokenomics' },
  { name: 'Whitepaper', href: '/Zeno_Inu_Whitepaper.pdf' }
]

const Header = () => {
  return (
    <>
      <Head>
        <title>Unipad - #1 Integrated Launchpad Ecosystem for  Interactive Gaming</title>
        <meta name="description" content="The Omni-king, and supreme ruler of all meme tokens. Bringing utility and community together to rule the Multiverse." />
      </Head>
      <Popover as="header" className="relative">
        <div className="bg-[#141419] pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <div className="flex flex-row items-center">
                  <span className="sr-only">UNIPAD</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="/logo.png"
                    alt=""
                  />
                  <span className="text-teal text-3xl ml-2 gradientText">$UNIPAD</span>
                </div>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-[#141419] rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8 md:flex md:ml-10">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-base font-medium text-lightGrey hover:text-gray-300">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a
                href="https://t.me/unipadportal" target="_blank" rel="noopener"
                className="inline-flex items-center px-4 py-2 text-base text-white font-bold bg-lighterGrey hover:bg-gray-700"
              >
                Join our telegram
              </a>
              <a
                href="#" target="_blank" rel="noopener"
                className="inline-flex items-center px-4 py-2 text-base text-white font-bold bg-pink hover:bg-gray-700"
              >
                Participate IDO
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/zeno_logo.png"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 px-5">
                  <a
                    href="#" target="_blank" rel="noopener"
                    className="block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700"
                  >
                    Get from PancakeSwap
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
}

export default Header;