// import { Slider } from '@nextui-org/react';
// import React from 'react';

// interface LandSizeProps {
//     landSize: number;
//     setLandSize: (size: number) => void;
// }

// function LandSize({
//     landSize,
//     setLandSize,
// }: LandSizeProps) {
//     return (
//         <div className="container mx-auto duration-100 animate-appearance-in">
//             <h2 className="text-2xl font-bold mb-4 text-center">Wie groß ist die Fläche?</h2>
//             <p className="text-center mb-8">
//             Bitte wählen Sie eine Option aus.
//             </p>
//             <div className='flex justify-between'>
//                 <p>1 Hektar</p>
//                 <p>100 Hektar</p>
//             </div>
//             <Slider
//                 size='lg'
//                 showTooltip
//                 color="primary"
//                 value={landSize}
//                 onChange={(e:any) => {
//                     if (typeof e === 'number') {
//                         setLandSize(e);
//                     }
//                 }}
//                 minValue={1}
//                 maxValue={100}
//                 step={1}
//                 defaultValue={5}
//             />
//         </div>
//     );
// }

// export default LandSize;



import React from 'react';

interface LandSizeProps {
    landSize: number;
    setLandSize: (size: number) => void;
}

function LandSize({
    landSize,
    setLandSize,
}: LandSizeProps) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value)) {
            setLandSize(value);
        }
    };

    return (
        <div className="container mx-auto duration-100 animate-appearance-in">
            <h2 className="text-2xl font-bold mb-4 text-center">Wie groß ist die Fläche?</h2>
            <p className="text-center mb-8">
                Bitte geben Sie die Fläche in Quadratmetern (m²) ein.
            </p>
            <div className="flex justify-center mb-4">
                <input
                    type="number"
                    value={landSize}
                    onChange={handleInputChange}
                    className="border p-2 rounded-md w-1/2"
                    min={1}
                    max={1000000} // Adjust the max value as needed
                />
            </div>
            <div className="text-center bg-gray-100 p-4 rounded-md">
                <p className="font-bold">Einheitenumrechnung:</p>
                <p>1 Hektar: 10.000m²</p>
                <p>1 Acre: 4046,86m²</p>
            </div>
        </div>
    );
}

export default LandSize;