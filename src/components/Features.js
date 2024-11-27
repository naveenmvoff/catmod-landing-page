const features = [
    {
        title: "Rapid Deployment",
        description: "Speed is key. Go from idea to live solution faster than ever before. With our streamlined process, you can build, test, and deploy your digital creations in record time, helping you stay ahead of the competition."
    },
    {
        title: "AI-Driven Development",
        description: "Say goodbye to technical barriers! Simply describe your idea in plain language, and let our AI turn it into a working solution. Our platform understands your requirements, guiding you through the entire creation process—from concept to deployment."
    },
    {
        title: "All-in-One Solution",
        description: "One platform. Endless possibilities. Whether you need web development, mobile apps, business process automation, or complex B2B solutions, our platform empowers you to build it all. It's your one-stop shop for creating digital solutions across multiple domains."
    },
    {
        title: "Simple Drag-and-Drop",
        description: "No coding experience? No problem. Our easy-to-use drag-and-drop interface, powered by AI-assisted design tools, ensures that you can create beautiful, professional solutions without the hassle. It's never been easier to bring your vision to life."
    },
    {
        title: "Smart Integrations",
        description: "Connect effortlessly to your data sources and third-party services. Our platform handles complex integrations, allowing your applications to communicate seamlessly with other tools and services—no coding required."
    },
    {
        title: "Learn. Improve. Excel.",
        description: "Our platform learns as you work, adapting to your preferences and improving your experience with every project. The more you use it, the smarter and more efficient your development process becomes."
    }
];

const FeatureRow = () => {
    return (
        <div className="py-16">
            <div className="text-4xl font-Open Sans font-bold color-orange text-center mb-10">Key Features of Our Platform!</div>
            <div className="container mx-auto">
                <div className="grid grid-cols-6 gap-8 px-4">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-[#5A5552] rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-125 hover:z-100">
                            <h3 className="text-orange-500 text-xl font-bold mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-white text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureRow;