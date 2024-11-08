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
          src="./assets/uranus.png"
          alt="Mercury"
          className="w-3/4 h-auto object-cover rounded-lg mb-10"
        />

      </div>
  
        {/* Right side: Planet details */}
        <div className="p-8 text-white flex items-center justify-center h-full">
          <div className="relative flex flex-col items-center justify-center text-white h-full p-8">
            {/* Mercury heading centered with margin to adjust vertical position */}
            <h1 className="text-5xl font-bold mb-4">Uranus</h1>
            <p className="text-xl mb-4">
          Uranus is the seventh planet from the Sun and is unique due to its extreme axial tilt of about 98 degrees, meaning it rotates on its side. It has a faint ring system and a pale blue color due to the presence of methane in its atmosphere.
            </p>

            <p className="text-xl mb-4">
              Uranus has a cold atmosphere with temperatures dropping as low as -224°C, making it the coldest planet in the solar system. The planet's composition is primarily hydrogen and helium, with some water, ammonia, and methane.
            </p>
          

              <h2 className="text-3xl font-semibold mb-2">Key Facts</h2>
              <ul className="list-disc list-inside">
                <li><strong>Orbital period:</strong> 84 Earth years</li>
                <li><strong>Diameter:</strong> 50,724 km</li>
                <li><strong>Distance from Sun:</strong> 2.871 billion km</li>
                <li><strong>Gravity:</strong> 8.69 m/s²</li>
                <li><strong>Length of day:</strong> 17.2 hours</li>
                <li><strong>Surface temperature:</strong> -224°C</li>
                <li><strong>Atmosphere:</strong> Hydrogen, helium, and methane</li>
              </ul>

              <p className="text-lg mt-4">
                Uranus was visited by NASA’s Voyager 2 spacecraft in 1986, which provided valuable data about its atmosphere, rings, and moons. Since then, Uranus has continued to be a point of interest for space exploration.
              </p>
            </div>
          </div>
        </div>
        
      </div>
      {/* Section 2: Moons of Mercury */}
      <div className="w-full p-8 bg-black  text-white">
          <h2 className="text-3xl font-bold mb-4">Moons of Uranus</h2>
          <p className="text-xl mb-4">
            Uranus has 27 known moons, with Titania being the largest. Many of these moons are named after characters from the works of William Shakespeare and Alexander Pope. Each moon has distinct characteristics, and some are believed to have subsurface oceans.
          </p>
      </div>

        {/* Section 3: Comparison with Earth */}
        <div className="w-full p-8 bg-black  text-white">
          <h2 className="text-3xl font-bold mb-4">Comparison with Earth</h2>
          <p className="text-xl mb-4">
            While Uranus and Earth are both rocky planets, there are significant differences:
          </p>
          <ul className="list-disc text-xl list-inside">
            <li><strong>Uranus's Diameter:</strong> 50,724 km vs. Neptune's 49,244 km</li>
            <li><strong>Uranus's Moons:</strong> 27 vs. Neptune's 14 known moons</li>
            <li><strong>Gravity:</strong> Uranus: 8.69 m/s² vs. Neptune: 11.15 m/s²</li>
            <li><strong>Orbital Period:</strong> Uranus: 84 years vs. Neptune: 165 years</li>
            <li><strong>Surface Temperature:</strong> Uranus: -224°C vs. Neptune: -214°C</li>
            <li><strong>Atmosphere Composition:</strong> Both have hydrogen, helium, and methane, but Neptune has a more dynamic atmosphere with stronger winds and storms.</li>
          </ul>
        </div>
        {/* Section 4: NASA */}
        <div className="w-full p-4 md:p-8 bg-black mb-2 min-h-screen text-white -mb-[15rem]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Facts About Uranus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div>
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-spacecraft-images-reveal-saturn-s-largest-moon-is-a-bright-bluewhite-image_2907813.jpg"
                alt="Mercury's southern hemisphere"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <p className="text-base text-md md:text-xl mb-4">
              Uranus is the seventh planet from the Sun, and it's the third largest planet in our solar system – about four times wider than Earth.
              </p>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Key Discoveries:</h3>
              <ul className="list-disc list-inside">
                <li>NASA's Voyager 2 confirmed that Uranus rotates on its side with an extreme axial tilt of about 98 degrees, making its seasons very unusual.</li>
                <li>Voyager 2 discovered Uranus's faint ring system, consisting of 13 rings made of dark particles.</li>
                <li> The mission revealed Uranus's cold atmosphere, with temperatures dropping to -224°C, making it the coldest planet in the solar system.</li>
                <li>Voyager 2 identified 10 new moons of Uranus, increasing the known count and revealing detailed information about its largest moons like Miranda and Titania.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* YouTube Video Section */}
      <div className="w-full min-h-screen bg-black text-white flex items-center justify-center -mt-[19rem]">
        <div className="p-4 md:p-8">
          <div className="aspect-w-16 aspect-h-9">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/_IW_sweOYUc?si=RkWzPeuwJIoV2_OF&start=5&autoplay=1&loop=1&playlist=_IW_sweOYUc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>



          </div>
        </div>
      </div>


    </>
  
  
  );
  
}

export default Portfolio;