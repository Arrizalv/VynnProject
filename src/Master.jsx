import ProfilePic from "./assets/WhatsApp Image 2025-10-13 at 23.02.55.jpeg"

function Master() {
    return(
           <>
           <article id="Home">
            <div class="SubHead1">
                <img src={ProfilePic} alt="Personal Picture" class="pers-img" />
                <h2>
                    Hi, I'm Arrizal Alvin a.k.a Front-end Developer
                </h2>
                <p>
                    An active student at a relatively new campus in the Special Region of Yogyakarta, with interests in graphic design, photography, and 3D modeling.
                </p>
            </div>
            <a>More About Me</a>   
        </article>
        <article id="AboutMe">
            <h1>About Me</h1>
            <h3>Personal Info</h3>
            <ul class="info">
                <li>First Name: Arrizal</li>
                <li>Age: 20</li>
                <li>Freelance: Available</li>
                <li>Phone: +6282281167644</li>
                <li>Instagram: @arrizalalvin_fa</li>
            </ul>
            <ul class="info">
                <li>Last Name: Fathurrohman</li>
                <li>Nationallity: Indonesian</li>
                <li>Address: Indonesia</li>
                <li>Email: arrizalalvin@gmail.com</li>
                <li>Language: Indonesian, English</li>
            </ul>
            <section>
                <ul class="info2">
                <li>1+ Years of Experience</li>
                <li>23+ Happy Customers</li>
                </ul>
                <ul class="info2">
                <li>7+ Completed Projects</li>
                <li>3+ Awards Won</li>
                </ul>
            </section>
            <div class="CV">
            <button>Download CV</button>
            </div>
        </article>
        <article id="Edu-Back">
            <h1>Educational Background</h1>
            <h2>2017-2023</h2>
            <h3>Pondok Modern Darussalam Gontor</h3>
            <p>Menjadi seorang Sekretaris Bagian Fotografi dan Mendapatkan Nilai Akhir 8,6 dengan predikat Mumtaaz</p>
            <h2>2023-2024</h2>
            <h3>Pondok Modern Darussalam Gontor Kampus 10 Jambi</h3>
            <p>Menjadi Seorang guru pengabdian yang aktif di bidang Kesekretariatan dan Penerimaan Tamu</p>
            <h2>2024-Now</h2>
            <h3>Universitas Nahdlatul Ulama Yogyakarta</h3>
            <p>Menjadi seorang mahasiswa Jurusan Teknik Informatika dan telah meraih IPK 3,83 di Semester 1 dan 2 </p>
        </article>
        <article id="MySkill">
            <h1>My Skills</h1>
            <div id='Skill'>
            <div class='ProgressBar'>
            <h5>30% HTML</h5>
            <progress id='data' value='30' max='100'></progress>
            <h5>10% CSS</h5>
            <progress id='data' value='10' max='100'></progress>
            <h5>5% Javascript</h5>
            <progress id='data' value='5' max='100'></progress>
            </div>
            <div class='ProgressBar'>
            <h5>40% Python</h5>
            <progress id='data' value='40' max='100'></progress>
            <h5>40% Photoshop</h5>
            <progress id='data' value='40' max='100'></progress>
            <h5>35% Canva</h5>
            <progress id='data' value='35' max='100'></progress>
            </div>
            </div>
        </article>
        
        </>
    );
        }
export default Master