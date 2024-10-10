
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