import { FaAngleDoubleRight } from "react-icons/fa";

// File: components/HowItWorks.tsx
interface Step {
  title: string;
  description: string;
}

export default function HowItWorks() {
  const steps: Step[] = [
    { title: 'Pachtpreis berechnen', description: 'Sie erhalten eine Pachtpreis­schätzung ihrer Fläche per E-Mail.' },
    { title: 'Expertenberatung', description: 'Unsere Pachtexperten beraten Sie zu möglichen Optionen.' },
    { title: 'Vermittlung', description: 'Innerhalb von 3 Wochen erhalten Sie das erste Angebot.' },
  ]

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-darkGray text-center">{"So funktioniert’s!"}</h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          {steps.map((step, index) => (
            <div
              key={index}
              className={` relative h-[250px] flex w-full flex-col items-center text-center md:mb-0 md:w-1/3 p-10 ${index === 0
                  ? "bg-lightestTeal"
                  : index === 1
                    ? "bg-lighterTeal"
                    : "bg-lightTeal"
                }`}
            >
              <FaAngleDoubleRight className={`text-white text-5xl absolute right-0   ${index===2 ? "hidden" : "md:block hidden"}`} />
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 bg-teal">
                {index + 1}
              </div>
              <h3 className="font-semibold mb-2 text-center text-darkGray">{step.title}</h3>
              <p className="text-center text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
