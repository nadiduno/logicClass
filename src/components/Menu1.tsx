import { MicrosoftPowerpointLogo } from 'phosphor-react'

export function Menu1(){
  return (
    <a href="#" className="w-full">  
    <span className="text-gray-300">
      Business Intelligence
    </span>
    
    <div className="rounded border border-gray-500 p-4 mt-2">
      <header className="flex items-center justify-between">
        <span className="pr-3 text-sm text-green-300 font-medium flex items-center gap-2">
          <MicrosoftPowerpointLogo size={20}/>
          Dashbord
        </span>
        <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
          PowerBi+M
        </span>
      </header>
      <strong className="text-gray-200 mt-5 block">
        Relatórios
      </strong>
    </div>
   </a>
  )
}