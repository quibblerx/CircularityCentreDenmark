import React from "react";
import FeatureCard from "@/components/FeatureCard";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
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

      {/* Feature Cards - Overlapping with green section */}
      <section className="px-4 sm:px-6 lg:px-8 relative z-10 -mb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon="discover"
              title="Discover"
              description="Discover circular businesses to partner with."
            />
            <FeatureCard
              icon="learn"
              title="Learn"
              description={
                <>
                  Browse our <strong>Research Library</strong> for accessible
                  learnings.
                </>
              }
            />
            <FeatureCard
              icon="act"
              title="Act"
              description="Join or create workshops and projects that accelerate circularity."
            />
          </div>
        </div>
      </section>

      {/* Circular Business Section - Overlapped by cards */}
      <section className="bg-primary py-20 px-4 sm:px-6 lg:px-8 pt-48">
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
            <div className="bg-gray-100 rounded-lg flex items-center justify-center min-h-[500px]">
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
                Founded to accelerate Denmark&apos;s transition to a circular
                economy, we bring together businesses, researchers, and citizens
                to create innovative solutions. Our platform provides the tools,
                knowledge, and connections needed to transform linear processes
                into circular ones.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Through collaborative programs and cutting-edge research,
                we&apos;re building a sustainable future where waste becomes
                resource and innovation drives progress.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We connect stakeholders across industries to share knowledge,
                develop partnerships, and implement circular economy principles
                that benefit both business and the environment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Join us in creating a more sustainable Denmark where circular
                thinking becomes the foundation for economic growth and
                environmental stewardship.
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
