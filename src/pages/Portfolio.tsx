import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Logo } from "../components/Logo";
import { Sidebar } from "../components/Sidebar";

export function Portfolio(){
  return(
    <div className="flex flex-col min-h-screen">
      <div className="pl-5 flex flex-1  bg-gray-700 border-b border-gray-600">
        <Logo />
        <Header />
      </div>
      <main className="flex flex-col">
        <Content />
        <Footer />
      </main>
    </div>
  )
}