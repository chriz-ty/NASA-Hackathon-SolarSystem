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
          src="./assets/venus.png"
          alt="Mercury"
          className="w-3/4 h-auto object-cover rounded-lg mb-10"
        />

      </div>
  
        {/* Right side: Planet details */}
        <div className="p-8 text-white flex items-center justify-center h-full">
          <div className="relative flex flex-col items-center justify-center text-white h-full p-8">
            {/* Mercury heading centered with margin to adjust vertical position */}
            <h1 className="text-5xl font-bold mb-4">Venus</h1>
            <p className="text-xl mb-4">
          Venus is the second planet from the Sun and is often referred to as Earth's "sister planet" due to their similar size and composition. It has a thick atmosphere rich in carbon dioxide, with clouds of sulfuric acid, making it one of the most inhospitable places in the solar system.
            </p>

            <p className="text-xl mb-4">
          Venus is the hottest planet in the solar system, with surface temperatures averaging around 465°C, hotter than Mercury, despite being further from the Sun. Its dense atmosphere traps heat in a runaway greenhouse effect.
            </p>

      

              <h2 className="text-3xl font-semibold mb-2">Key Facts</h2>
              <ul className="list-disc list-inside">
                <li><strong>Orbital period:</strong> 225 days</li>
                <li><strong>Diameter:</strong> 12,104 km</li>
                <li><strong>Distance from Sun:</strong> 108.2 million km</li>
                <li><strong>Gravity:</strong> 8.87 m/s²</li>
                <li><strong>Length of day:</strong> 243 Earth days</li>
                <li><strong>Surface temperature:</strong> 465°C</li>
                <li><strong>Atmosphere:</strong> Carbon dioxide with clouds of sulfuric acid</li>
              </ul>

              <p className="text-lg mt-4">
          Venus has been visited by numerous spacecraft, including the Soviet Union's Venera missions, which were the first to send back images from the surface of another planet, and more recently, NASA's Magellan mission, which mapped 98% of the planet's surface using radar.
              </p>
            </div>
          </div>
        </div>
        
      </div>
      {/* Section 2: Moons of Mercury */}
      <div className="w-full p-8 bg-black  text-white">
          <h2 className="text-3xl font-bold mb-4">Moons of Venus</h2>
          <p className="text-xl mb-4">
      Like Mercury, Venus has no moons or rings. The planet's proximity to the Sun and its lack of a substantial magnetic field likely prevent it from capturing or retaining any natural satellites.
          </p>
        </div>

        {/* Section 3: Comparison with Earth */}
        <div className="w-full p-8 bg-black  text-white">
          <h2 className="text-3xl font-bold mb-4">Comparison with Earth</h2>
          <p className="text-xl mb-4">
            While Venus and Earth are both rocky planets, there are significant differences:
          </p>
          <ul className="list-disc text-xl list-inside">
          <li><strong>Earth's Orbital period:</strong> 365 days vs. Venus' 225 days</li>
          <li><strong>Earth's Diameter:</strong> 12,742 km vs. Venus' 12,104 km</li>
          <li><strong>Earth's Gravity:</strong> 9.8 m/s² vs. Venus' 8.87 m/s²</li>
          <li><strong>Earth's Atmosphere:</strong> Nitrogen and oxygen vs. Venus' carbon dioxide</li>
          <li><strong>Surface Temperature:</strong> Earth: -88°C to 58°C vs. Venus: 465°C</li>
          <li><strong>Day Length:</strong> 24 hours vs. Venus' 243 Earth days</li>
          <li><strong>Rotation:</strong> Earth rotates counterclockwise vs. Venus' clockwise rotation</li>
          </ul>
        </div>
        {/* Section 4: NASA */}
        <div className="w-full p-4 md:p-8 bg-black mb-2 min-h-screen text-white -mb-[15rem]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Facts About Venus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div>
              <img
                src="./assets/venus hemi.jpg"
                alt="Mercury's southern hemisphere"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <p className="text-base text-md md:text-xl mb-4">
              Venus is the second planet from the Sun, and the sixth largest planet. It’s the hottest planet in our solar system.
              </p>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Key Discoveries:</h3>
              <ul className="list-disc list-inside">
                <li>The Magellan mission provided detailed radar maps of 98% of Venus's surface, revealing a landscape dominated by volcanic plains and impact craters.</li>
                <li>NASA confirmed that Venus's thick carbon dioxide atmosphere leads to surface temperatures of around 465°C, driven by a runaway greenhouse effect.</li>
                <li>Evidence from the Magellan mission suggests that Venus has extensive volcanic plains and possibly active volcanoes, indicating ongoing geological processes.</li>
                <li>The Venus Express mission discovered that the planet's atmosphere rotates much faster than its surface, with winds reaching speeds of up to 360 km/h.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* YouTube Video Section */}
      <div className="w-full min-h-screen bg-black text-white flex items-center justify-center -mt-[19rem]">
        <div className="p-4 md:p-8">
          <div className="aspect-w-16 aspect-h-9">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/d1Q_6KSzYUc?si=1I7h6AvXehG197QP&autoplay=1&mute=1&loop=1&playlist=d1Q_6KSzYUc" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>


          </div>
        </div>
      </div>


    </>
  
  
  );
  
}

export default Portfolio;