import { Content } from "../components/Content";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function Event(){
  return(
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col">
        <Sidebar />
        <Content />
      </main>
    </div>
  )
}