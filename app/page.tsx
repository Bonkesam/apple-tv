import Image from "next/image";
import Header from "./appComponents/Header";

export default function Home() {
  return (
  <>
  <Header/>
  <main>
    <div className="h-[300vh]">Hero omponent</div>
    <div>Usps</div>
    <div>3 col layout</div>
    <div>Carousel with posters</div>
  </main>
  </>
);
}
