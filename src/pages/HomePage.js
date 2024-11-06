import React from 'react';
import vinLogo from '../logos/vinlogo.png';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const HomePage = () => {

    const images = [
        require('../assets/redbull/20240504_082712.jpg'),
        require('../assets/redbull/20240606_094339.jpg'),
        require('../assets/redbull/20240807_150501.jpg'),
        require('../assets/alternativa/20211202_120254.jpg'),
        require('../assets/alternativa/20230118_172753.jpg'),
        require('../assets/alternativa/20230118_172839.jpg'),
        require('../assets/alternativa/viber_slika_2024-05-23_21-32-53-618.jpg'),
        require('../assets/alternativa/viber_slika_2024-09-07_17-58-53-855.jpg'),
        require('../assets/vozila/20200715_181503_HDR.jpg'),
        require('../assets/vozila/20201102_143619.jpg'),
        require('../assets/vozila/20210704_124501_HDR.jpg'),
        require('../assets/vozila/20240827_182734.jpg'),
        require('../assets/Stampa/20231015_172855.jpg'),
        require('../assets/Stampa/20240403_153123.jpg'),
        require('../assets/Stampa/20240529_151749.jpg'),
        require('../assets/Stampa/20240608_093521.jpg'),
        require('../assets/Stampa/20240719_154245.jpg'),
        require('../assets/Stampa/20240731_235258.jpg'),

        require('../assets/Stampa/20240802_125802.jpg'),
        require('../assets/Stampa/20241001_155628.jpg'),

        

        // 
    ]

    return (
        <div className="bg-gray-100">
            <Header />

            {/* Hero Section */}
            <section id="home" className="pt-20 bg-gradient-to-br relative from-[#1e1e1e] to-[#3e3e3e] text-white h-[80vh] flex items-center justify-center hero-section">
                <div className="text-center max-w-3xl px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold">Dobrodošli u Vin Print Štampariju</h1>
                    <p className="mt-6 text-lg md:text-xl">Kvalitetne štampane usluge koje vam pomažu da se istaknete. Verujemo u preciznost, brzinu i vrhunski dizajn.</p>
                    <a href="#contact" className="inline-block mt-8 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg">Kontaktirajte Nas</a>
                </div>
                <p className='absolute bottom-6 text-center'><strong>NAPOMENA:</strong> Rad iskljucivo u vecim formatima</p>
            </section>

            {/* O Nama Section */}
            <section id="about" className="py-24 bg-white">
                <div className="container mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold text-[#1e1e1e] mb-4">O Nama</h2>
                    <p className="mt-4 text-gray-700 max-w-2xl mx-auto">Vin Print štamparija pruža vrhunske štamparske usluge od dizajna do finalnog proizvoda. Naša strast za štampom osigurava da svaki projekat bude precizno izrađen i zadovoljava najviše standarde.</p>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-[#1e1e1e]">Kvalitetna Štampa</h3>
                            <p className="mt-2 text-gray-600">Koristimo najkvalitetnije materijale i najnoviju tehnologiju za postizanje savršenih rezultata.</p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-[#1e1e1e]">Brza Isporuka</h3>
                            <p className="mt-2 text-gray-600">Brza i efikasna dostava kako biste dobili svoj proizvod na vreme.</p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-[#1e1e1e]">Dizajn po Mjeri</h3>
                            <p className="mt-2 text-gray-600">Naš tim može pomoći sa svakim detaljem kako bi se osigurao jedinstven i personalizovan dizajn.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Naši Projekti Section */}
            <section id="projects" className="py-24 bg-gray-200">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#1e1e1e] mb-4">Naši Projekti</h2>
                    <p className="text-gray-700 mb-12">Pogledajte neke od projekata na kojima smo radili. Svaki projekat je jedinstven i prilagođen zahtevima naših klijenata.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* Ovde možete dinamički prikazati slike projekata */}
                        {images.map(( image , i) => (
                            <div key={i} className="relative overflow-hidden rounded-lg shadow-lg">
                                <img src={image} className="w-full h-48 object-cover hover:scale-105 transform transition-transform duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kontakt Section */}
            <section id="contact" className="py-24 bg-gray-100">
                <div className="container mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold text-[#1e1e1e] mb-4">Kontaktirajte Nas</h2>
                    <p className="text-gray-700 mb-8">Stupite u kontakt s nama putem naših telefonskih brojeva ili emaila.</p>
                    <div className="mt-8 text-lg text-[#1e1e1e] font-medium grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <p className='border p-3 text-left'>Mobilni: <a href="tel:+38765898250" className="text-[#1e1e1e] hover:underline">+387 65 898 250</a></p>
                        <p className='border p-3 text-left'>Mobilni: <a href="tel:+38765830551" className="text-[#1e1e1e] hover:underline">+387 65 830 551</a></p>
                        <p className='border p-3 text-left'>Email: <a href="mailto:info@vinprint.com" className="text-[#1e1e1e] hover:underline">info@vinprint.com</a></p>
                    </div>
                </div>
            </section>


            {/* Footer */}
            <footer className="bg-[#1e1e1e] text-white py-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <img src={vinLogo} alt="Vin Print Logo" className="w-24 mb-4 md:mb-0" />
                    <div className="flex space-x-4">
                        <Link to="/galerija" className="text-gray-300 hover:text-white">Galerija</Link>
                        <a href="#about" className="text-gray-300 hover:text-white">O nama</a>
                        <a href="#projects" className="text-gray-300 hover:text-white">Projekti</a>
                    </div>
                </div>
                <div className='pt-8 flex flex-col gap-2 md:flex-row items-center justify-around'>
                    <p className="text-center text-xs md:text-left">&copy; {new Date().getFullYear()} Vin Print Štamparija. Sva prava zadržana.</p>
                    <p className="text-center text-xs md:text-left">Web Stranicu izradio David Obradovic.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
