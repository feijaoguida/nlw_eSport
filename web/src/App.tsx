import { MagnifyingGlassPlus } from 'phosphor-react'

import './styles/main.css'

import logoImg from './assets/Logo.svg'

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-28'>
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-28">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> esta aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game2.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game3.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Counter Strike</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game4.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">APEX</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game5.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src="/game6.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">World of Warcraft</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">Não Encontrou o seu duo?</strong>
            <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players</span>
          </div>

          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex gap-3 items-center">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
