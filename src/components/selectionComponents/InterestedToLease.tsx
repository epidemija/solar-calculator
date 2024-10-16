// File: components/LandTypeSelector.tsx
'use client'

import { FaCheckCircle } from "react-icons/fa";
import { GiSolarPower } from "react-icons/gi";
import { MdBatteryChargingFull, MdOutlineWindPower } from "react-icons/md";

interface LandType {
    name: string;
    icon: string | JSX.Element;
}

export default function InterestedToLease({
    interestedToLease,
    setInterestedToLease,
    handleNextStep
}: {
    interestedToLease: string | null;
    setInterestedToLease: (type: string) => void;
    handleNextStep: () => void;
}) {
    const landTypes: LandType[] = [
        { name: 'Solar', icon: <GiSolarPower /> },
        // { name: 'Windkraft', icon: <MdOutlineWindPower /> },
        { name: 'Batteriespeicher', icon: <MdBatteryChargingFull /> },
        { name: 'Beide', icon: <FaCheckCircle /> }
    ]

    return (
        <div className="relative  duration-100 animate-appearance-in">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">Sind Sie an der Verpachtung für erneuerbare Energien interessiert?</h2>
                <p className="text-center mb-8">
                Bitte wählen Sie eine Option aus.
                </p>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center items-center ">
                        {landTypes.map((type) => (
                            <button onClick={
                                () => {
                                    setInterestedToLease(type.name);
                                    handleNextStep();
                                }
                            } key={type.name}

                                className={`flex flex-col  hover:text-white  items-center px-12 py-8  border  border-primary  rounded-lg duration-1000 ${type.name === interestedToLease ? "bg-teal text-white" : " hover:bg-teal  "}`}>

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