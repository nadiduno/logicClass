import { Video } from "./Video";

export function Content(){
  return (
   <aside className="w-full p-6 border-l border-gray-600">
  
    <span className="font-bold bg-yel text-2xl pb-6 mb-6 border-b border-yellow-600 block">
      Lógica de programação
    </span>
    
    <span id="Setion2" className="text-2xl text-red-600">
      Comunidade Migrante aprendendo juntos
    </span>
    <Video />
   </aside>
  )
}