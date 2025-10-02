import TypedEffect from "@/components/TypedEffect";
import React from "react";
import FeatureCard from "@/components/FeatureCard";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Full viewport height */}
      <section className="h-[calc(100vh-4rem)] flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white">
        <div className="max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          <h1 className="font-manrope text-6xl font-medium leading-[80px] text-[#74AA88] mb-6 text-left">
            Your gateway to circularity
            <br />
            in Denmark
          </h1>
          <TypedEffect />
          <button className="bg-primary text-white px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 rounded-full font-semibold hover:bg-primary-hover transition-colors text-xs sm:text-sm md:text-base lg:text-lg">
            Join Circularity Centre Denmark
          </button>
        </div>
      </section>

      {/* Services Section with Overlapping Cards */}
      <section className="bg-white pt-48 pb-16 sm:pt-64 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Feature Cards - Positioned to overlap */}
            <div className="absolute inset-x-0 top-0 -translate-y-1/2 z-10">
              {/* Desktop Cards */}
              <div className="hidden lg:flex justify-center gap-6">
                <FeatureCard
                  icon="discover"
                  title="Discover"
                  description="Discover circular businesses to partner with."
                />
                <FeatureCard
                  icon="learn"
                  title="Learn"
                  description="Browse our Research Library for accessible learnings."
                  href="/research-library"
                />
                <FeatureCard
                  icon="act"
                  title="Act"
                  description="Join or create workshops and projects that accelerate circularity."
                />
              </div>
              {/* Tablet and Mobile Cards */}
              <div className="lg:hidden flex flex-col items-center space-y-8">
                <FeatureCard
                  icon="discover"
                  title="Discover"
                  description="Discover circular businesses to partner with."
                />
                <FeatureCard
                  icon="learn"
                  title="Learn"
                  description="Browse our Research Library for accessible learnings."
                  href="/research-library"
                />
                <FeatureCard
                  icon="act"
                  title="Act"
                  description="Join or create workshops and projects that accelerate circularity."
                />
              </div>
            </div>

            {/* Green Background Section */}
            <div className="bg-primary rounded-3xl pt-64 pb-32 px-4 sm:px-6 lg:px-[120px] text-center">
              <h2 className="text-6xl font-extralight text-white leading-[80px] mb-8">
                Everything you need to create a
                <br />
                circular business{" "}
                <span className="font-bold">in one place.</span>
              </h2>
              <p className="text-white text-4xl font-normal leading-10">
                Connecting <span className="font-semibold">businesses</span>,{" "}
                <span className="font-semibold">researchers</span> and{" "}
                <span className="font-semibold">citizens</span> in Denmark.
              </p>
            </div>
          </div>
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
                Our mission is to connect people, ideas, and actions to drive
                Denmark’s shift to a circular economy through a common hub. We
                bring businesses, researchers, and citizens together through a
                practical knowledge platform, hands-on events, and workshops
                that make circularity accessible and actionable.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We envision a Denmark where circular thinking is our first
                choice, embedded in how we design, produce, consume, and
                regenerate. A future where businesses, researchers, and citizens
                work together to create systems that prioritise sustainability,
                resilience, and shared responsibility.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Among other things, we are developing a business search tool
                that helps businesses and citizens easily find circular
                businesses. We’re also working to make academic research on
                circularity accessible to everyone. We do this by translating
                insights into everyday actions and practical tools. All of this
                will be shared on our website, which is currently in
                development.
              </p>
              <div className="flex justify-end">
                <Link href="/about">
                  <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-hover transition-colors">
                    About us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
