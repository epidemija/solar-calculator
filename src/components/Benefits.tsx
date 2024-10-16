import { FaHandshake, FaMailBulk } from "react-icons/fa";
import { FaLocationPinLock } from "react-icons/fa6";
import { TbCalendarDollar } from "react-icons/tb";

// File: components/Benefits.tsx
interface Benefit {
    title: string;
    icon: string | JSX.Element;
  }
  
  export default function Benefits() {
    const benefits: Benefit[] = [
      { title: 'Starker Firmenverbund mit Expertise in der Nutzung von Pachtflächen für eigene Projekte.', icon: <FaHandshake /> },
      { title: 'Langfristige Partnerschaft und Optimierung durch eigenes Investment im starken Unternehmensverbund.', icon: <FaMailBulk /> },
      { title: 'Sehr attraktive jährliche Pachteinnahmen pro Hektar.', icon: <TbCalendarDollar /> },
      { title: 'Professionelle und diskrete Abwicklung Ihrer Pachtangelegenheiten.', icon: <FaLocationPinLock /> },
    ]
  
    return (
      <div className="bg-gray-100  py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-darkGray text-center">Gute Gründe für eine Zusammenarbeit mit der W Power.</h2>
          <p className="text-center mb-12 text-gray-600">Mit über 20 Jahren Erfahrung und unserer Expertise in der Nutzung <br /> von Pachtflächen für eigene Projekte und die unserer Tochtergesellschaften sind wir Ihr idealer Partner.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex justify-center flex-col items-center">
                <span className=" mb-4 block mx-auto text-teal text-6xl   h-24 w-24 flex justify-center items-center rounded-full">{benefit.icon}</span>
                <h3 className=" text-darkGray text-center">{benefit.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  