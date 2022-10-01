import React from "react";
import Announcement from "../../components/Announcement/Announcement";
import Featured from "../../components/Features/Features";
import HeroSection from "../../components/HeroSection/HeroSection";
import Layout from "../../components/Layout/Layout";
import Services from "../../components/Services/Services";

export default function Home() {

  return (
    <>
      <Announcement />
      <Layout>
        <HeroSection />
        <Featured />
        <Services />
      </Layout>
    </>
  )
}
