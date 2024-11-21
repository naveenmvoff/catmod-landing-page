import logo from '../assets/Logo-header.png'
export default function Header() {
    return <header className='bg-black px-5 py-10 '>
        <div>
            <img src={logo} alt="Catmod Logo" />
        </div>
        <div>
            <p> Cataclysm: Dark Days Ahead.</p>
        </div>
    </header>
}