import { DefaultUi, Player, Youtube } from "@vime/react";
import {  GithubLogo, LinkedinLogo, TwitterLogo, YoutubeLogo } from "phosphor-react";

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
        <p className="text-1xl text-red-600">
            Ensinando comandos de GitBash
          </p>
          <p className="mt-4 text-green-600 leading-relaxed">
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
              <span className="text-green-600 text-sm block">
                Dev / Professora
              </span>
              <span className="text-green-600 text-sm block">
                Ciências da Computação | 2022
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <a href="https://github.com/nadiduno" target="_blank" className="p-2 text-sm  bg-yellow-600 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-orange-600 transition-colors">
            <GithubLogo size={24} />
            GitHUB - HardSkills
          </a>
          <a href="https://www.youtube.com/nadiduno" target="_blank" className="p-2 text-sm  border border-yellow-600 text-orange-600 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-yellow-600 hover:text-gray-900 transition-colors">
            <YoutubeLogo size={24} />
            Canal de Conteúdos
          </a>
          <a href="https://twitter.com/nadiduno" target="_blank" className="p-2 text-sm  border border-yellow-600 text-orange-600 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-yellow-600 hover:text-gray-900 transition-colors">
            <TwitterLogo size={24} />
            Twitter
          </a>
          <a href="https://www.linkedin.com/in/nadiduno/" target="_blank" className="p-2 text-sm  border border-yellow-600 text-orange-600 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-yellow-600 hover:text-gray-900 transition-colors">
            <LinkedinLogo size={24} />
            LinkedIn
          </a>
        </div>
      </div>
      </div>
    </div>
  )
}