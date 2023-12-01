import film from '../assets/film.png';

function Header() {
    return (
        <div className="Header">
            <div className="appHead bg-custom-black p-4 text-white font-serif">
                <div className="leftHead flex w-4/12 md:w-2/12 justify-center">
                    <img src={film} className='w-5 h-5 md:w-8 md:h-8' alt="Film Logo" />
                    <h1 className='inline-block text-md md:text-2xl ml-2'>Cinematrix</h1>
                </div>
                <div className="rightHead w-10/12">

                </div>
            </div>
        </div>
    );
}

export default Header;