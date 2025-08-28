import Image from "next/image";

import HomeBanner from "@/components/HomeBanner";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import WhatWeDo from "@/components/WhatWeDo";
import WhyCHooseUs from "@/components/WhyCHooseUs";
import GetInTouch from "@/components/GetInTouch";
import Maps from "@/components/Maps";



export default function Home() {
  return (
 <>
<HomeBanner />
<About />
<Gallery />
<WhatWeDo />
<WhyCHooseUs />

<GetInTouch />
<Maps />



 </>
  );
}
