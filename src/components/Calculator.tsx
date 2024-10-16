"use client"
import { useState } from "react";
import LandTypeSelector from "@/components/selectionComponents/LandTypeSelector";
import LandSize from "./selectionComponents/LandSize";
import LandConnectivity from "./selectionComponents/LandConnectivity";
import CurrentlyLeased from "./selectionComponents/CurrentlyLeased";
import InterestedToLease from "./selectionComponents/InterestedToLease";
import MotorOrRailway from "./selectionComponents/MotorOrRailWay";
import IsGridEntryPoint from "./selectionComponents/IsGridEntryPoint";
import ParcelLocation from "./selectionComponents/ParcelLocation";
import { LoadScript } from '@react-google-maps/api';
import Remuneration from "./selectionComponents/Remuneration";
import ContactInfo from "./selectionComponents/ContactInfo";
import OwnLand from "./selectionComponents/OwnLand";
import Congratulations from "./selectionComponents/Congratulations";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

enum Steps {
  LandType,
  MotorOrRail,
  IsGridEntryPoint,
  ParcelLocation,
  OwnsLand,
  LandSize,
  LandConnectivity,
  CurrentlyLeased,
  InterestedToLease,
  Remuneration,
  ContactInfo,
  Congratulations
}

interface ParcelLocation {
  hallway: string;
  district: string;
  parcelNumber: string;
  postcode: string;
}

interface ContactInfo {
  salutation: string;
  firstName: string;
  sureName: string;
  email: string;
  phone: string;
}

const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';

// Conditional rendering of the components based on the step
const renderStep = (step: Steps, props: any) => {
  switch (step) {
    case Steps.LandType:
      return <LandTypeSelector {...props} />;
    case Steps.OwnsLand:
      return <OwnLand {...props} />;
    case Steps.LandSize:
      return <LandSize {...props} />;
    case Steps.LandConnectivity:
      return <LandConnectivity {...props} />;
    case Steps.CurrentlyLeased:
      return <CurrentlyLeased {...props} />;
    case Steps.InterestedToLease:
      return <InterestedToLease {...props} />;
    case Steps.MotorOrRail:
      return <MotorOrRailway {...props} />;
    case Steps.IsGridEntryPoint:
      return <IsGridEntryPoint {...props} />;
    case Steps.ParcelLocation:
      return <ParcelLocation {...props} />;
    case Steps.Remuneration:
      return <Remuneration {...props} />;
    case Steps.ContactInfo:
      return <ContactInfo {...props} />;
    case Steps.Congratulations:
      return <Congratulations {...props} />;
    default:
      return <LandTypeSelector {...props} />;
  }
};

function Calculator() {
  const [currentStep, setCurrentStep] = useState<Steps>(Steps.LandType);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [selectedLandType, setSelectedLandType] = useState<string | null>(null);
  const [ownsLand, setOwnsLand] = useState<string | null>(null);
  const [landSize, setLandSize] = useState<number>(0);
  const [landConnectivity, setLandConnectivity] = useState<string | null>(null);
  const [currentlyLeased, setCurrentlyLeased] = useState<string | null>(null);
  const [interestedToLease, setInterestedToLease] = useState<string | null>(null);
  const [motorOrRail, setMotorOrRail] = useState<string | null>(null);
  const [isGridEntryPoint, setIsGridEntryPoint] = useState<string | null>(null);
  const [parcelLocation, setParcelLocation] = useState<ParcelLocation>({
    hallway: '',
    district: '',
    parcelNumber: '',
    postcode: ''
  });
  const [remuneration, setRemuneration] = useState<string | null>(null);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    salutation: '',
    firstName: '',
    sureName: '',
    email: '',
    phone: ''
  });
  const [congratulations, setCongratulations] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleNextStep = () => {
    if (currentStep === Steps.ContactInfo) {
      if (contactInfo.email && contactInfo.phone) {
        handleSubmit();
        setCurrentStep((prevStep) => prevStep + 1);
      } else {
        alert("Please type Email and phone number properly")
      }
    } else {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };


  const handleSubmit = async () => {
    setLoading(true);
    const data = {
      selectedLandType,
      ownsLand,
      landSize,
      landConnectivity,
      currentlyLeased,
      interestedToLease,
      motorOrRail,
      isGridEntryPoint,
      parcelLocation,
      remuneration,
      contactInfo,
    };

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setCongratulations('Thank you! Your information has been submitted.');
      } else {
        console.error('Error sending email');
      }
    } catch (error) {
      console.error('Error sending email', error);
    } finally {
      setLoading(false);
    }
  };

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={['places']}>
      <div className='bg-white p-8 lg:p-16 rounded-md relative'>

        {renderStep(currentStep, {
          selectedLandType,
          setSelectedLandType,
          ownsLand,
          setOwnsLand,
          landSize,
          setLandSize,
          landConnectivity,
          setLandConnectivity,
          currentlyLeased,
          setCurrentlyLeased,
          interestedToLease,
          setInterestedToLease,
          motorOrRail,
          setMotorOrRail,
          isGridEntryPoint,
          setIsGridEntryPoint,
          parcelLocation,
          setParcelLocation,
          remuneration,
          setRemuneration,
          contactInfo,
          setContactInfo,
          congratulations,
          setCongratulations,
          loading,
          handleSubmit,
          handleNextStep
        })}
        {
          currentStep !== Steps.Congratulations && (
            <div className="text-center flex justify-center items-center mt-8">
              {
                currentStep !== Steps.LandType && (
                  <button
                    // disabled={currentStep === Steps.LandType}
                    onClick={handlePreviousStep}
                    className="bg-teal text-white px-6 py-2 rounded-full font-bold mr-4 flex justify-center items-center gap-4"
                  >
                    <FaCircleArrowLeft /> Zurück 
                  </button>
                )
              }
              <button
                disabled={buttonDisabled}
                onClick={handleNextStep}
                className={`${buttonDisabled ? "bg-lightGray" : "bg-teal"} text-white px-6 py-2 rounded-full font-bold flex justify-center items-center gap-4
               `}
              >
                {
                  currentStep === Steps.ContactInfo ? "Absenden" : "Weiter" 
                }  <FaCircleArrowRight />
              </button>

            </div>
          )
        }
      </div>
    </LoadScript>
  );
}

export default Calculator;