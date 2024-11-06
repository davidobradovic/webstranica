import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import vinLogo from '../logos/vinlogo.png';
import Header from '../components/Header';

const importMedia = () => {
    const context = require.context('../assets', true, /\.(png|jpg|jpeg|gif|mp4|webm)$/);
    return context.keys().map((path) => ({
        path: context(path),
        folder: path.split('/')[1] || 'Ostalo',
    }));
};

const prioritizedFolders = ['redbull', 'alternativa', 'vozila', 'tapete', 'stampa'];

const GalleryPage = () => {
    const mediaFiles = importMedia();
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const groupedMedia = useMemo(() => {
        const grouped = mediaFiles.reduce((acc, file) => {
            const folder = file.folder.toLowerCase();
            if (!acc[folder]) acc[folder] = [];
            acc[folder].push(file);
            return acc;
        }, {});

        const orderedFolders = [...prioritizedFolders, ...Object.keys(grouped).filter(f => !prioritizedFolders.includes(f))];
        return orderedFolders.reduce((acc, folder) => {
            if (grouped[folder]) acc[folder] = grouped[folder];
            return acc;
        }, {});
    }, [mediaFiles]);

    const openFullScreen = (folder, index) => {
        const folderMedia = groupedMedia[folder];
        setCurrentIndex(index);
        setIsFullScreen({ folder, media: folderMedia });
    };

    const closeFullScreen = () => {
        setIsFullScreen(false);
    };

    const showNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % isFullScreen.media.length);
    };

    const showPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + isFullScreen.media.length) % isFullScreen.media.length);
    };

    return (
        <div className="bg-gray-100 space-y-12">
            <Header />
            {isFullScreen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
                    <button className="absolute top-4 right-4 text-white" onClick={closeFullScreen}>
                        <X size={24} />
                    </button>
                    <button className="absolute left-4 text-white" onClick={showPrevious}>
                        <ChevronLeft size={36} />
                    </button>
                    <button className="absolute right-4 text-white" onClick={showNext}>
                        <ChevronRight size={36} />
                    </button>
                    {isFullScreen.media[currentIndex].path.endsWith('.mp4') || isFullScreen.media[currentIndex].path.endsWith('.webm') ? (
                        <video
                            src={isFullScreen.media[currentIndex].path}
                            controls
                            autoPlay
                            className="w-full max-w-4xl max-h-screen object-contain"
                        />
                    ) : (
                        <img
                            src={isFullScreen.media[currentIndex].path}
                            alt="Full Screen Media"
                            className="w-full max-w-4xl max-h-screen object-contain"
                        />
                    )}
                </div>
            )}

            <section className="text-center mb-8 p-4 flex items-center justify-center flex-col hero-section text-white" style={{ height: '60vh' }}>
                <h1 className="text-4xl font-bold ">Vin Print Galerija</h1>
                <p className="text-lg opacity-50 mt-2">
                    Istražite našu bogatu ponudu štampanih radova za različite brendove i projekte.
                </p>
            </section>

            {Object.entries(groupedMedia).map(([folder, files]) => (
                <div key={folder} className="w-full lg:w-2/3 mx-auto p-4">
                    <h2 className="text-2xl font-semibold text-gray-700 border-b border-gray-300 pb-2 capitalize mb-2">{folder}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {files.map((file, index) => (
                            <LazyMedia
                                key={file.path}
                                src={file.path}
                                isVideo={file.path.endsWith('.mp4') || file.path.endsWith('.webm')}
                                onClick={() => openFullScreen(folder, index)}
                            />
                        ))}
                    </div>
                </div>
            ))}
        
            <footer className="bg-[#1e1e1e] text-white py-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <img src={vinLogo} alt="Vin Print Logo" className="w-24 mb-4 md:mb-0" />
                    <div className="flex space-x-4">
                        <Link to="/galerija" className="text-gray-300 hover:text-white">Galerija</Link>
                        <a href="/#about" className="text-gray-300 hover:text-white">O nama</a>
                        <a href="/#projects" className="text-gray-300 hover:text-white">Projekti</a>
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

const LazyMedia = React.memo(({ src, isVideo, onClick }) => (
    <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        {isVideo ? (
            <video
                src={src}
                controls
                className="w-full h-60 object-cover hover:shadow-md"
                onClick={onClick}
            />
        ) : (
            <img
                src={src}
                alt="Media"
                className="w-full h-60 object-cover hover:shadow-md"
                onClick={onClick}
                loading="lazy"
            />
        )}
    </div>
));

export default GalleryPage;
