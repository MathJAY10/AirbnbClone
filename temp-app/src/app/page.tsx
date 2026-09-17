"use client";
import Header from "@/components/Header";
import StickyNav from "@/components/StickyNav";
import ListingTitle from "@/components/ListingTitle";
import PhotoGallery from "@/components/PhotoGallery";
import Overview from "@/components/Overview";
import Description from "@/components/Description";
import SleepingArrangements from "@/components/SleepingArrangements";
import Amenities from "@/components/Amenities";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import BookingCard from "@/components/BookingCard";
import Reviews from "@/components/Reviews";
import LocationSection from "@/components/LocationSection";
import HouseRules from "@/components/HouseRules";
import NearbyStays from "@/components/NearbyStays";
import BottomReserveBar from "@/components/BottomReserveBar";
import MeetHost from "@/components/MeetHost";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  const handleReserveClick = () => {
    const calendarEl = document.getElementById("calendar");
    if (calendarEl) {
      calendarEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.pageContainer}>
      {/* Global Airbnb Header */}
      <Header />

      {/* Floating Sticky Nav on scroll */}
      <StickyNav onReserveClick={handleReserveClick} />

      {/* Main Listing Content Container */}
      <main className={styles.mainContent}>
        {/* Title and Action Buttons (Share, Save) */}
        <ListingTitle />

        {/* 5-Photo Hero Grid + Fullscreen Photo Modal */}
        <PhotoGallery />

        {/* 2-Column Split: Content on Left, Booking Sidebar on Right */}
        <div className={styles.columnsLayout}>
          <div className={styles.leftColumn}>
            {/* Overview / Host Specs & Key Highlights */}
            <Overview />

            {/* Description with Expandable Text */}
            <Description />

            {/* Sleeping Arrangements Cards */}
            <SleepingArrangements />

            {/* Amenities Grid & Full Amenities Modal */}
            <Amenities />

            {/* 2-Month Availability Calendar */}
            <AvailabilityCalendar />
          </div>

          <div className={styles.rightColumn}>
            {/* 10% Promo + Sticky Booking Sidebar */}
            <BookingCard onReserveClick={handleReserveClick} />
          </div>
        </div>

        {/* Full-width Sections Below Grid matching reference video hierarchy */}
        <div className={styles.bottomSections}>
          {/* Guest Reviews & Rating Breakdown (frame 111s, 115s) */}
          <Reviews />

          {/* Location & Interactive Styled Map */}
          <LocationSection />

          {/* Meet Your Host – Co-Hosts, Message Host */}
          <MeetHost />

          {/* Cancellation Policy, House Rules, Safety */}
          <HouseRules />

          {/* More Stays Nearby Carousel (frame 135s) */}
          <NearbyStays />
        </div>
      </main>

      {/* Standard Airbnb Footer */}
      <Footer />

      {/* Mobile Sticky Floating Bottom Reserve Bar */}
      <BottomReserveBar onReserveClick={handleReserveClick} />
    </div>
  );
}
