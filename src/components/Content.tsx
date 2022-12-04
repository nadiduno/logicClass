import { Video } from "./Video";

export function Content(){
  return (
   <aside className="w-full  bg-gray-700 p-6 border-l border-gray-600">
  
    <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
      Lógica de programação
    </span>
    
    <span id="Setion2" className="text-2xl text-green-300">
      Comunidade Migrante aprendendo juntos
    </span>
    <Video />
   </aside>
  )
}