import roombooking from '../assets/Grid/roombooking.webp'
import personal from '../assets/Grid/personal.jpg'
import community from '../assets/Grid/community.webp'
import honey from '../assets/Grid/Honey.jpg'
import socialmedia from '../assets/Grid/socialmedia.jpg'
import educational from '../assets/Grid/educational.jpg'


function Test() {
    return (
        <>
            <h1 className='text-4xl font-bold color-orange text-center mt-10 mb-5'>Catmod in Action</h1>
            <section className='h-[600px] w-full flex justify-center items-center'>
                <div className="grid h-full w-full grid-cols-4 grid-rows-3 gap-3 px-10">
       
                    <div className="col-span-1 row-span-2 transition-all duration-300 relative group">
                        <span className="textopp hover:opacity-10 transition-all duration-300">
                            <img src={roombooking} alt="" className="rounded-sm w-full h-full object-cover" />
                        </span>
                        <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] color-orange-image opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            E-Booking
                        </h1>
                    </div>

                    <div className="col-span-2 row-span-1 transition-all duration-300 relative group">
                        <span className="textopp hover:opacity-10 transition-all duration-300">
                            <img src={personal} alt="" className='rounded-sm w-full h-full object-cover' />
                        </span>
                        <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white color-orange-image opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Portfolio
                        </h1>
                    </div>
                    <div className="col-span-1 row-span-2 transition-all duration-300 relative group">
                        <span className="textopp hover:opacity-10 transition-all duration-300">
                            <img src={community} alt="" className='rounded-sm w-full h-full object-cover' />
                        </span>
                        <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white color-orange-image opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Community
                        </h1>
                    </div>
                    <div className="col-span-2 row-span-1 transition-all duration-300 relative group">
                        <span className="textopp hover:opacity-10 transition-all duration-300">
                            <img src={honey} alt="" className='rounded-sm w-full h-full object-cover' />
                        </span>
                        <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white color-orange-image opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Ecommerce
                        </h1>
                    </div>
                    <div className="col-span-2 row-span-1 transition-all duration-300 relative group">
                        <span className="textopp hover:opacity-10 transition-all duration-300">
                            <img src={socialmedia} alt="" className='rounded-sm w-full h-full object-cover' />
                        </span>
                        <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white color-orange-image opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Social Media
                        </h1>
                    </div>
                    <div className="col-span-2 row-span-1 transition-all duration-300 relative group">
                        <span className="textopp hover:opacity-10 transition-all duration-300">
                            <img src={educational} alt="" className='rounded-sm w-full h-full object-cover' />
                        </span>
                        <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white color-orange-image opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            E-Learn
                        </h1>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Test;