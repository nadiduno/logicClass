import { FileHtml } from 'phosphor-react'

export function Menu3(){
  return (
    <a href="#" className="w-full"> 
    <span className="text-gray-300">
      Front End
    </span>
    
    <div className="pr-4 mt-2">
      <header className="flex items-center">
        <samp className="pr-3 text-sm text-green-300 font-medium flex items-center gap-2">
          <FileHtml size={20}/>
          Web
        </samp>
        <samp className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
          HTML
        </samp>
      </header>
    </div>
   </a>
  )
}