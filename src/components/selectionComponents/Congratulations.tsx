import React, { useEffect } from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import { Spinner } from "@nextui-org/spinner";

interface CongratulationsProps {
    handleSubmit: () => void;
    loading: boolean;
    thankYouMessage: boolean;
    contactInfo: any;
}

const Congratulations: React.FC<CongratulationsProps> = ({
    handleSubmit,
    loading,
    thankYouMessage,
    contactInfo
}) => {


    return (
        <div>
            <div className="mt-8 flex flex-col justify-center items-center duration-100 animate-appearance-in">
                {loading ? (
                    <>
                        <Spinner size="lg" />
                        <p className='my-16 text-darkGray'>Submitting your information....</p>
                    </>
                ) : (
                    <>
                        <FaCircleCheck className="text-teal text-9xl mb-10" />
                        <h2 className="text-2xl font-bold mb-4 text-center">Vielen Dank! Wir melden uns innerhalb von 5 Tagen bei
                            Ihnen.</h2>
                        <p className="text-center mb-8 md:w-1/2">
                            {
                                `
                                Wir freuen uns auf die mögliche Zusammenarbeit. Eine erste Indikation erhalten Sie innerhalb der nächsten 10 Minuten per E-Mail. Bei Fragen erreichen Sie uns unter +49 (0) 7254 – 710 88 90 oder per E-Mail an standort@wpower.eco
                                `
                            }
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Congratulations;