// File: components/FAQ.tsx
'use client'

import { useState } from 'react'
import { Accordion, AccordionItem, Divider } from "@nextui-org/react";

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: 'How much your area worth?',
      answer: (
        <p>
          The value of the lease area results from the size of the area and the possible yield. Not every surface generates the same electricity. In the case of commercial roof areas in particular, the yield can vary greatly depending on the orientation and shading of the area.
          <br /><br />
          With our lease calculator you are able to get a first picture of the potential value of your area. The lease and land prices that we display are based on data from our own database of leases, which has been enriched with data from the Federal Statistical Office and the State Statistical Offices. In order to get the most accurate estimate possible, we use various data records that contain average lease and sales prices. Our model uses this data to calculate estimates, which we then compare with current sales and lease offers from the Internet.
          <br /><br />
          The lease prices for agricultural land reached a historic high in 2020. According to data from the Federal Statistical Office (Destatis), arable land was Funds from all federal states for 375 euros per hectare leased, an increase of 14% compared to 2016.
          <br /><br />
          Farmers also had to pay higher prices on average for grassland, namely 198 euros per hectare, which means an increase of 23 euros compared to 2016. These increases in lease prices put a strain on German agriculture and make it more difficult for farmers to run their farms economically.
          <br /><br />
          However, there is one exception to this trend because there is another type of lease that is more attractive to landowners, namely leasing to solar investors. This type of lease enables landowners to receive a higher lease than through conventional lease. This is due to the high income from the generation of solar power. It is important to note that lease prices for agricultural land are important not only for farmers, but also for landowners, as they are an important factor for the profitability and sustainability of agricultural holdings.
        </p>
      ),
    },
    {
      question: 'How does the lease calculator works?',
      answer: (
        <p>
          Based on a Germany-wide database of lease objects for roof areas or open spaces and contacts in the photovoltaic industry, we are able to calculate the lease for your property. However, the actual lease amount you receive from the project operator depends heavily on the yield of the area. The yield in turn depends on the orientation of the area and the actual solar radiation.
          <br /><br />
          You will therefore receive a rating corridor from us for the value of your lease area, depending on the local conditions and prices.
          <br /><br />
          Depending on whether you want to lease a roof area or land, we ask you various questions in the lease price calculator to get an individual lease price. These include questions such as:
          <ul>
            <li>How big is the area?</li>
            <li>What kind of area is it? (Dachine type or Type of area such as Agricultural area or grassland)?</li>
            <li>Are you the owner of the area?</li>
            <li>Is it a contiguous area or sections?</li>
            <li>Is the area currently leased? If so, how long?</li>
            <li>Is the area near a suitable entry point?</li>
            <li>Where is the area?</li>
          </ul>
          We also ask for your contact details so that you can send you the calculation.
        </p>
      ),
    },
    {
      question: 'What happens after filling out the lease price calculator?',
      answer: (
        <p>
          After you have completed the lease price calculator, we will send you the assessment of the lease price by email. Then you have the opportunity to speak to one of our solar specialists. In this conversation, the suitability of your area will be further examined.
          <br /><br />
          If you agree, we will forward your request to our partners in the solar industry and collect up to 3 offers for you to choose from.
          <br /><br />
          After that, there may be discussions with the community, as well as approval procedures in which we support and advise you.
        </p>
      ),
    },
    {
      question: 'What is the difference between the lease price and the rent?',
      answer: (
        <p>
          The difference between the lease price and the rent is that the lease price is the total amount that a tenant pays to the lessor for the use of a property or property, while the rent is the annual amount paid for the use of the property or property becomes. The lease price can consist of a down payment and an annual rent payment.
          <br /><br />
          An example: A tenant wants to lease a property for 10 years and pays a lease price of 100,000 euros. The annual rent is 10,000 euros.
        </p>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl text-darkGray font-bold mb-8 text-center">Frequently asked questions (FAQs)</h2>
        <p className="text-center text-gray-600 md:px-32 mb-8"> {"We always want to give you a comprehensive answer to your questions about leasing your space. Some of the most common questions have already been answered here. And once we don't know what to do ourselves, we have a large network of investors and project developers who can help you."}</p>
        <div className="space-y-4 md:px-20">
          {faqs.map((faq, index) => (
            <div key={index}>
              <Accordion aria-label={faq.question}>
                <AccordionItem className='font-bold' title={faq.question}>
                  <div className='font-normal text-gray-600'>{faq.answer}</div>
                </AccordionItem>
              </Accordion>
              <Divider />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}