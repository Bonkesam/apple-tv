import Image from "next/image";
import Header from "./appComponents/Header";
import Hero from "./appComponents/Hero";
import Usps from "./appComponents/Usps";

export default function Home() {
  return (
  <>
  <Header/>
  <main>
    <div className="bg-mainbackground">
      <Hero/>
      <Usps/>
    </div>
    <div>3 col layout</div>
    <div>Carousel with posters</div>
  </main>
  </>
);
}
