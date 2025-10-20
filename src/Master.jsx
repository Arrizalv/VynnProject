import ProfilePic from "./assets/WhatsApp Image 2025-10-13 at 23.02.55.jpeg"

function Master() {
  return (
    <>
      <article id="Home" className="bg-white py-12">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-8">
          <img
            src={ProfilePic}
            alt="Personal Picture"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover shadow-lg"
          />
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Hi, I'm Arrizal Alvin a.k.a Front-end Developer
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              An active student at a relatively new campus in the Special Region of
              Yogyakarta, with interests in graphic design, photography, and 3D modeling.
            </p>
            <a
              href="#AboutMe"
              className="inline-block mt-5 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              More About Me
            </a>
          </div>
        </div>
      </article>

      <article id="AboutMe" className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-2xl font-bold text-gray-900">About Me</h1>
          <h3 className="mt-4 text-lg font-medium text-gray-700">Personal Info</h3>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-1 text-gray-700">
              <li><span className="font-medium">First Name:</span> Arrizal</li>
              <li><span className="font-medium">Age:</span> 20</li>
              <li><span className="font-medium">Freelance:</span> Available</li>
              <li><span className="font-medium">Phone:</span> +6282281167644</li>
              <li><span className="font-medium">Instagram:</span> @arrizalalvin_fa</li>
            </ul>

            <ul className="space-y-1 text-gray-700">
              <li><span className="font-medium">Last Name:</span> Fathurrohman</li>
              <li><span className="font-medium">Nationality:</span> Indonesian</li>
              <li><span className="font-medium">Address:</span> Indonesia</li>
              <li><span className="font-medium">Email:</span> arrizalalvin@gmail.com</li>
              <li><span className="font-medium">Language:</span> Indonesian, English</li>
            </ul>
          </div>

          <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <ul className="space-y-2 text-gray-700">
                <li className="font-semibold">1+ Years of Experience</li>
                <li className="font-semibold">23+ Happy Customers</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <ul className="space-y-2 text-gray-700">
                <li className="font-semibold">7+ Completed Projects</li>
                <li className="font-semibold">3+ Awards Won</li>
              </ul>
            </div>
          </section>
        </div>
      </article>

      <article id="MySkill" className="bg-white py-12">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-2xl font-bold text-gray-900">My Skills</h1>

          <div id="Skill" className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <h5 className="text-sm font-medium text-gray-700">HTML</h5>
                  <span className="text-sm text-gray-600">30%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{ width: '30%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <h5 className="text-sm font-medium text-gray-700">CSS</h5>
                  <span className="text-sm text-gray-600">10%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{ width: '10%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <h5 className="text-sm font-medium text-gray-700">Javascript</h5>
                  <span className="text-sm text-gray-600">5%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-600 h-3 rounded-full" style={{ width: '5%' }} />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <h5 className="text-sm font-medium text-gray-700">Python</h5>
                  <span className="text-sm text-gray-600">40%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{ width: '40%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <h5 className="text-sm font-medium text-gray-700">Photoshop</h5>
                  <span className="text-sm text-gray-600">40%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-indigo-500 h-3 rounded-full" style={{ width: '40%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <h5 className="text-sm font-medium text-gray-700">Canva</h5>
                  <span className="text-sm text-gray-600">35%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-pink-500 h-3 rounded-full" style={{ width: '35%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
export default Master