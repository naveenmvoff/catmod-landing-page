    import DigitalImage from '../assets/DigitalImage.png'
    import DotUpper from '../assets/DotUpper.png' 
    import DotLower from '../assets/DotLower.png' 
    
    // Separate DotGrid component
    const DotGrid = ({ rows = 9, cols = 9, dotSize = 3, gap = 16 }) => {
        return (
            <div 
                className="p-4"
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${cols}, ${dotSize}px)`,
                    gap: `${gap}px`,
                }}
            >
                {[...Array(rows * cols)].map((_, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-full"
                        style={{
                            width: `${dotSize}px`,
                            height: `${dotSize}px`
                        }}
                    ></div>
                ))}
            </div>
        );
    };

    // Main Digital component
    export default function Digital() {
        return (
            <section className='flex flex-col lg:flex-row justify-center items-center py-10'>
                

                <div className='w-full md:w-1/2 relative mx-auto'>
                    <div className='relative w-fit mx-auto'>
                        <img 
                            src={DigitalImage} 
                            alt="Digital Creation" 
                            className='hidden 2xl:block w-[634px] h-[300px] mx-auto relative z-10'
                        />

                        <img 
                            src={DigitalImage} 
                            alt="Digital Creation" 
                            className='hidden lg:hidden xl:block 2xl:hidden w-[500px] h-[350px] mx-auto relative z-10'
                        />
                        
                        <img 
                            src={DigitalImage} 
                            alt="Digital Creation" 
                            className='hidden md:hidden lg:block xl:hidden w-[500px] h-[300px] mx-auto relative z-10 ml-10 mr-5 pl-10'
                        />
                        <img 
                            src={DigitalImage} 
                            alt="Digital Creation" 
                            className='hidden md:block lg:hidden w-[500px] h-[300px] mx-auto relative z-10 flex justify-center items-center'
                        />

                        <img 
                            src={DigitalImage} 
                            alt="Digital Creation" 
                            className='sm:block md:hidden w-[500px] h-[300px] mx-auto relative z-10 flex justify-center items-center px-10'
                        />




                        <div
                            className="hidden 2xl:block absolute"
                            style={{
                                top: '-40px',
                                right: '0',
                                transform: 'translate(70px, -20px)'
                            }}
                        >
                            <DotGrid/>
                        </div>
                        <div
                            className="hidden 2xl:block absolute"
                            style={{
                                bottom: '-20px',
                                left: '0',
                                transform: 'translate(-70px, 30px)'
                            }}
                        >
                            <DotGrid/>
                        </div>
                    </div>
                </div>

                <div className='hidden xl:block w-full lg:w-1/2'>
                    <h1 className='text-4xl font-Open Sans font-bold color-orange text-left pr-14'>
                        Welcome to the Future of Digital Creation
                    </h1>
                    <p className='text-[#FFFFFF] font-Mulish font-semibold color-white text-justify pr-24 mt-4'>
                        Unlock the power of AI and build your digital solutions effortlessly with our Unified Low-Code/No-Code Platform.
                    </p>
                    <p className='text-[#FFFFFF] font-Mulish font-regular text-justify pr-24 mt-4'>
                        Imagine creating powerful digital solutions without writing a single line of code. Whether you're an entrepreneur, small business owner, enterprise, or educational institution, our AI-powered platform is designed to bring your digital ideas to life quickly, efficiently, and intuitively.
                    </p>
                </div>

                <div className='md:py-10 lg:block xl:hidden w-full lg:w-1/2 pl-14 mt-5'>
                    <h1 className='text-4xl font-Open Sans font-bold color-orange text-left pr-14'>
                        Welcome to the Future of Digital Creation
                    </h1>
                    <p className='text-[#FFFFFF] font-Mulish font-semibold color-white text-justify pr-24 mt-4'>
                        Unlock the power of AI and build your digital solutions effortlessly with our Unified Low-Code/No-Code Platform.
                    </p>
                    <p className='text-[#FFFFFF] font-Mulish font-regular text-justify pr-24 mt-4'>
                        Imagine creating powerful digital solutions without writing a single line of code. Whether you're an entrepreneur, small business owner, enterprise, or educational institution, our AI-powered platform is designed to bring your digital ideas to life quickly, efficiently, and intuitively.
                    </p>
                </div>

            </section>
        )
    }