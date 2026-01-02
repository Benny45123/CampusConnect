import campusconnect_logo_whitebg from "../assets/campusconnect_logo_whitebg.jpg";
const Header_HomePage = () => {
    return (
        <>
            <header className="header flex  p-4  border-b-1 w-full h-20 top-0">
                <div className="flex -translate-y-38 translate-x-20">
                    <img src={campusconnect_logo_whitebg} alt="Campus Connect Logo" className="logo h-50 w-50 " />
                </div>
                
            </header>
        </>
    );
}
export default Header_HomePage;