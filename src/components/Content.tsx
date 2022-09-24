import { Aplication } from "./Aplication";
import { Dashbord } from "./Dashbord";
import { DashbordImg } from "./DashbordImg";
import { Digital } from "./Digital";
import { Graphic1 } from "./Graphic1";
import { Intro } from "./Intro";
import { Photos } from "./Photos";
import { Video } from "./Video";


export function Content(){
  return (
   <aside className="w-full  bg-gray-700 p-6 border-l border-gray-600">
    <Intro />
    <Digital />
    <span id="Setion5" className="text-2xl text-green-300">
      Conectando pessoas através da educação e da tecnológia - Soft Skills
    </span>
    <Photos />
    <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
      Conhece meus trabalhos
    </span>
    <span id="Setion1" className="text-2xl text-green-300">
      Business Intelligence - Dashbord - Power BI + M
    </span>
    {/* <Dashbord /> */}
    <DashbordImg />
    <span id="Setion2" className="text-2xl text-green-300">
      Data Base com SQL - Graphic com Python
    </span>
    <Graphic1 />
    <span id="Setion2" className="text-2xl text-green-300">
      Algumas aplicações feitos por mim
    </span>
    <Aplication />
    <span id="Setion2" className="text-2xl text-green-300">
      Ensinando o aprendido
    </span>
    <Video />
   </aside>
  )
}