import { ProjectorScreen } from 'phosphor-react'

export function Menu4(){
  return (
    <a href="#" className="w-full"> 
    <span className="text-gray-300">
      DevRel
    </span>
    
    <div className="rounded border border-gray-500 p-4 mt-2">
      <header className="flex items-center justify-between">
        <samp className="pr-3 text-sm text-green-300 font-medium flex items-center gap-2">
          <ProjectorScreen size={20}/>
          Conteúdo
        </samp>
        <samp className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
          Office
        </samp>
      </header>
      <strong className="text-gray-200 mt-5 block">
        Tutoriais
      </strong>
    </div>
   </a>
  )
}