import React from "react";

const ContactUs = () => {
  return (
    <div class="container my-24 px-6 mx-auto">
      <section class="mb-32 text-gray-800">
        <div class="grid lg:grid-cols-2 gap-4 lg:gap-x-12 lg:mb-0">
          <div class="mb-12 lg:mb-0">
            <h2 class="text-3xl font-bold mb-6">Frequently asked questions</h2>

            <p class="text-gray-500 mb-12">
              Didn't find your answer in the FAQ? Contact our sales team.
            </p>

            <form>
              <div class="form-group mb-6">
                <input
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput7"
                  placeholder="Name"
                />
              </div>
              <div class="form-group mb-6">
                <input
                  type="email"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleInput8"
                  placeholder="Email address"
                />
              </div>
              <div class="form-group mb-6">
                <textarea
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Send
              </button>
            </form>
          </div>

          <div class="mb-6 md:mb-0">
            <p class="font-bold mb-4">How to get around in India?</p>
            <p class="text-gray-500 mb-12">
            Traveling to India is a seamless experience, thanks to its well-developed transportation network. India boasts an extensive road connectivity, making it convenient for travelers to explore different regions. The rail network, with an extensive network of trains, offers a scenic and comfortable journey to various destinations
            </p>

            <p class="font-bold mb-4">What is the best time to travel to India?</p>
            <p class="text-gray-500 mb-12">
            The best time to travel to India depends on the places a tourist would like to visit in the country. However, it is also safe to say that the winter season (October - March) is mostly preferred by the tourists while visiting India. For wildlife sightings, both summer (March-mid June) and winter seasons are favourable. While the winter season is best for sighting animals basking in the sun during the day time, summer is the time when they can be seen frequently paying a visit to the water holes.
            </p>

            <p class="font-bold mb-4">
            Is India a safe place to travel with kids?
            </p>
            <p class="text-gray-500 mb-12">
            Yes, it is safe to travel to India with kids. While you can travel with kids almost anywhere in the country, there are some places that make for better family travel destinations, with their good hotels, plenty of activities for kids, clean air and safer environs.
            </p>

            <p class="font-bold mb-4">
            What currency should I carry while traveling in India?
            </p>
            <p class="text-gray-500 mb-12">
            India's currency is Indian Rupees; it is advisable to exchange your currency at the airport or any foreign currency exchange before travelling to India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
