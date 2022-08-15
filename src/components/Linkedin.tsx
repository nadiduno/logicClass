import { Link, LinkedinLogo} from "phosphor-react";

export function Linkedin(){
  return (
    <div className="w-full">  
    <div className="p-4 mt-2">
      <header className="flex items-center justify-between">
        <img 
              className="w-full flex flex-col"
              src="/src/assets/Linkedin.png" 
              alt="Linkedin de Nadi"
        /> 
      </header>
      <div className="flex items-center justify-center">
        <a
          href="https://www.linkedin.com/in/nadiduno/"
          target="_blank"
          className="w-40 p-4 text-sm  text-white items-center rounded uppercase gap-2 flex flex-col hover:text-green-300 transition-colors">
          <LinkedinLogo size={30} />
          Nadiduno
        </a>
        <a
          href="https://www.linkedin.com/in/nadiduno/"
          target="_blank"
          className="w-40 p-4 text-sm  text-white  items-center rounded  uppercase gap-2  flex flex-col hover:text-green-300 transition-colors">
          <Link size={30} />
          LinkedIn
        </a>
      </div>
    </div>
   </div>
  )
}