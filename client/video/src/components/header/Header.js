import film from '../assets/film.png';
import Login from '../login/Login';
import { useState } from 'react';

const Header = () => {

    const [showAuthModal, setShowAuthModal] = useState(false);

    const openAuthModal = () => {
        setShowAuthModal(true);
    };

    const closeAuthModal = () => {
        setShowAuthModal(false);
    };

    return (
        <>
            <nav className="bg-custom-black p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={film} className='w-5 h-5 lg:w-8 lg:h-8' alt="Film Logo" />
                        <h1 className='inline-block text-white font-semibold text-lg lg:text-2xl ml-2'>Cinematrix</h1>
                    </div>
                    <div className="lg:flex lg:space-x-4">
                        <button onClick={openAuthModal} className='text-white rounded-lg border-none text-xs lg:text-sm p-2 pl-4 pr-4 bg-custom-red'>Sign In</button>
                    </div>
                </div>
            </nav>
            {showAuthModal && <Login onClose={closeAuthModal} />}
        </>
    );
};

export default Header;
