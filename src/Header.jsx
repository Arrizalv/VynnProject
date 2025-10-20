import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between py-6">
        <a href="#Home" className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Personal Blog
        </a>

        <button
          type="button"
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          aria-controls="primary-navigation"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <nav
          id="primary-navigation"
          className="hidden md:flex md:items-center md:space-x-4"
          aria-label="Main navigation"
        >
          <a href="#Home" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Home</a>
          <a href="#AboutMe" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">About</a>
          <a href="#MySkill" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Skills</a>
          <a href="#Education" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Education</a>
          <a href="#InTouch" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Contact</a>
          <a href="#Blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Blog</a>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-2">
            <a href="#Home" onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600 px-3 py-2">Home</a>
            <a href="#AboutMe" onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600 px-3 py-2">About</a>
            <a href="#MySkill" onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600 px-3 py-2">Skills</a>
            <a href="#Education" onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600 px-3 py-2">Education</a>
            <a href="#InTouch" onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600 px-3 py-2">Contact</a>
            <a href="#Blog" onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600 px-3 py-2">Blog</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;