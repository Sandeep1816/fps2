"use client";

import React from "react";
import { otherPartnersData } from "./partnerData";
import PartnerCard from "./partnerCard";

export default function OtherPartners() {
  return (
    <section className="md:px-6">
      {
        otherPartnersData.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
        ))
      }
    </section>
  );
}
