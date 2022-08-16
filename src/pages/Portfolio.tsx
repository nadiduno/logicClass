import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function Portfolio(){
  return(
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col">
        <Sidebar />
        <Content />
        <Footer />
      </main>
    </div>
  )
}