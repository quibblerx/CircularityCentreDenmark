import React from "react";
import FeatureCard from "@/components/FeatureCard";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Full viewport height */}
      <section className="h-[calc(100vh-4rem)] flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white">
        <div className="max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-left leading-tight">
            Your gateway to circularity
            <br />
            <span className="text-primary">in Denmark</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-4 sm:mb-6 md:mb-7 lg:mb-8 max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl text-left">
            Find partners, insights, and action opportunities tailored to you.
          </p>
          <button className="bg-primary text-white px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 rounded-full font-semibold hover:bg-primary-hover transition-colors text-xs sm:text-sm md:text-base lg:text-lg">
            Join Circularity Centre Denmark
          </button>
        </div>
      </section>

      {/* Services Section with Split Background - Overlapping Cards Design */}
      <div className="relative">
        {/* Background Split */}
        <div className="absolute inset-0 z-0">
          {/* White top half */}
          <div className="h-1/2 bg-white"></div>
          {/* Green bottom half */}
          <div className="h-1/2 bg-primary"></div>
        </div>

        {/* Feature Cards - Overlapping the background split */}
        <div className="relative z-10 py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-8">
          {/* Desktop Cards - Large screens and above */}
          <div className="hidden lg:block">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-row justify-center items-center gap-4 xl:gap-6 2xl:gap-8">
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

          {/* Tablet Cards - Medium to Large screens */}
          <div className="hidden sm:block lg:hidden">
            <div className="max-w-xs mx-auto space-y-8">
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

          {/* Mobile Cards - Small screens */}
          <div className="sm:hidden">
            <div className="max-w-xs mx-auto flex flex-col gap-y-6">
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
      </div>

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
