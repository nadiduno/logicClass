interface LessonProps{
  title:string;
  slug: string;
  availableAt:Date;
  type:'live' | 'class';
}

export function Lesson(props: LessonProps){
  // PARA SABER SIM A DATA DA PARA LIBERAR
  // const isLessonAvailable=false;
  return (
   <a href="#"> 
    <span className="text-red-600">
      {/* {props.availableAt.toString()} */}
      Aula 1
    </span>
    
    <div className="rounded border border-gray-500 p-4 mt-2">
      <header className="flex items-center justify-between">
        <samp className="text-sm text-gray-600 font-medium flex items-center gap-2">
          {/* <MicrosoftPowerpointLogo size={20}/> */}
          Introdução
        </samp>
        <samp className="text-xs text-green-600 rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
          {/* {props.type=='live'? 'AO VIVO' : 'AULA PRÁTICA'} */}
          Aula prática
        </samp>
      </header>
      <strong className="text-red-600 mt-5 block">
        {/* {props.title} */}
        Lógica de programação
      </strong>
    </div>
   </a>
  )
}