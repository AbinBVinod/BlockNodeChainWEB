import Image from 'next/image'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-right justify-center p-10">
      <div className="z-10 w-half max-w-base   justify-center font-mono text-base lg:flex ">
        <p className="fixed left-0 top-0 shadow hover:shadow-lg flex w-full justify-center bg-violet-900/30">
          Block Node Chain Under Development
        </p>
       <div >
          <a
          href="https://lfnbnc.gitbook.io/blockchain/"
          className="Border">
            <h1 className={' fixed pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200'}>
               Documentation </h1>
           </a>
          </div>
       
       
 <div className="justify-end  ">
          <a
            className="fixed flex justify-end top-10 right-11"
            href="https://www.linkedin.com/company/lfnbnc"
          >
            {''}
            <Image
              src="/Main.png"
              alt="logo"
              width={50}
              height={50}
             />
          </a>
        </div>
      </div>
      
      <div className='flex justify-center items-center h-screen'>
       
      <video className="video" src={"/vd.mp4"}  width={1000} height={1000} autoPlay loop muted />

      </div>
      
      
      <div>
        <a
          href="https://github.com/L-F-N-BlockNodeChain"
          className="">
          <h1 className= "flex justify-center text-0x0 font-mono">
          Block-Node-Chain</h1>
          
        </a>
      </div>
      <h2 className='flex justify-center text-0x0 font-mono'>Github</h2>

      <div class="px-8 py-32">
  <div class="grid gap-8 items-start justify-center">
    <div class="relative group">
      <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <button class="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
        <span class="flex items-center space-x-5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-600 -rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          <span class="pr-6 text-gray-100">Block Node Chain</span>
        </span>
        <span class="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">Block Explorer &rarr;</span>
      </button>
    </div>
  </div>
</div>
    
    
  </main>
  )
}



