import { Menu1 } from "./Menu1";
import { Menu2 } from "./Menu2";
import { Menu3 } from "./Menu3";
import { Menu4 } from "./Menu4";
import { Menu5 } from "./Menu5";

export function Sidebar(){
  return (
   <aside className="flex-1">  
    <div className="flex items-center justify-between">
      <Menu1 />
      <Menu2 />
      <Menu3 />
      <Menu4 />
      <Menu5 />
    </div>
   </aside>
  )
}