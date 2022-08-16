import { FilePdf, GithubLogo, Link} from "phosphor-react";

export function Microsoft(){
  return (
    <a href="https://pt.slideshare.net/cdchirino/visita-argentina-2010" target="_blank" className="w-full hover:opacity-60 transition-colors">  
    <div className="p-4 mt-2">
      <header className="flex items-center justify-between">
        <img 
              className="w-full flex flex-col"
              src="/src/assets/Microsoft.png" 
              alt="Photo de Nadi"
        /> 
      </header>
    </div>
   </a>
  )
}