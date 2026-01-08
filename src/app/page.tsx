import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Help from '@/components/Home/Help';
import Causes from '@/components/Home/Causes';
import EventUpdates from '@/components/Home/FutureEvents';
import Mandate from '@/components/Home/Mandate';
import HomeUpdates from '@/components/Home/HomeUpdates';
import Testimonial from '@/components/Home/Testimonial';
import MoreInfo from '@/components/SharedComponent/Volunteer';
export const metadata: Metadata = {
  title: "Endeavor",
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Help /> */}
      {/* <Causes /> */}
      <EventUpdates />
      <Mandate />
      <HomeUpdates />
      {/* <Testimonial /> */}
      <MoreInfo />
    </main>
  )
}
