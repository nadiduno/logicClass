import { UsersThree } from 'phosphor-react'

export function Menu5(){
  return (
    <a href="#Setion5" className="w-full"> 
    <span className="text-gray-300">
      Voluntary
    </span>
    
    <div className="pr-4 mt-2">
      <header className="flex items-center">
        <span className="pr-3 text-sm text-green-300 font-medium flex items-center gap-2">
          <UsersThree size={20}/>
          Conexões
        </span>
        <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
          Redes
        </span>
      </header>
    </div>
   </a>
  )
}