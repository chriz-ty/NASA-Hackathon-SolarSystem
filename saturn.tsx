import React from "react";
import { Meteors } from "../../components/ui/meteors";


const Portfolio: React.FC = () => {
  return (
    <>
    <div className="w-full h-screen relative overflow-hidden bg-black">
      {/* Meteors animation in the background */}
      <Meteors number={150} />

      {/* Split layout for planet image and details */}
      <div className="absolute inset-0 grid grid-cols-2 items-center z-10">
        {/* Left side: Image of Mercury */}
        <div className="flex items-center justify-center">
        <img
          src="./assets/saturn.png"
          alt="Mercury"
          className="w-3/4 h-auto object-cover rounded-lg mb-10"
        />

      </div>
  
        {/* Right side: Planet details */}
        <div className="p-8 text-white flex items-center justify-center h-full">
          <div className="relative flex flex-col items-center justify-center text-white h-full p-8">
            {/* Mercury heading centered with margin to adjust vertical position */}
            <h1 className="text-5xl font-bold mb-4">Saturn</h1>
            <p className="text-xl mb-4">
          Saturn is the sixth planet from the Sun and is renowned for its stunning rings, which are made up of ice and rock particles. It is the second-largest planet in the solar system, following Jupiter, and is primarily composed of hydrogen and helium.
            </p>

            <p className="text-xl mb-4">
          Saturn's atmosphere is characterized by strong winds and storms, with speeds reaching up to 1,800 km/h. The planet has a very low density, meaning it would float on water if there were a body of water large enough to hold it.
            </p>
      

              <h2 className="text-3xl font-semibold mb-2">Key Facts</h2>
              <ul className="list-disc list-inside">
                <li><strong>Orbital period:</strong> 29.5 Earth years</li>
                <li><strong>Diameter:</strong> 116,460 km</li>
                <li><strong>Distance from Sun:</strong> 1.429 billion km</li>
                <li><strong>Gravity:</strong> 10.44 m/s²</li>
                <li><strong>Length of day:</strong> 10.7 hours</li>
                <li><strong>Surface temperature:</strong> -178°C</li>
                <li><strong>Atmosphere:</strong> Hydrogen and helium</li>
              </ul>

              <p className="text-lg mt-4">
          Saturn has been visited by several spacecraft, including the Pioneer and Voyager missions, which provided valuable data about the planet and its rings. The Cassini-Huygens mission studied Saturn and its moons from 2004 to 2017, offering stunning images and significant discoveries.
              </p>
            </div>
          </div>
        </div>
        
      </div>
      {/* Section 2: Moons of Mercury */}
      <div className="w-full p-8 bg-black  text-white">
          <h2 className="text-3xl font-bold mb-4">Moons of Saturn</h2>
          <p className="text-xl mb-4">
      Saturn is home to at least 82 moons, with Titan being the largest. Titan is notable for its dense atmosphere and liquid methane lakes. Other significant moons include Rhea, Enceladus, and Mimas, each with unique characteristics and potential for exploration.
          </p>
      </div>

        {/* Section 3: Comparison with Earth */}
        <div className="w-full p-8 bg-black  text-white">
          <h2 className="text-3xl font-bold mb-4">Comparison with Earth</h2>
          <p className="text-xl mb-4">
            While Venus and Earth are both rocky planets, there are significant differences:
          </p>
          <ul className="list-disc text-xl list-inside">
            <li><strong>Saturn's Diameter:</strong> 116,460 km vs. Jupiter's 139,820 km</li>
            <li><strong>Saturn's Rings:</strong> Prominent vs. Jupiter's faint rings</li>
            <li><strong>Saturn's Moons:</strong> At least 82 vs. Jupiter's 79 known moons</li>
            <li><strong>Gravity:</strong> Saturn: 10.44 m/s² vs. Jupiter: 24.79 m/s²</li>
            <li><strong>Orbital Period:</strong> Saturn: 29.5 years vs. Jupiter: 11.9 years</li>
            <li><strong>Atmosphere Composition:</strong> Mostly hydrogen and helium for both</li>
          </ul>
        </div>
        {/* Section 4: NASA */}
        <div className="w-full p-4 md:p-8 bg-black mb-2 min-h-screen text-white -mb-[15rem]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Facts About Saturn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div>
              <img
                src="https://images-assets.nasa.gov/image/PIA05425/PIA05425~orig.jpg?w=1166&h=649&fit=clip&crop=faces%2Cfocalpoint"
                alt="Mercury's southern hemisphere"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <p className="text-base text-md md:text-xl mb-4">
              Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets.
              </p>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Key Discoveries:</h3>
              <ul className="list-disc list-inside">
                <li>NASA's Voyager missions revealed that Saturn's rings are primarily composed of ice particles and rocky debris, showcasing their complex structure.</li>
                <li>The Cassini-Huygens mission discovered that Titan, Saturn's largest moon, has a dense atmosphere rich in nitrogen and methane lakes.</li>
                <li>Cassini found geysers on Enceladus, indicating a subsurface ocean and potential habitability due to ejected water vapor and organic compounds.</li>
                <li>The Cassini mission also captured a unique hexagonal cloud pattern at Saturn's north pole, highlighting an unusual atmospheric phenomenon.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* YouTube Video Section */}
      <div className="w-full min-h-screen bg-black text-white flex items-center justify-center -mt-[19rem]">
        <div className="p-4 md:p-8">
          <div className="aspect-w-16 aspect-h-9">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XeBfVdWSfBI?si=DDxNl-hc8bIfKBWd&autoplay=1&loop=1&playlist=XeBfVdWSfBI&start=10" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


          </div>
        </div>
      </div>


    </>
  
  
  );
  
}

export default Portfolio;