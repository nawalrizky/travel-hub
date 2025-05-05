"use client";

import Image from "next/image";

import {

  ChevronRight,
  Star,
} from "lucide-react";

export default function Home() {
 
  return (
    <div className="min-h-screen bg-white">
     

      {/* Header/Navbar */}
      <header className="absolute top-0 left-0 right-0 z-50 ">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4 md:px-6">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              Travel<span className="text-orange-500">Hub</span>
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-orange-500 transition">
              Home
            </a>
            <a href="#" className="text-white hover:text-orange-500 transition">
              About
            </a>
            <a href="#" className="text-white hover:text-orange-500 transition">
              Services
            </a>
            <a href="#" className="text-white hover:text-orange-500 transition">
              Destinations
            </a>
            <a href="#" className="text-white hover:text-orange-500 transition">
              Contact
            </a>
          </nav>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-md transition">
            Sign In
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[100dvh]">
        <div className="absolute inset-0">
          <div className="relative h-full">
            <Image
              src="/assets/bg_hero.jpg"
              alt="Beautiful travel destination with mountain view"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col justify-center items-center px-4 md:px-6">
          <div className=" text-center flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Discover Your Next
              <span className="block text-white">Adventure</span>
            </h1>
            <p className="text-xl text-gray-200 mt-6 mb-8 max-w-lg ">
              Experience the world&apos;s most breathtaking destinations with our
              curated travel packages.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md text-lg font-medium transition-all hover:translate-y-[-2px]">
              Book Your Journey Now
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center">
        <span className="text-orange-500 font-medium text-base mb-5">CATEGORY</span>
          <h2 className="text-3xl font-bold text-center text-black mb-12">
            We Offer The Best Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg">

                <Image
                  src="/assets/img_guided.png"
                  className="w-auto h-20"
                  alt="Guided Tours"
                  width={1000}
                  height={1000}
                />


              <h3 className="text-xl font-semibold my-2 text-black">
                Guided Tours
              </h3>
              <p className="text-gray-600">
                Knowledgeable local guides who will enhance your travel
                experience with insider information and fascinating stories.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg">
              <Image
                src="/assets/img_flight.png"
                alt="Best Flights Options"
                 className="w-auto h-20"
                width={1000}
                height={1000}
              />

              <h3 className="text-xl font-semibold my-2 text-black">
                Best Flights Options
              </h3>
              <p className="text-gray-600">
                We partner with top airlines to offer you the best deals and
                most convenient flight schedules to your destination.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg">
              <Image
                src="/assets/img_religious.png"
                 className="w-auto h-20"
                alt="Religious Tours"
                width={1000}
                height={1000}
              />

              <h3 className="text-xl font-semibold my-2 text-black">Religious Tours</h3>
              <p className="text-gray-600">
                Spiritual journeys to sacred sites around the world, designed
                with respect for local customs and traditions.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg">
              <Image
                src="/assets/img_medical.png"
                 className="w-auto h-20"
                alt="Medical Insurance"
                width={1000}
                height={1000}
              />

              <h3 className="text-xl font-semibold my-2 text-black">Medical Insurance</h3>
              <p className="text-gray-600">
                Comprehensive travel insurance packages that give you peace of
                mind throughout your journey, no matter where you go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Romantic Destinations Section */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
           
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/assets/img_romantics.png"
                  alt="Romantic couple on beach"
                  width={1000}
                  height={1000}
                  className="rounded-2xl h-[600px] ml-8 w-auto"
                />
              </div>
            </div>

            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="text-orange-500 font-medium">ROMANTIC</span>
              <h2 className="text-3xl font-bold mb-4 mt-2 text-black">
                Our Romantic Tropical Destinations
              </h2>
              <p className="text-gray-600 mb-6">
                Escape to pristine beaches, luxurious resorts, and breathtaking
                sunsets. Our romantic getaways are perfect for honeymoons,
                anniversaries, or just because.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md transition">
                  <span>View Packages</span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     
     
      {/* Europe Tours Section */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="text-orange-500 font-medium">PROMOTION</span>
              <h2 className="text-3xl font-bold mb-4 mt-2 text-black">
                We Provide You Best Europe Sightseeing Tours
              </h2>
              <p className="text-gray-600 mb-6">
                Discover the rich history, stunning architecture, and vibrant
                cultures of Europe&apos;s most iconic destinations. Our expert guides
                will show you both famous landmarks and hidden gems.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-md transition">
                  <span>View Packages</span>
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                <Image
                  src="/assets/img_bali.jpg"
                  alt="Eiffel Tower in Paris"
                  width={1000}
                  height={1000}
                  className="rounded-lg  w-full"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="relative">
                  <Image
                    src="/assets/img_rome.jpg"
                    alt="Colosseum in Rome"
                    width={1000}
                    height={1000}
                    className="rounded-lg w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                  <span className="absolute bottom-2 left-2 text-xs text-white font-medium">
                    Rome
                  </span>
                </div>

                <div className="relative">
                  <Image
                    src="/assets/img_london.jpg"
                    alt="London Bridge"
                    width={1000}
                    height={1000}
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                  <span className="absolute bottom-2 left-2 text-xs text-white font-medium">
                    London
                  </span>
                </div>

                <div className="relative">
                  <Image
                    src="/assets/img_tokyo.jpg"
                    alt="Tokyo"
                    width={1000}
                    height={1000}
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                  <span className="absolute bottom-2 left-2 text-xs text-white font-medium">
                    Tokyo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  

      {/* Trending Tour Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center">
        <span className="text-orange-500 font-medium mb-4">TRENDY</span>
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Our Trending Tour Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <Image
                  src="/assets/img_swiss.jpg"
                  alt="Switzerland landscape"
                  className="h-[250px]"
                  width={1000}
                  height={1000}
                />
                <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded">
                  FEATURED
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-black">Switzerland</h3>
                  <div className="flex">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Experience the breathtaking Swiss Alps, pristine lakes, and
                  charming villages.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-black">$1,000</span>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <Image
                  src="/assets/img_fuji.jpg"
                  alt="fuji"
                  className="h-[250px]"
                  width={1000}
                  height={1000}
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded">
                  ECO TOUR
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-black">FUJI</h3>
                  <div className="flex">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Explore the world&apos;s largest rainforest and encounter
                  incredible wildlife.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-black">$1,200</span>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <Image
                  src="/assets/img_temple.jpg"
                  alt="Lempuyan temple bali"
                  className="h-[250px]"
                  width={1000}
                  height={1000}
                />
                <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-medium px-2 py-1 rounded">
                  HISTORICAL
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-black">Bali</h3>
                  <div className="flex">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Witness the ancient wonders of Egypt and explore the mysteries
                  of the pyramids.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-black">$950</span>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Travel<span className="text-orange-500">Hub</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Book your trip in minutes, get full control for much longer.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-orange-500">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-orange-500">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-orange-500">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Mobile
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    How we work
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Destinations</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Europe
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Asia
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Africa
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    North America
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    South America
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Australia
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Join Our Newsletter</h4>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter and get travel tips and exclusive
                offers
              </p>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-md transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} TravelHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
