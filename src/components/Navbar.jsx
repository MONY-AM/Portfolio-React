import {useState} from 'react';
import 'aos/dist/aos.css';
import {FiMenu} from 'react-icons/fi';

export default function Navbar(){

    const [isOpen, setisOpen] = useState(false);
    const handleLinkClick = () => {
        setisOpen(false);
    }
    const NavbarLinks = [
        { id:1, name: 'Home', link: '#' },
        { id:2, name: 'About Me', link: '#about' },
        { id:3, name: 'Skills', link: '#skills' },
        { id:4, name: 'Projects', link: '#projects' },
        { id:4, name: 'Certificates', link: '#certificate' },
    ]
  return (
    <header  data-aos="fade-up" data-aos-delay="300" className='fixed w-full z-50 text-white p-3 lg:p-4'>
        <div className='container mx-auto flex items-center justify-between pt-4'>
            {/* Logo */}
            <a href="/" className='text-4xl font-bold italic text-white'>Portfolio</a>
            
            {/* Mobile Menu Toggle */}
            <button className='md:hidden focus:outline-none' onClick={() => setisOpen(!isOpen)}>
                <FiMenu className='w-8 h-8 text-white' />
            </button>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center space-x-7'>
                {NavbarLinks.map((link) => (
                    <a key={link.id} href={link.link} className='md:text-md md:font-medium text-white hover:text-gray-300 mt-3 lg:text-xl'>
                        {link.name}
                    </a>
                ))}
                <a href='#contact' className='inline-flex text-white border-2 py-2 px-4 focus:outline-none rounded-full text-lg mt-1 bg-gradient-to-r 
                from-fuchsia-700 to-indigo-500 md:text-md lg:text-xl'>
                    Connect Me
                </a>
            </nav>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#0D1117] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}>
            <button className='absolute top-5 right-5 text-white' onClick={() => setisOpen(false)}> 
                <FiMenu className='w-8 h-8' />
            </button>
            {/* Mobile Navigation */}
            {NavbarLinks.map((link) => (
                <a key={link.id} href={link.link} className='text-lg text-white hover:text-gray-300 ' onClick={handleLinkClick}>
                    {link.name}
                </a>
            ))}
        </div>
    </header>
  )
}
