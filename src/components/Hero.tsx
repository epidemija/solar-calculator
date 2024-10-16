import bg from '@/images/solar-panels.webp'
import Image from 'next/image';
import Header from './Header';

export default function Hero() {
  return (
    <div className="relative min-h-[500px] lg:min-h-[500px]">
      <Image
        src='/hero-bg.jpeg'
        fill
        alt="ePower"
        className="absolute top-0 left-0 w-full h-full object-cover object-left-top "
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal to-transparent "></div>
      <Header />
      <div className="text-white min-h-[300px] lg:min-h-[300px] flex items-end relative h-full">
        <div className="container mx-auto relative h-full flex flex-col justify-end p-5 m-5">
          <h1 className="text-4xl font-bold mb-4 text-center">W Power Pachtpreisrechner</h1>
          <p className="mb-8 text-center">Nutzen Sie jetzt unseren Pachtpreisrechner und erhalten Sie Ihre persönliche  Pachtschätzung <br /> bequem innerhalb von 10 Minuten per E-Mail.</p>
          {/* <button className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-full font-bold">
            Start the lease price calculator
          </button> */}
        </div>
      </div>
    </div>
  );
}