import { ProjectorScreen } from 'phosphor-react'

export function Menu4(){
  return (
    <a href="#Setion4" className="w-full"> 
    <span className="text-gray-300">
      DevRel
    </span>
    
    <div className="pr-4 mt-2">
      <header className="flex items-center">
        <samp className="pr-3 text-sm text-green-300 font-medium flex items-center gap-2">
          <ProjectorScreen size={20}/>
          Conteúdo
        </samp>
        <samp className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
          Office
        </samp>
      </header>
    </div>
   </a>
  )
}