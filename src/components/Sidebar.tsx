import { Lesson } from "./Lesson";

export function Sidebar(){
  return (
   <aside className="w-[348] text-gray-600 bg-gray-100 p-6 border-l border-yellow-600">  
    <span className="font-bold text-2xl pb-6 mb-6 border-gray-200 block">
      Cronogramas de aulas
    </span>
    <div className="flex flex-col gap-8">
      <Lesson />
      <Lesson />
      <Lesson />
      <Lesson />
      <Lesson />
    </div>
   </aside>
  )
}