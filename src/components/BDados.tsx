import { FilePdf, GithubLogo, Link} from "phosphor-react";

export function BDados(){
  return (
    <div className="w-full">  
    <div className="p-4 mt-2">
      <header className="flex items-center justify-between">
        <img 
              className="w-full flex flex-col"
              src="/src/assets/Dados.png" 
              alt="Base de Dados IBGE"
        /> 
      </header>
      <div className="flex items-center justify-center">
        <a
          href="https://github.com/nadiduno/DataBaseIBGE"
          target="_blank"
          className="w-40 p-4 text-sm  text-white items-center rounded uppercase gap-2 flex flex-col hover:text-green-300 transition-colors">
          <GithubLogo size={30} />
          Repositorio
        </a>
        <a
          href="https://pt.slideshare.net/nadi192002/teste-analista-de-dados-nadiveth-dunopdf"
          target="_blank"
          className="w-40 p-4 text-sm  text-white  items-center rounded  uppercase gap-2  flex flex-col hover:text-green-300 transition-colors">
          <Link size={30} />
          Base de Dados
        </a>
      </div>
    </div>
   </div>
  )
}