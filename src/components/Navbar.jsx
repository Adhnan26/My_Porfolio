import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        }
    }, [isOpen]);


    return (
        <nav className="bg-[#0f172a] text-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4 sm:p-6">

                {/* Name */}
                <h1 className="text-xl sm:text-2xl font-bold tracking-wider 
                       hover:text-cyan-400 transition-colors cursor-pointer">
                    Mohamed Adhnan
                </h1>

                {/* Hamburger */}
                {!isOpen && (
                    <div className="sm:hidden z-50">
                        <button className="hover:text-cyan-400 transition-colors" onClick={() => setIsOpen(true)}>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                )}

                {/* Desktop Menu */}
                <div className="hidden sm:flex gap-6 text-lg font-medium">
                    <Link to="/" className="hover:text-cyan-400 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Home</Link>
                    <Link to="/about" className="hover:text-cyan-400 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">About</Link>
                    <Link to="/projects" className="hover:text-cyan-400 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Projects</Link>
                    <Link to="/contact" className="hover:text-cyan-400 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Contact</Link>
                </div>
            </div>

            {/* Mobile Overlay Menu */}
            <div
                className={`fixed inset-0 bg-[#0f172a]/95 flex flex-col items-center 
        justify-center text-2xl space-y-8 transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <button
                    className="absolute top-6 right-6 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                >
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                    Home
                </Link>
                <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                    About
                </Link>
                <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                    Projects
                </Link>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
                    Contact
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;


