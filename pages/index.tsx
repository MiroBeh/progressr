import { Header } from "../components/layout";
import { Canvas } from "../components/canvas";
import { Controls } from "../components/controls";



export default function Home() {
  return (
    <div>
      <Header />
      <Controls />
      <Canvas />
    </div>
  )
}
