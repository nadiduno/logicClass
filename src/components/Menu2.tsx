import { Database } from 'phosphor-react'

export function Menu2(){
  return (
   <a href="#Setion2" className="w-full" >  
    <span className="text-gray-300">
      Data Base
    </span>
    
    <div className="pr-4 mt-2">
      <header className="flex items-center ">
        <span className="pr-3 text-sm text-green-300 font-medium flex items-center gap-2">
          <Database size={20}/>
          Gráficos
        </span>
        <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
          Python
        </span>
      </header>
    </div>
   </a>
  )
}