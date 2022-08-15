import { FilePdf, Link } from "phosphor-react";

export function Dashbord3(){
  return (
    <div className="w-full">  
    
    <div className="p-4 mt-2">
      <header className="flex items-center justify-between">
        <img 
              className="w-full flex flex-col border-2"
              src="/src/assets/Dashbord3.jpg" 
              alt="Dashbord Cervejas"
        /> 
      </header>
      <div className="flex items-center justify-center">
        <a 
          href="https://pt.slideshare.net/nadi192002/dashbord-de-vendas-cervejapdf-252546596"
          target="_blank"
          className="w-40 p-4 text-sm  text-white items-center rounded uppercase gap-2 flex flex-col hover:text-green-300 transition-colors">
          <FilePdf size={30} />
          Documentação
        </a>
        <a
          href="https://app.powerbi.com/view?r=eyJrIjoiMDEwZjJkYzQtYTBmMC00ZWE3LWI5MjktZDJhZTUzODI2NjVhIiwidCI6IjE0YmU1ZTFkLTM2MGYtNDg0Ni1iNGIwLTJlNTkzNzc1NmQwZCJ9"
          target="_blank"
          className="w-40 p-4 text-sm  text-white  items-center rounded  uppercase gap-2  flex flex-col hover:text-green-300 transition-colors">
          <Link size={30} />
          Aplicação
        </a>
      </div>
    </div>
   </div>
  )
}