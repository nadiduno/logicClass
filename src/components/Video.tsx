import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, FileArrowDown, GithubLogo, Lightning, YoutubeLogo } from "phosphor-react";

import '@vime/core/themes/default.css';
export function Video(){
  return (
   <div className="flex-1">
    <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId="sG0e7vlFRDE"/>
            <DefaultUi />
          </Player>
        </div>
    </div>
    
    <div className="p-8 max-w-[1100px] mx-auto">
      <div className="flex items-start gap-16">
        <div className="flex-1">
        <p className="text-1xl text-violet-600">
            Ensinando comandos de GitBash
          </p>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Compartilhando com o mundo o aprendido
          </p>
          <div className="flex items-center gap-4 mt-6">
            <img 
              className="h-16 w-16 rounded-full border-2 border-green-300"
              src="https://avatars.githubusercontent.com/u/6678054?v=4" 
              alt="Foto de Nadi"
            />
            
            <div className="leading-relaxed">
              <strong className="font-bold text-2xl block">
                Nadiveth Duno Escalona
              </strong>
              <span className="text-gray-200 text-sm block">
                Dev / Professora
              </span>
              <span className="text-gray-200 text-sm block">
                Ciências da Computação | 2022
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <a href="" className="p-4 text-sm  bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
            <GithubLogo size={24} />
            Hard Skills
          </a>
          <a href="" className="p-4 text-sm  border border-green-300 text-green-300 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-500 hover:text-gray-900 transition-colors">
            <Lightning size={24} />
            Accese o desafio
          </a>
        </div>
        
      </div>
      </div>
    </div>
  )
}