import React from "react";
import FeatureCard from "@/components/FeatureCard";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-left">
            Your gateway to circularity
            <br />
            <span className="text-primary">in Denmark</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl text-left">
            Find partners, insights, and action opportunities tailored to you.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-hover transition-colors">
            Join Circularity Centre Denmark
          </button>
        </div>
      </section>

      {/* Services Section with Background - Desktop overlapping design */}
      <div className="hidden lg:block">
        <section className="relative w-full h-[382px]">
          {/* Background */}
          <div className="absolute w-full h-[400px] left-0 top-0 z-0">
            <div className="flex flex-col justify-center items-center p-0 w-full h-[400px]">
              {/* White Rectangle */}
              <div className="w-full h-[205px] bg-white"></div>
              {/* Green Rectangle */}
              <div className="w-full h-[206px] bg-primary"></div>
            </div>
          </div>

          {/* Feature Cards - Overlapping with background */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-[1440px] mx-auto">
              <div className="flex flex-row justify-center items-center px-[120px] py-6 gap-6 w-full h-[375px]">
                <FeatureCard
                  icon="discover"
                  title="Discover"
                  description="Discover circular businesses to partner with."
                />
                <FeatureCard
                  icon="learn"
                  title="Learn"
                  description={
                    <>Browse our Research Library for accessible learnings.</>
                  }
                  href="/research-library"
                />
                <FeatureCard
                  icon="act"
                  title="Act"
                  description="Join or create workshops and projects that accelerate circularity."
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile/Tablet Cards Section */}
      <section className="lg:hidden bg-gray-50 py-12 px-4">
        <div className="max-w-sm mx-auto space-y-8">
          <FeatureCard
            icon="discover"
            title="Discover"
            description="Discover circular businesses to partner with."
          />
          <FeatureCard
            icon="learn"
            title="Learn"
            description={
              <>Browse our Research Library for accessible learnings.</>
            }
            href="/research-library"
          />
          <FeatureCard
            icon="act"
            title="Act"
            description="Join or create workshops and projects that accelerate circularity."
          />
        </div>
      </section>

      {/* Circular Business Section */}
      <section className="bg-primary py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
            Everything you need to create a circular
            <br />
            business <span className="font-bold">in one place.</span>
          </h2>
          <p className="text-white/90 text-lg">
            Connecting <span className="font-semibold">businesses</span>,{" "}
            <span className="font-semibold">researchers</span> and{" "}
            <span className="font-semibold">citizens</span> in Denmark.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-stretch">
            <div className="bg-gray-100 rounded-[32px] flex items-center justify-center min-h-[500px]">
              <span className="text-gray-400 text-lg">Image placeholder</span>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Our Story
              </h2>
              <p className="text-primary font-medium mb-6">
                Description of CCD
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              </p>
              <div className="flex justify-end">
                <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-hover transition-colors">
                  About us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
