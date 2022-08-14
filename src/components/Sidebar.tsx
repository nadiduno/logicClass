import { Menu1 } from "./Menu1";
import { Menu3 } from "./Menu3";

export function Sidebar(){
  return (
   <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
    <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
      Conhece meus trabalhos
    </span>
    
    <div className="flex flex-col gap-8">
      <Menu1 />
      <Menu3 />
    </div>
   </aside>
  )
}