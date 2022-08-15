import { Dashbord1 } from "./Dashbord1";
import { Dashbord2 } from "./Dashbord2";
import { Dashbord3 } from "./Dashbord3";
import { Video } from "./Video";


export function Content(){
  return (
   <aside className="w-full  bg-gray-700 p-6 border-l border-gray-600">
    <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
      Conhece meus trabalhos
    </span>
    <Video />
    <span className="text-2xl text-green-300">
      Business Intelligence - Dashbord - Power BI + M
    </span>
    <div className="flex items-center justify-between gap-2">
        <Dashbord1 />
        <Dashbord2 /> 
        <Dashbord3 /> 
    </div>  
   </aside>
  )
}