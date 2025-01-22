import card1 from "../assets/img/card1.png";
import card2 from "../assets/img/card2.png";
import card3 from "../assets/img/card3.png";
import SingelCard from "./SingelCard";

function Card() {
const cards = [
{
name: "You’re in Control",
description: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
image: card1,
},
{
    name: "Infinitely Scalable",
    description: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
    image: card2,
},
{
    name: "Personalized Sequences",
    description: "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
    image: card3,
}
]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto py-8">
        {
            cards.map((card, index) => (
                <SingelCard key={index} card={card} />
            ))
        }
    </div>
  )
}

export default Card