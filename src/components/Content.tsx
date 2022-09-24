import { Dashbord } from "./Dashbord";
import { DashbordImg } from "./DashbordImg";
import { Digital } from "./Digital";
import { Graphic1 } from "./Graphic1";
import { Photos } from "./Photos";
import { Video } from "./Video";


export function Content(){
  return (
   <aside className="w-full  bg-gray-700 p-6 border-l border-gray-600">
    <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
      Conhece meus trabalhos
    </span>
    <Video />
    <span id="Setion1" className="text-2xl text-green-300">
      Business Intelligence - Dashbord - Power BI + M
    </span>
    <Dashbord />
    <DashbordImg />
    <span id="Setion2" className="text-2xl text-green-300">
      Data Base com SQL - Graphic com Python
    </span>
    <Graphic1 />
    <Digital />
    {/* <span id="Setion4" className="text-2xl text-green-300">
      DevRel - Compartilhando com a comunidade
    </span> */}
    {/* <div className="pt-4 flex justify-center">
        <div className=" text-6xl">
          <span className="text-violet-800">
            Comunidade.  
          </span>
          <span className="text-green-300">
            Tech
          </span>
          <span className="text-xs flex flex-col items-center justify-center">
            Discord
          </span>
        </div>
    </div> */}
    
    <span id="Setion5" className="text-2xl text-green-300">
      Conectando pessoas através da educação e da tecnológia - Soft Skills
    </span>
    <Photos />
   </aside>
  )
}