// import heroBgImage from '../assets/Hero-bg.png'
import logo from '../assets/Logo.png'
import heroCurve from '../assets/Hero-curve.png'
import heroKeyboard from '../assets/Hero-Keyboard.png'
import heroDown from '../assets/Hero-down.png'

export default function Hero() {
    return (
        <section className='px-20 py-16 flex justify-center items-center'>

            <div className='px-20 bg-[#353433] rounded-[46px] flex'>
            <div className='w-2/3'>
                <div className=' py-32 relative flex justify-between'> 
                    <div className='relative'>
                        <img className=' w-[445px] h-[230px]' src={heroCurve} alt='HeroCurve'></img>
                        <h1 className='absolute top-10 left-10 right-0 text-black text-roboto text-[100pt] color-orange text-right'>CatMod</h1>
                    </div>
                    <img className='hidden xl:block py-32absolute top-10 right-0 w-[197px] h-[168px]' src={heroKeyboard}></img>
                </div>

                <div className='relative py-[-100px]'>
                    <p className='px-11 -mt-36 text-white'>Create powerful digital solutions effortlessly with our AI-powered Low-Code/No-Code platform-no coding required. Transform your ideas into reality quickly, efficiently, and intuitively, all in one unified platform.</p>
                </div>

                <div className='px-72 pt-14'>
                    <img className='hidden 2xl:block w-[300px] h-[200px]' src={heroDown} alt="Hero Down"/>
                </div>
            </div>
            
            <div className='pt-44 w-1/3 text-Mulish text-[30px] flex justify-end mb-10 2xl:mb-20'>
                <img className='w-[400px] h-[400px]' src={logo}></img>
            </div>
            
        </div>
    </section>
    );
}