import Image from "next/image"; 
import drugpic from "./assets/drug-abuse-cycle.webp"
import overcomepic from "./assets/overcoming-addiction-4157285.FINAL-f0a8efaed7a24b2a9a1a26dbbbf60435.webp"

export default function Home() {
  return (<div> 
    <div className="flex flex-col justify-center h-dvh">
      <p className="font-bold text-3xl text-center"> Drugs are bad</p>
      <p className="text-sm text-center">Drug abuse, or substance abuse, is defined as the use of a drug in amounts or methods that is harmful to the individual or others.</p>

    </div>
    <br/>
      <p className="text-sm text-center"> Cycle of drug abuse: </p>
      <div className="flex flex-row justify-center align-center" >
        <Image src ={drugpic} width="700" height="800"/>
      </div>
      <br/>
      <p className="text-sm text-center"> If you or someone you know wants to overcome durg addiction, here are some tips </p>
      <div className="flex flex-row justify-center align-center">
        <Image src ={overcomepic} width="700" height = "800"/>
      </div>
      <br/>
      <br/>
      <br/>
      
  </div>);
}