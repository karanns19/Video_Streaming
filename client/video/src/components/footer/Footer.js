
const Footer = () => {

    return (
        <div className="Footer">
            <div className="appFooter text-white p-10 md:flex bg-black">
                <div className="leftFooter mb-6 md:mb-0 w-12/12 md:w-6/12">
                    <h1 className="text-xl md:text-3xl font-semibold text-center md:text-left">Stay Connected</h1>
                    <p className="text-xs md:text-sm mt-2 text-center md:text-left">From Cult Classics to Modern Masterpieces.Stay updated with the latest movies, news and articles from CINEMATRIX.</p>
                </div>
                <div className="rightFooter w-12/12 md:w-6/12 flex justify-end items-center">
                    <input type="text" className="bg-transparent border-b-2 border-white w-80 h-10 text-xs md:text-sm" placeholder="Email"/>
                    <button className="border-white border-2 pl-6 pr-6 pt-2 pb-2 ml-6 rounded-3xl text-xs md:text-sm">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
