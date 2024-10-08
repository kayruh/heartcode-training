// import Image from "next/image";

import Image from "next/image"; 
import drugpic from "src/app/assets/drug-abuse-cycle.webp"

export default function Home() {
  return (<div> Hello World
    Drug abuse, or substance abuse, is defined as the use of a drug in amounts or methods that is harmful to the individual or others.
    <Image src={{drugpic}}/>
    
  </div>);
}

