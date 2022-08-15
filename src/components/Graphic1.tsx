import { FilePdf, GithubLogo, Link} from "phosphor-react";

export function Graphic1(){
  return (
    <div className="w-full">  
    <div className="p-4 mt-2">
      <header className="flex items-center justify-between">
        <img 
              className="w-full flex flex-col"
              src="/src/assets/Graphic1.jpg" 
              alt="Gráfico em Python"
        /> 
      </header>
      <div className="flex items-center justify-center">
        <a
          href="https://github.com/nadiduno/graficoiterativoCOVID19"
          target="_blank"
          className="w-40 p-4 text-sm  text-white items-center rounded uppercase gap-2 flex flex-col hover:text-green-300 transition-colors">
          <GithubLogo size={30} />
          Repositorio
        </a>
        <a
          href="https://nadiduno-graficoiterativocovid19-codigobase-r8fv2n.streamlitapp.com/"
          target="_blank"
          className="w-40 p-4 text-sm  text-white  items-center rounded  uppercase gap-2  flex flex-col hover:text-green-300 transition-colors">
          <Link size={30} />
          Gráfico
        </a>
      </div>
    </div>
   </div>
  )
}