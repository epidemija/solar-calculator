'use client'

import { FaRegTimesCircle } from "react-icons/fa";
import { GiDjedPillar, GiHorizonRoad, GiRailRoad } from "react-icons/gi";
import { PiChargingStation, PiSolarPanel } from "react-icons/pi";

interface LandType {
    name: string;
    icon: string | JSX.Element;
}

export default function IsGridEntryPoint({
    isGridEntryPoint,
    setIsGridEntryPoint,
    handleNextStep
}: {
    isGridEntryPoint: string | null;
    setIsGridEntryPoint: (type: string) => void;
    handleNextStep: () => void;
}) {
    const landTypes: LandType[] = [
        { name: 'Hochspannungs­leitung', icon: <GiDjedPillar /> },
        { name: 'Umspannwerk', icon: <PiChargingStation /> },
        { name: 'Andere Solarparks', icon: <PiSolarPanel /> },
        { name: 'Ich weiß es nicht', icon: <FaRegTimesCircle /> }
    ]

    return (
        <div className="relative duration-100 animate-appearance-in">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">Liegt die Fläche in der Nähe eines Netzeinspeisepunktes?</h2>
                <p className="text-center mb-8">
                Bitte wählen Sie eine Option aus.
                </p>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  ">
                        {landTypes.map((type) => (
                            <button
                                onClick={() => {
                                    setIsGridEntryPoint(type.name)
                                    handleNextStep()
                                }
                                }
                                key={type.name}
                            className={`flex flex-col items-center  border  border-primary px-12 py-8  rounded-lg duration-1000 ${type.name === isGridEntryPoint ? "bg-teal text-white" : " hover:bg-teal   hover:text-white"}`}
                             >
                                <span className="text-5xl  mb-2">{type.icon}</span>
                                <span className="mt-4">{type.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}














