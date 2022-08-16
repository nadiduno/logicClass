import { Atom, Code, FileTsx, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo, YoutubeLogo } from "phosphor-react";

export function Footer(){
  return (
    <footer className="w-full py-2 px-6 bg-white">
      <div className="flex items-center justify-between">
        
        <div className="w-full text-gray-300 text-2xl font-light flex items-center justify-between">
            <Code />
            &nbsp;
            <Atom />
            &nbsp;
            <FileTsx />
            &nbsp;
          <span className="text-sm flex flex-1">
          &nbsp; Design by Nadi Duno | Ciências da Computação | 20022
          </span>    
        </div>
        
        <div className="w-full flex flex-1">
          <a 
            href="https://github.com/nadidun" 
            target="_blank" 
            className="p-2 text-sm  border border-violet-800 text-violet-800 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-violet-900 hover:text-gray-900 transition-colors mx-1">
            <GithubLogo size={20} />
          </a>
          <a 
            href="https://www.youtube.com/nadiduno" 
            target="_blank" 
            className="p-2 text-sm  border border-violet-800 text-violet-800 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-violet-800 hover:text-gray-900 transition-colors mx-1">
            <YoutubeLogo size={20} />
          </a>
          <a 
            href="https://www.instagram.com/nadiduno.csv/" 
            target="_blank" 
            className="p-2 text-sm  border border-violet-800 text-violet-800 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-violet-800 hover:text-gray-900 transition-colors mx-1">
            <InstagramLogo size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/nadiduno/" 
            target="_blank" 
            className="p-2 text-sm  border border-violet-800 text-violet-800 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-violet-800 hover:text-gray-900 transition-colors mx-1">
            <LinkedinLogo size={20} />
          </a>
          <a 
            href="https://api.whatsapp.com/send?phone=5571984338160" 
            target="_blank" 
            className="p-2 text-sm  border border-violet-800 text-violet-800 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-violet-800 hover:text-gray-900 transition-colors mx-1">
            <WhatsappLogo size={20} />
          </a>
        </div>
      </div>
   </footer>



   
  )
}