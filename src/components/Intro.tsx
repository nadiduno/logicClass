import { Circle } from "phosphor-react";

export function Intro(){
  return (
  <div className="w-full max-w-[1100px] mx-auto">
      <div className="flex items-start gap-16">
        <div className="flex flex-1 gap-4">
            <div className="w-[30rem]">
              <img 
                src="https://github.com/nadiduno/PortfolioNadi/blob/main/src/assets/nadiPhotoCode.png?raw=true" 
                alt="Foto de Nadiveth Duno"
                className="w-[25rem] relative z-[3] mt-[-5rem]" 
              />
              <span className="text-[2rem] absolute mt-[-6rem] ml-[15rem] text-green-300 animate-ping opacity-10">
                <Circle />
              </span> 
              <span className="text-[3rem] absolute mt-[-6rem] ml-[13rem] text-green-200 animate-ping opacity-10">
                <Circle />
              </span> 
              <span className="text-[1rem] absolute mt-[-6rem] ml-[10rem] text-green-100 animate-ping opacity-10">
                <Circle />
              </span> 
              <span className="text-3xl w-[5rem] absolute opacity-10 mr-[5rem] mt-[-23rem] z-1">
                CSS HTML &nbsp; &nbsp;JavaScript &nbsp;&nbsp;&nbsp;font-weight:Ps91 color:black background-color:red opacity:&nbsp;&nbsp;23
              </span>
            </div>
            <div className="w-full pt-6 pl-8 pr-3 border rounded-2xl border-green-300 text-green-300">
              <div className="">
                <strong className="text-violet-700 text-3xl">
                  Connecting people through 
                  <strong className="text-green-300">
                  &nbsp;education&nbsp;
                  </strong>
                  and technology
                </strong>
                <br />
                <br />
                <span className="text-white">
                Meu nome é Nadiveth Elena Duno Escalona, sou pedagoga com estudos de pós-graduação na área de Tecnologias da Informação e Comunicação, venezuelana e refugiada no Brasil desde 2020.
                <br />
                <br />
                Atualmente, moro em Salvador, Bahia, tenho nível avançado (C1) de português e estudo inglês no meu tempo livre.
                Trabalhei na área do governo digital e tenho vocação para o desenvolvimento de projetos sociais e adoro atuar nesta área.  
                </span>
                </div>
            </div>
                
          </div>
        </div>
    </div>
)
}