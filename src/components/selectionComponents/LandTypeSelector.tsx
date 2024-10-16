// File: components/LandTypeSelector.tsx
'use client'

import { motion } from 'framer-motion';

interface LandType {
  name: string;
  icon: string;
}

export default function LandTypeSelector({
  selectedLandType,
  setSelectedLandType,
  handleNextStep
}: {
  selectedLandType: string | null;
  setSelectedLandType: (type: string) => void;
  handleNextStep: () => void;
}) {
  const landTypes: LandType[] = [
    { name: 'Grünland', icon: '🌿' },
    { name: 'Ackerland', icon: '🌾' },
    { name: 'Industriegebiet', icon: '🏭' },
    { name: 'Militärliegenschaft', icon: '🏘️' },
    { name: 'Tagebau', icon: '⛏️' },
    { name: 'Deponie', icon: '♻️' },
  ]

  return (
    <div className="relative duration-100 animate-appearance-in ">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Um was für eine Fläche handelt es sich?</h2>
        <p className="text-center mb-8">
          Bitte wählen Sie eine Option aus.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {landTypes.map((type) => (
            <button onClick={
              () => {
                setSelectedLandType(type.name);
                handleNextStep();
              }
            } key={type.name}
              className={`flex flex-col hover:text-white items-center p-6 border border-primary rounded-lg duration-1000 ${type.name === selectedLandType ? "bg-teal text-white" : " hover:bg-teal  "}`}

            >
              <span className="text-5xl mb-2">{type.icon}</span>
              <span className="mt-4">{type.name}</span>
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}