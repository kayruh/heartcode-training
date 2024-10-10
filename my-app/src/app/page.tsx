"use client" 

import { FlipWords } from "@/components/ui/flip-words";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  const words: string[] = ["cool pookie", "the way to go", "skibidi","yay"];
  return (
    <AuroraBackground className="h-full w-full">
      <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="flex flex-col h-[calc(100vh-60px)] items-center justify-center">
          <h1 className="font-bold text-5xl text-left text-neutral-900 dark:text-neutral-100">Taking drugs is not<FlipWords words={words}/></h1>
          <br></br>
          <h1 className="text-xl text-left text-neutral-900 dark:text-neutral-100"> 
            Drugs affect the body's central nervous system. It affects the way an individual thinks, feels and behaves. </h1>
            <br></br>
            <Link href="/#card" className={buttonVariants({ variant: "secondary" })}>Click here</Link>

        </div>
        <div id="card">
          <CardHoverEffectDemo>
          </CardHoverEffectDemo>
          
        </div>
      </motion.div>
    </AuroraBackground>
  )
}


import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 ">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "What is drug abuse?",
    description:
      "Drug abuse is defined as the use of a drug in amounts or methods that is harmful to the individual or others.",
    link: "https://www.webmd.com/mental-health/addiction/drug-abuse-addiction",
  },
  {
    title: "In Singapore's context",
    description:
      "Methamphetamine, heroin and cannabis are the most commnly abused drugs in Singapore. 1,621 methamphetamine abusers (52%), 1,039 heroin abusers (33%), and 276 cannabis abusers (9%) were arrested in 2023.",
    link: "https://www.cnb.gov.sg/docs/default-source/drug-situation-report-documents/cnb-annual-statistics-2023.pdf",
  },
  {
    title: "Methamphetamine",
    description:
      "Also known as 'Ice', Methamphetamine is a powerful, highly addictive stimulant that affects the central nervous system. It takes the form of a white, odorless, bitter-tasting crystalline powder that easily dissolves in water or alcohol. ",
    link: "https://nida.nih.gov/research-topics/commonly-used-drugs-charts#MethamphetamineCrystalMeth",
  },
  {
    title: "Heroin",
    description:
      "An opioid drug made from morphine, heroin is a natural substance taken from seed pods of various opium poppy plants grown in Southeast and Southwest Asia, Mexico, and Colombia. Heroin can be a white or brown powder, or a black sticky substance known as black tar heroin",
    link: "https://nida.nih.gov/research-topics/commonly-used-drugs-charts#heroin",
  },
  {
    title: "Cannabis",
    description:
      "Commonly known as marijuana, weed, and pot, cannabis has many different chemical compounds, including tetrahydrocannabinol (THC), which has intoxicating mind altering effects. Cannabis products with THC can cause changes in mood, thoughts, and perceptions of reality.",
    link: "https://nida.nih.gov/research-topics/commonly-used-drugs-charts#CannabisMarijuanaPotWeed",
  },
  {
    title: "Overcoming drug addiction",
    description:
      "If you or someone you know wants to overcome durg addiction, click this box for some tips.",
    link: "https://www.helpguide.org/mental-health/addiction/overcoming-drug-addiction",
  },
];




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