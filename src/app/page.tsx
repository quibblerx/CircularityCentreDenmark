import React from "react";
import { Search, BookOpen, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your gateway to circularity
            <br />
            <span className="text-primary">in Denmark</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Find partners, insights, and action opportunities tailored to you.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-hover transition-colors">
            Join Circularity Centre Denmark
          </button>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Discover Card */}
            <div className="bg-white rounded-lg p-8 shadow-sm border">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Discover
              </h3>
              <p className="text-gray-600 mb-6">
                Discover circular businesses to partner with.
              </p>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">→</span>
              </div>
            </div>

            {/* Learn Card */}
            <div className="bg-white rounded-lg p-8 shadow-sm border">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Learn
              </h3>
              <p className="text-gray-600 mb-6">
                Browse our <strong>Research Library</strong> for accessible
                learnings.
              </p>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">→</span>
              </div>
            </div>

            {/* Act Card */}
            <div className="bg-white rounded-lg p-8 shadow-sm border">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Act</h3>
              <p className="text-gray-600 mb-6">
                Join or create workshops and projects that accelerate
                circularity.
              </p>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Business Section */}
      <section className="bg-green-600 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything you need to create a circular
            <br />
            business <span className="underline">in one place.</span>
          </h2>
          <p className="text-green-100 text-lg">
            Connecting businesses, researchers and citizens in Denmark.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Image placeholder</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded to accelerate Denmark&apos;s transition to a circular
                economy, we bring together businesses, researchers, and citizens
                to create innovative solutions. Our platform provides the tools,
                knowledge, and connections needed to transform linear processes
                into circular ones.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Through collaborative programs and cutting-edge research,
                we&apos;re building a sustainable future where waste becomes
                resource and innovation drives progress.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-green-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-green-700 rounded-lg py-12 px-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to join the circular economy?
            </h3>
            <p className="text-green-100 mb-6">
              Connect with Denmark&apos;s leading circular business community
              today.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
