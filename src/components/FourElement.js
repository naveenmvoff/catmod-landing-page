
const WhyChoose = () => {
    <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap" rel="stylesheet"></link>
    const features = [
        {
            number: "'01",
            title: "Democratize Digital Creation",
            description: "Empower anyone-regardless of technical skill-to create digital solutions."
        },
        {
            number: "'02",
            title: "Save Time & Resources",
            description: "No need to hire expensive developers or waste time with complicated coding."
        },
        {
            number: "'03",
            title: "Unleash Creativity",
            description: "Focus on your ideas and goals, while our intelligent AI effortlessly handles the technical details."
        },
        {
            number: "'04",
            title: "Built for All",
            description: "Whether you're a startup, a large enterprise, or an educational institution, our platform scales to meet your needs."
        }
    ];

    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-[#FF6B3D] text-4xl font-bold mb-12">
                    Why Choose Our AI-Powered<br />
                    Unified LCNC Platform?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">
                    <div className="hidden md:block absolute left-1/2 top-[0%] w-px h-20 bg-white/80 transform -translate-x-1/2"></div>
                    
                    <div className="hidden md:block absolute left-1/2 bottom-[0%] w-px h-20 bg-white/80 transform -translate-x-1/2"></div>
                    
                    {features.map((feature, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="text-[#FF6B3D] text-3xl font-['Play'] font-bold">
                                {feature.number}
                            </div>
                            <div>
                                <h3 className="text-white text-xl font-bold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                            
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    <a href="#"><button className="btnStart items-center align-center">Start Creating Today!</button></a>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;