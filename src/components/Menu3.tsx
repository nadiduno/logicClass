import { Database } from 'phosphor-react'

export function Menu3(){
  return (
   <a href="#"> 
    <span className="text-gray-300">
      Business Intelligence
    </span>
    
    <div className="rounded border border-gray-500 p-4 mt-2">
      <header className="flex items-center justify-between">
        <samp className="text-sm text-green-300 font-medium flex items-center gap-2">
          <Database size={20}/>
          Gráficos
        </samp>
        <samp className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
          Python
        </samp>
      </header>
      <strong className="text-gray-200 mt-5 block">
        Dados em Informação
      </strong>
    </div>
   </a>
  )
}