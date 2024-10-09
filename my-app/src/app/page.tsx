
import { FlipWords } from "@/components/ui/flip-words";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  const words: string[] = ["cool pookie", "it", "skibidi"];
  return (
    <AuroraBackground className="h-[1000px]">
	<div>
  	<div className="flex flex-col h-[calc(100vh-60px)] items-center justify-center">
    	<h1 className="font-bold text-5xl text-left text-neutral-900 dark:text-neutral-100">Taking drugs is not<FlipWords words={words}/></h1>
  	</div>
    <br>
    </br>
    <div className="flex flex-col h-[calc(100vh-60px)] items-center justify-center">
      <h1 className="font-bold text-2xl text-left text-neutral-900 dark:text-neutral-100"> 
        Drugs affect the body's central nervous system. It affects the way an individual thinks, feels and behaves. </h1>
      
      <p>Drug abuse is defined as the use of a drug in amounts or methods that is harmful to the individual or others.</p>
      
    </div>
	</div>
  </AuroraBackground>
  )
}



// day 2 code for landing page

// import Image from "next/image"; 
// import drugpic from "./assets/drug-abuse-cycle.webp"
// import overcomepic from "./assets/overcoming-addiction-4157285.FINAL-f0a8efaed7a24b2a9a1a26dbbbf60435.webp"

// export default function Home() {
//   return (<div> 
//     <div className="flex flex-col justify-center h-dvh">
//       <p className="font-bold text-3xl text-center"> Drugs are bad</p>
//       <p className="text-sm text-center">Drug abuse, or substance abuse, is defined as the use of a drug in amounts or methods that is harmful to the individual or others.</p>

//     </div>
//     <br/>
//       <p className="text-sm text-center"> Cycle of drug abuse: </p>
//       <div className="flex flex-row justify-center align-center" >
//         <Image src ={drugpic} alt ="cycle of drug abuse pic" width="700" height="800"/>
//       </div>
//       <br/>
//       <p className="text-sm text-center"> If you or someone you know wants to overcome durg addiction, here are some tips </p>
//       <div className="flex flex-row justify-center align-center">
//         <Image src ={overcomepic} alt ="tips to overcome addiction"width="700" height = "800"/>
//       </div>
//       <br/>
//       <br/>
//       <br/>
      
//   </div>);
// }