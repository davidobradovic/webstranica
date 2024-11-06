import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import vinLogo from '../logos/vinlogo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            {isOpen && (
                <div className="fixed top-20 w-full">
                    <div className="bg-white w-full text-center space-y-6">
                        <a href="/#home" onClick={toggleMenu} className="block p-6 text-gray-700 hover:text-[#1e1e1e] font-medium text-lg">Početna</a>
                        <Link to="/galerija" onClick={toggleMenu} className="block p-6 text-gray-700 hover:text-[#1e1e1e] font-medium text-lg">Galerija</Link>
                        <a href="/#about" onClick={toggleMenu} className="block p-6 text-gray-700 hover:text-[#1e1e1e] font-medium text-lg">O Nama</a>
                        <a href="/#projects" onClick={toggleMenu} className="block p-6 text-gray-700 hover:text-[#1e1e1e] font-medium text-lg">Naši Projekti</a>
                        <a href="/#contact" onClick={toggleMenu} className="block p-6 text-gray-700 hover:text-[#1e1e1e] font-medium text-lg">Kontakt</a>
                    </div>
                </div>
            )}
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <img src={vinLogo} alt="Vin Print Logo" className="w-32" />

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    <a href="/#home" className="text-gray-700 hover:text-[#1e1e1e] font-medium">Početna</a>
                    <Link to="/galerija" className="text-gray-700 hover:text-[#1e1e1e] font-medium">Galerija</Link>
                    <a href="/#about" className="text-gray-700 hover:text-[#1e1e1e] font-medium">O Nama</a>
                    <a href="/#projects" className="text-gray-700 hover:text-[#1e1e1e] font-medium">Naši Projekti</a>
                    <a href="/#contact" className="text-gray-700 hover:text-[#1e1e1e] font-medium">Kontakt</a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-700">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

        </header>
    );
};

export default Header;