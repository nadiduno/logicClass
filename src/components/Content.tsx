import { DiscordLogo } from "phosphor-react";
import { BDados } from "./BDados";
import { Dashbord1 } from "./Dashbord1";
import { Dashbord2 } from "./Dashbord2";
import { Dashbord3 } from "./Dashbord3";
import { Graphic1 } from "./Graphic1";
import { Image1 } from "./Image1";
import { Linkedin } from "./Linkedin";
import { Microsoft } from "./Microsoft";
import { PhotoNadi } from "./PhotoNadi";
import { Video } from "./Video";


export function Content(){
  return (
   <aside className="w-full  bg-gray-700 p-6 border-l border-gray-600">
    <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
      Conhece meus trabalhos
    </span>
    <img src="/src/assets/screen.svg" alt="" />
    {/* <Image1 /> */}
    <Video />
    <span id="Setion1" className="text-2xl text-green-300">
      Business Intelligence - Dashbord - Power BI + M
    </span>
    <div className="flex items-center justify-between gap-2">
        <Dashbord1 />
        <Dashbord2 /> 
        <Dashbord3 /> 
    </div> 
    <span id="Setion2" className="text-2xl text-green-300">
      Data Base com SQL - Graphic com Python
    </span>
    <div className="flex items-center justify-between gap-2">
        <BDados />
        <Graphic1 />
        <Linkedin />
    </div>
    <span id="Setion4" className="text-2xl text-green-300">
      DevRel - Compartilhando com a comunidade
    </span>
    <div className="pt-4 flex justify-center">
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
          <a
          href="https://discord.com/"
          target="_blank"
          className="w-40 p-4 text-sm  text-white items-center rounded uppercase gap-2 flex flex-col hover:text-green-300 hover: transition-colors">
            <div className="flex w-full h-full items-center justify-center">
              <div className="relative transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-125">
                <span>
                  <DiscordLogo size={100} />
                </span>
              </div>
            </div>
          </a>
        </div>
    </div>
    <span id="Setion5" className="text-2xl text-green-300">
      Conectando pessoas através da educação e da tecnológia - Soft Skills
    </span>
    <div className="flex items-center justify-between gap-2">
        <Microsoft />
        <PhotoNadi />
    </div>
   </aside>
  )
}