import { FilePdf, GithubLogo, Link} from "phosphor-react";

export function Graphic1(){
  return (
    <div className="w-full">  
        <a
          href="https://nadiduno-graficoiterativocovid19-codigobase-r8fv2n.streamlitapp.com/"
          target="_blank"
          className="p-4 text-sm  text-white items-center rounded uppercase gap-2 flex flex-col hover:text-green-300 transition-colors"
          >
          <img 
              src="https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/Graphic1.png?raw=true" 
              alt="Gráfico em Python"
              className="border rounded-2xl border-violet-700"
          /> 
        </a>
        {/* https://github.com/nadiduno/graficoiterativoCOVID19 */}
   </div>
  )
}