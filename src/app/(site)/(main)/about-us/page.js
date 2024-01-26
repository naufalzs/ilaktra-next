import React from "react";
import { H1, H3 } from "@/components/Heading";
import {
  Industries,
  PostRFQSection,
  Reviews,
  ValueSection,
} from "@/containers";
import { ilaktraValueList } from "@/constants";

const AboutText = ({ children }) => (
  <p className="w-[90%] mx-auto text-center font-montserrat text-[18px] md:text-[24px] text-black font-medium leading-[31px]">
    {children}
  </p>
);

export default function AboutUsPage() {
  return (
    <>
      <section className="w-full">
        <div className="min-h-[90vh] w-full bg-white flex flex-col items-center justify-center">
          <div className="md:w-3/4 w-full md:px-0 px-5 md:my-0 my-10 h-full mx-auto text-center space-y-10 ">
            <H1>About Us</H1>
            <H3>Ilaktra - Bridging the Gap between Buyers and Sellers</H3>
            <AboutText>
              Born out of a vision to simplify the process of connecting buyers
              and sellers, Ilaktra provides a safe, efficient and authentic
              business platform. The state-of-the-art platform utilizes modern
              tech and advanced algorithms to deliver specialized and error-free
              outcomes.
            </AboutText>
            <AboutText>
              Moreover, our staff has some of the best minds in the field. The
              smart human-technology collaboration brings forth results
              benefiting the users like never before.
            </AboutText>
            <AboutText>
              Sellers wanting to showcase and market their products and services
              get exposure to one of the largest user bases. Buyers can find
              suitable services from the big pool of authentic sellers.
            </AboutText>
          </div>
        </div>
      </section>

      <section className="w-full">
        <Industries />
      </section>

      <section className="w-full">
        <Reviews />
      </section>

      <section className="w-full">
        <ValueSection title="Why Choose ILAKTRA?" data={ilaktraValueList} />
      </section>

      <section className="w-full">
        <PostRFQSection />
      </section>
    </>
  );
}
