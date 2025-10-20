import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-2xl font-semibold text-white">Arrizal Alvin</h4>
          <p className="mt-2 text-sm text-gray-300">
            Front-end Developer • Graphic Designer • Photographer
          </p>

          <a
            href="/assets/Arrizal_Alvin_CV.pdf"
            download
            className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
          >
            Download CV
          </a>
        </div>

        <div>
          <h5 className="text-lg font-medium text-white">Quick Links</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#Home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#AboutMe" className="hover:text-blue-400">About Me</a></li>
            <li><a href="#MySkill" className="hover:text-blue-400">Skills</a></li>
            <li><a href="#Blog" className="hover:text-blue-400">Blog</a></li>
            <li><a href="#InTouch" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-medium text-white">Contact</h5>
          <ul className="mt-3 text-sm space-y-2 text-gray-300">
            <li>Phone: <a href="tel:+6282281167644" className="hover:text-blue-400">+62 822-8116-7644</a></li>
            <li>Email: <a href="mailto:arrizalalvin@gmail.com" className="hover:text-blue-400">arrizalalvin@gmail.com</a></li>
            <li>Instagram: <a href="https://instagram.com/arrizalalvin_fa" target="_blank" rel="noreferrer" className="hover:text-blue-400">@arrizalalvin_fa</a></li>
          </ul>

          <div className="mt-4 flex items-center space-x-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700" aria-label="GitHub">
              <svg className="w-5 h-5 text-gray-200" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.93 3.19 9.11 7.61 10.58.56.1.76-.24.76-.53 0-.26-.01-1-.02-1.96-3.09.67-3.74-1.49-3.74-1.49-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.67 2.54 1.19 3.16.91.1-.71.38-1.19.69-1.46-2.47-.28-5.07-1.24-5.07-5.52 0-1.22.44-2.22 1.17-3-.12-.28-.51-1.42.11-2.97 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 2.86-.38c.97.01 1.95.13 2.86.38 2.18-1.49 3.14-1.17 3.14-1.17.62 1.55.23 2.69.11 2.97.73.78 1.17 1.78 1.17 3 0 4.29-2.61 5.24-5.09 5.51.39.33.74.98.74 1.98 0 1.43-.01 2.58-.01 2.93 0 .29.19.64.77.53C20.06 20.86 23.25 16.68 23.25 11.75 23.25 5.48 18.27.5 12 .5z"/>
              </svg>
            </a>

            <a href="https://instagram.com/arrizalalvin_fa" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-pink-600 hover:opacity-90" aria-label="Instagram">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm10 2.5a1 1 0 1 1 .001 2.001A1 1 0 0 1 17 6.5zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
              </svg>
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-blue-700 hover:opacity-90" aria-label="LinkedIn">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.56V24H.22zM9 8h4.38v2.16h.06c.61-1.16 2.11-2.38 4.35-2.38C23 7.78 24 10.14 24 13.84V24h-4.63v-9.2c0-2.2-.04-5.03-3.07-5.03-3.07 0-3.54 2.4-3.54 4.88V24H9z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10">
        <div className="container mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <span>© {new Date().getFullYear()} Arrizal Alvin. All rights reserved.</span>
          <span className="mt-2 md:mt-0">Designed with Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;