'use client'

import { FaRegTimesCircle } from "react-icons/fa";
import { GiHorizonRoad, GiRailRoad } from "react-icons/gi";

interface LandType {
    name: string;
    icon: string | JSX.Element;
}

export default function MotorOrRailway({
    motorOrRail,
    setMotorOrRail,
    handleNextStep
}: {
    motorOrRail: string | null;
    setMotorOrRail: (type: string) => void;
    handleNextStep: () => void;
}) {
    const landTypes: LandType[] = [
        { name: 'Autobahn', icon: <GiHorizonRoad /> },
        { name: 'Bahnstrecke', icon: <GiRailRoad /> },
        { name: 'Nein', icon: <FaRegTimesCircle /> }
    ]

    return (
        <div className="relative duration-100 animate-appearance-in">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">Liegt die Fläche an einer Autobahn oder Bahnstrecke?</h2>
                <p className="text-center mb-8">
                Bitte wählen Sie die Option nur, wenn Ihre Fläche direkt angrenzt.
                </p>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded-3xl ">
                        {landTypes.map((type) => (
                            <button
                                onClick={() => { 
                                    setMotorOrRail(type.name)
                                    handleNextStep()
                                }}
                                key={type.name}
                                className={`flex flex-col hover:text-white items-center p-6  border  border-primary  rounded-lg duration-1000 ${type.name === motorOrRail ? "bg-teal text-white" : " hover:bg-teal  "}`}
                            >
                                <span className="text-5xl mb-2">{type.icon}</span>
                                <span className="mt-4">{type.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}














