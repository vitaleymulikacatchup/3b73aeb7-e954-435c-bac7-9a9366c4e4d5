"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Star, Crown, Users, MapPin, Award, Sparkles, Heart, Dumbbell, UtensilsCrossed, Waves, Bed, Gift, Briefcase, TrendingUp, MessageSquare, Handshake, HelpCircle, Mail } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Luxe Hotel"
          button={{ text: "Book Now", href: "https://booking.grandluxehotel.com" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Redefined"
          description="Discover unparalleled elegance and world-class service at Grand Luxe Hotel. Where every moment becomes a cherished memory."
          tag="5-Star Luxury"
          tagIcon={Star}
          buttons={[
            { text: "Book Your Stay", href: "https://booking.grandluxehotel.com" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel lobby with elegant interior design"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Grand Luxe"
          description="Since 1985, Grand Luxe Hotel has been the pinnacle of luxury hospitality, combining timeless elegance with modern sophistication."
          tag="Our Heritage"
          tagIcon={Crown}
          bulletPoints={[
            {
              title: "Exceptional Service",
              description: "24/7 concierge and personalized guest experiences",
              icon: Users
            },
            {
              title: "Prime Location",
              description: "Located in the heart of the city's cultural district",
              icon: MapPin
            },
            {
              title: "Award-Winning",
              description: "Recipient of multiple hospitality excellence awards",
              icon: Award
            }
          ]}
          buttons={[{ text: "Our Story", href: "about" }]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Luxe Hotel exterior architecture"
          imagePosition="right"
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Indulge in our premium facilities designed to exceed every expectation"
          tag="Luxury Features"
          tagIcon={Sparkles}
          features={[
            {
              title: "Serenity Spa",
              description: "Full-service spa with therapeutic treatments and wellness programs",
              icon: Heart,
              button: { text: "Book Treatment", href: "https://spa.grandluxehotel.com" }
            },
            {
              title: "Fitness Center",
              description: "State-of-the-art gym with personal training and modern equipment",
              icon: Dumbbell,
              button: { text: "View Schedule", href: "fitness" }
            },
            {
              title: "Fine Dining",
              description: "Award-winning restaurants featuring international and local cuisine",
              icon: UtensilsCrossed,
              button: { text: "Make Reservation", href: "dining" }
            },
            {
              title: "Infinity Pool",
              description: "Rooftop pool with panoramic city views and poolside service",
              icon: Waves,
              button: { text: "Pool Hours", href: "pool" }
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Luxury Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites"
          tag="Room Types"
          tagIcon={Bed}
          products={[
            {
              id: "presidential",
              name: "Presidential Suite",
              price: "$2,500/night",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential Suite with luxury bedroom"
            },
            {
              id: "executive",
              name: "Executive Room",
              price: "$650/night",
              imageSrc: "https://images.pexels.com/photos/15559299/pexels-photo-15559299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Executive Room with modern amenities"
            },
            {
              id: "deluxe",
              name: "Deluxe King",
              price: "$450/night",
              imageSrc: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe King Room with elegant decor"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Exclusive Packages"
          description="Curated experiences that combine luxury accommodation with premium services"
          tag="Special Offers"
          tagIcon={Gift}
          plans={[
            {
              id: "romantic",
              badge: "Most Popular",
              badgeIcon: Heart,
              price: "$1,200/night",
              subtitle: "Perfect for romantic getaways",
              buttons: [
                { text: "Book Package", href: "https://booking.grandluxehotel.com/romantic" },
                { text: "Learn More", href: "packages" }
              ],
              features: [
                "Deluxe suite with city view",
                "Champagne and chocolates",
                "Couples spa treatment",
                "Private dining experience",
                "Late checkout included"
              ]
            },
            {
              id: "business",
              badge: "Executive Choice",
              badgeIcon: Briefcase,
              price: "$950/night",
              subtitle: "Ideal for business travelers",
              buttons: [
                { text: "Book Package", href: "https://booking.grandluxehotel.com/business" },
                { text: "Corporate Rates", href: "corporate" }
              ],
              features: [
                "Executive room with work desk",
                "Complimentary breakfast",
                "Meeting room access",
                "Airport transportation",
                "Express laundry service"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Excellence in Numbers"
          description="Our commitment to exceptional hospitality reflected in guest satisfaction"
          tag="Achievements"
          tagIcon={TrendingUp}
          metrics={[
            { id: "1", value: "98%", description: "Guest Satisfaction Rate" },
            { id: "2", value: "50K+", description: "Happy Guests Annually" },
            { id: "3", value: "35+", description: "Years of Excellence" },
            { id: "4", value: "24/7", description: "Concierge Service" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Hear from our valued guests about their memorable stays"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO, TechCorp International",
              testimonial: "Absolutely exceptional service and attention to detail. The Presidential Suite exceeded all expectations, and the staff made our anniversary truly unforgettable.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Investment Director",
              testimonial: "Grand Luxe has become my go-to hotel for business trips. The Executive package provides everything I need, and the location is perfect for accessing the financial district.",
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Isabella Rodriguez",
              role: "Fashion Designer",
              testimonial: "The spa treatments and fine dining experiences are world-class. Every visit feels like a retreat from the busy city life. Highly recommend the rooftop pool.",
              imageSrc: "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Isabella Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Travel Blogger",
              testimonial: "I've stayed at luxury hotels worldwide, but Grand Luxe stands out for its perfect blend of classic elegance and modern amenities. The concierge service is unmatched.",
              imageSrc: "https://images.pexels.com/photos/8555264/pexels-photo-8555264.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Preferred partner of major hotel chains and hospitality organizations worldwide"
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2105326/pexels-photo-2105326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about your stay at Grand Luxe Hotel"
          tag="Help Center"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What are the check-in and check-out times?",
              content: "Standard check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out can be arranged based on availability for an additional fee."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide luxury airport transfer service. Please contact our concierge at least 24 hours in advance to arrange pickup. Additional charges apply."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "Grand Luxe features three restaurants: our signature fine dining restaurant, a casual bistro, and a rooftop bar with panoramic city views. Room service is available 24/7."
            },
            {
              id: "4",
              title: "Is parking available at the hotel?",
              content: "Yes, we offer both self-parking and valet parking services. Valet parking is complimentary for Presidential Suite guests and available for other guests at $25 per night."
            },
            {
              id: "5",
              title: "What spa services do you offer?",
              content: "Our Serenity Spa offers massage therapy, facial treatments, body wraps, and wellness programs. We also have a steam room, sauna, and relaxation lounge. Advance booking recommended."
            },
            {
              id: "6",
              title: "Can you accommodate special dietary requirements?",
              content: "Absolutely. Our chefs can accommodate various dietary needs including vegetarian, vegan, gluten-free, and allergy-specific requirements. Please inform us during booking or upon arrival."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          tagIcon={Mail}
          title="Experience Luxury at Grand Luxe"
          description="Subscribe to our newsletter for exclusive offers, special packages, and updates on our luxury amenities and services."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe Now"
          termsText="By subscribing, you agree to receive exclusive offers and updates. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "concierge" },
                { label: "Business Center", href: "business" },
                { label: "Event Spaces", href: "events" },
                { label: "Airport Transfer", href: "transport" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Reservations", href: "https://booking.grandluxehotel.com" },
                { label: "Guest Services", href: "contact" },
                { label: "Corporate", href: "corporate" },
                { label: "Press & Media", href: "press" }
              ]
            }
          ]}
          copyrightText="© 2025 | Grand Luxe Hotel"
        />
      </div>
    </ThemeProvider>
  );
}