import React, { useState } from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { CircleGauge, BrainCircuit, Cable, SquareDashedMousePointer, Workflow, GitCompareArrows, MonitorCog } from 'lucide-react';


// Define the style for the feature content in the carousel
const featureStyle = {
    width: '300px',
    height: '300px',
    borderRadius: '20px',
    border: '1px solid #FFFFFF33',
    padding: '20px',
    color: 'white',
    backgroundColor: '#212121',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
};

const features = [
  {
      icon: <CircleGauge color="white" />,
      title: "Rapid Deployment",
      description: "Speed is key. Go from idea to live solution faster than ever before. With our streamlined process, you can build, test, and deploy your digital creations in record time, helping you stay ahead of the competition."
  },
  {
      icon: <BrainCircuit color="white" />,
      title: "AI-Driven Development",
      description: "Say goodbye to technical barriers! Simply describe your idea in plain language, and let our AI turn it into a working solution. Our platform understands your requirements, guiding you through the entire creation process—from concept to deployment."
  },
  {
      icon: <Cable color="white" />,
      title: "All-in-One Solution",
      description: "One platform. Endless possibilities. Whether you need web development, mobile apps, business process automation, or complex B2B solutions, our platform empowers you to build it all. It's your one-stop shop for creating digital solutions across multiple domains."
  },
  {
      icon: <SquareDashedMousePointer color="white" />,
      title: "Simple Drag-and-Drop",
      description: "No coding experience? No problem. Our easy-to-use drag-and-drop interface, powered by AI-assisted design tools, ensures that you can create beautiful, professional solutions without the hassle. It's never been easier to bring your vision to life."
  },
  {
      // icon: <Workflow color="white" />,
      icon: <GitCompareArrows color="white" />,
      title: "Smart Integrations",
      description: "Connect effortlessly to your data sources and third-party services. Our platform handles complex integrations, allowing your applications to communicate seamlessly with other tools and services-no coding required."
  },
  {
      icon: <MonitorCog color="white" />,
      title: "Learn. Improve. Excel.",
      description: "Our platform learns as you work, adapting to your preferences and improving your experience with every project. The more you use it, the smarter and more efficient your development process becomes."
  }
];

function CarouselGames() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
      <section>
        <div className="text-4xl font-Open Sans font-bold color-orange text-center mb-10">Key Features of Our Platform!</div>
        <div className="relative flex h-full bg-[#292929]">
            <div className="container max-w-screen-2xl mx-auto relative z-20 overflow-x-hidden">
                <Splide
                    options={{
                        type: "loop", // Loop back to the beginning when reaching the end
                        autoScroll: {
                            pauseOnHover: false, // Do not pause scrolling when hovering over the carousel
                            pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
                            rewind: true, // Rewind to start when the end is reached
                            speed: 1 // Scrolling speed
                        },
                        arrows: false,
                        pagination: false,
                        fixedWidth: '350px',
                        gap: '12px',
                        focus: '0', // Focus on the first slide for the Justify from the first slide
                    }}
                    extensions={{ AutoScroll }} // Use the AutoScroll extension
                >
                    {features.map((feature, index) => (
                        <SplideSlide key={index}>
                            <div
                                style={{
                                    ...featureStyle,
                                    backgroundColor: hoveredIndex === index ? '#191919' : '#212121',
                                    transition: 'background-color 0.3s',
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {feature.icon && <div className="mb-4">{feature.icon}</div>}
                                <h3 className="text-[#F05D23] text-xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-white text-sm text-justify">{feature.description}</p>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
      </section>
    );
}

export default CarouselGames;