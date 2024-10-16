
// File: components/CO2Info.tsx
import Image from 'next/image'
import solarImage from '../images/solar_works.jpg'

export default function CO2Info() { 
  return ( 
    <div className="relative bg-teal grid grid-cols-1 md:grid-cols-5  text-white md:h-[400px]">
      <div className=" md:flex md:flex-col md:justify-center items-center mx-auto p-8 col-span-3">
            <h2 className="text-2xl font-bold mb-4 text-center">Ihre Pachtfläche – Ein Beitrag zur CO₂-Reduktion</h2>
            <p className="mb-4 text-center">
              {"Indem Sie Ihre Fläche für Solaranlagen verpachten, leisten Sie einen wertvollen Beitrag zur Reduzierung von CO₂-Emissionen. Durch die Nutzung Ihrer Pachtflächen für Solarprojekte erzeugen wir saubere, erneuerbare Energie, die fossile Brennstoffe ersetzt und so den CO₂-Ausstoß erheblich verringert. Gemeinsam schaffen wir eine nachhaltige Energiezukunft und machen Ihre Fläche zu einem aktiven Teil des Klimaschutzes."}
            </p>
            {/* <button className="bg-white text-teal text-center px-6 py-2 mx-auto flex justify-center items-center rounded-full font-bold">
              Offer your lease area now
            </button> */}
      </div>
        <div className="relative w-full md:h-full h-[250px] col-span-2">
          <Image src='/co2.jpeg' alt="Solar panels" layout="fill" className=" object-cover" />
        </div>
    </div>
  )
}
