'use client'

import { FaHandHoldingUsd } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { MdSell } from "react-icons/md";

interface LandType {
    name: string;
    icon: string | JSX.Element;
}

export default function Remuneration({
    remuneration,
    setRemuneration,
    handleNextStep
}: {
    remuneration: string | null;
    setRemuneration: (type: string) => void;
    handleNextStep: () => void;
}) {
    const landTypes: LandType[] = [
        { name: 'Jährliche Pacht', icon: <FaHandHoldingUsd /> },
        { name: 'Einmalzahlung', icon: <FaSackDollar /> },
        { name: 'Verkauf', icon: <MdSell /> },
    ]

    return (
        <div className="relative duration-100 animate-appearance-in">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">Welche Vergütung wünschen Sie für die Fläche?</h2>
                <p className="text-center mb-8">
                Bitte wählen Sie eine Option aus.
                </p>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 -4 ">
                        {landTypes.map((type) => (
                            <button
                                onClick={() => {
                                    setRemuneration(type.name)
                                    handleNextStep()}}
                                key={type.name}
                                className={`flex flex-col items-center p-6  border  border-primary  rounded-lg duration-1000 ${type.name === remuneration ? "bg-teal text-white" : " hover:bg-teal   hover:text-white"}`}
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














