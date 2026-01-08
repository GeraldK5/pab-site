import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import EventUpdates from '@/components/Home/FutureEvents';
import Mandate from '@/components/Home/Mandate';
import HomeUpdates from '@/components/Home/HomeUpdates';
import Testimonial from '@/components/Home/Testimonial';
import MoreInfo from '@/components/SharedComponent/Volunteer';
import WelcomeModal from '@/components/Home/WelcomeModal';
export const metadata: Metadata = {
  title: "Productivity Acceleration Bureau",
};

export default function Home() {
  return (
    <main>
      <WelcomeModal delayMs={3000} maxViews={6} />
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
