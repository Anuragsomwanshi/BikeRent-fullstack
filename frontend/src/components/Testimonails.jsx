import React from "react";
import Title from "./Title";

const Testimonails = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      {/* Section Title */}
      <div className="flex flex-col items-center text-center mb-10">
        <Title
          title="Our Testimonials"
          subTitle="Discover as per your comfort"
        />
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex items-center gap-4 px-5 py-4 bg-red-500/10">
            <img
              className="h-12 w-12 rounded-full"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100"
              alt="Donald Jackman"
            />
            <div>
              <h1 className="text-lg font-semibold text-gray-800">
                Donald Jackman
              </h1>
              <p className="text-sm text-gray-600">Content Creator</p>
            </div>
          </div>

          <div className="p-5">
            <div className="flex text-orange-500 text-lg">★★★★★</div>

            <p className="text-gray-500 mt-4 leading-7">
              PrebuiltUI removed repetitive UI work from my workflow and
              boosted productivity instantly.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex items-center gap-4 px-5 py-4 bg-red-500/10">
            <img
              className="h-12 w-12 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100"
              alt="Richard Nelson"
            />
            <div>
              <h1 className="text-lg font-semibold text-gray-800">
                Richard Nelson
              </h1>
              <p className="text-sm text-gray-600">
                Instagram Influencer
              </p>
            </div>
          </div>

          <div className="p-5">
            <div className="flex text-orange-500 text-lg">★★★★★</div>

            <p className="text-gray-500 mt-4 leading-7">
              Every component feels production-ready, consistent and
              thoughtfully designed for real-world use.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex items-center gap-4 px-5 py-4 bg-red-500/10">
            <img
              className="h-12 w-12 rounded-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop"
              alt="James Washington"
            />
            <div>
              <h1 className="text-lg font-semibold text-gray-800">
                James Washington
              </h1>
              <p className="text-sm text-gray-600">
                Digital Content Creator
              </p>
            </div>
          </div>

          <div className="p-5">
            <div className="flex text-orange-500 text-lg">★★★★★</div>

            <p className="text-gray-500 mt-4 leading-7">
              Building landing pages is now so much faster and stress-free,
              thanks to PrebuiltUI components.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonails;