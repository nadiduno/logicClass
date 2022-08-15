import { Database } from 'phosphor-react'

export function Menu2(){
  return (
   <a href="#" className="w-full" >  
    <span className="text-gray-300">
      Data Base
    </span>
    
    <div className="rounded border border-gray-500 p-4 mt-2">
      <header className="flex items-center justify-between">
        <span className="pr-3 text-sm text-green-300 font-medium flex items-center gap-2">
          <Database size={20}/>
          Gráficos
        </span>
        <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
          Python
        </span>
      </header>
      <strong className="text-gray-200 mt-5 block">
        Dados
      </strong>
    </div>
   </a>
  )
}