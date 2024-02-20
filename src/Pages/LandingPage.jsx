import React from "react";
import Ayurveda from "./Ayurveda";
import FeauredBrands from "./FeauredBrands";
import Footer from "./Footer/Footer";
import GenericCarousel from "./GenericCarousel";
import HeaderCarousel from "./HeaderCarousel";
import HealthConcernCarouselCard from "./HealthConcernCarouselCard";
import SHBC from "./SHBC";

export default function LandingPage() {
  return (
    <>
      <HeaderCarousel />
      <SHBC />
      <HealthConcernCarouselCard />
      <FeauredBrands />
      <GenericCarousel
        url={`https://quaint-fawn-dungarees.cyclic.app/vitamins`}
        heading={`Vitamins`}
        link="vitamins"
      />
      <GenericCarousel
        url={`https://quaint-fawn-dungarees.cyclic.app/supplements`}
        heading={`Supplements`}
        link="supplements"
      />{" "}
      <GenericCarousel
        url={`https://quaint-fawn-dungarees.cyclic.app/skin_care`}
        heading={`Skin care`}
        link="skin_care"
      />
      <GenericCarousel
        url={`https://quaint-fawn-dungarees.cyclic.app/ayurveda_medicine`}
        heading={`Ayurveda`}
        link="ayurveda_medicine"
      />{" "}
      <Ayurveda />
    </>
  );
}
