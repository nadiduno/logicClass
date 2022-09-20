import { MicrosoftPowerpointLogo } from 'phosphor-react'

export function Menu1(){
  return (
    <a href="#Setion1" className="w-full hover:border-b-violet-800">  
    <span className="text-gray-300">
      Business Intelligence
    </span>
    
    <div className="pr-4 mt-2">
      <header className="flex items-center">
        <span className="pr-3 text-sm text-green-300 font-medium flex items-center gap-2">
          <MicrosoftPowerpointLogo size={20}/>
          Dashbord
        </span>
        <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
          PowerBi+M
        </span>
      </header>
    </div>
   </a>
  )
}