import { Cursor} from "phosphor-react";

export function Photos(){
  return (
   
    
    <div className="w-full max-w-[1100px] mx-auto">
      <div className="flex items-start gap-16">
        <div className="flex flex-1 gap-4">
          
          <a href="https://pt.slideshare.net/cdchirino/visita-argentina-2010" target="_blank" className="w-full hover:opacity-80 transition-colors">   
            <div className="p-4 mt-2">
              <img 
                src="https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/Microsoft.png?raw=true" 
                alt="Foto de Chacao Digital"
              />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/nadiduno/overlay/experience/261505942/multiple-media-viewer/?treasuryMediaId=1635461825659" target="_blank" className="w-full hover:opacity-80 transition-colors">   
            <div className="p-4 mt-2">
              <img 
                src="https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/PhotoNadi1.png?raw=true"                
                alt="Foto de Nadi"
              />
              <span className="absolute mt-[-10rem] ml-[4rem] text-pink-600 animate-ping">
              <Cursor />
              </span> 
            </div>
          </a>


        </div>
      </div>
      </div>
    
  )
}