
function Master() {
    return(
           <>
           <article id="Home">
            <div class="SubHead1">
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
                <li>12+ Years of Experience</li>
                <li>97+ Happy Customers</li>
                </ul>
                <ul class="info2">
                <li>23+ Completed Projects</li>
                <li>31+ Awards Won</li>
                </ul>
                
            </section>
            <div class="CV">
            <button>Download CV</button>
            </div>
        </article>
            <h1>My Skills</h1>
        <article class='Skill'>
            <div id='ProgressBar'>
            <h5>30% HTML</h5>
            <progress id='data' value='30' max='100'></progress>
            <h5>10% CSS</h5>
            <progress id='data' value='10' max='100'></progress>
            <h5>5% Javascript</h5>
            <progress id='data' value='5' max='100'></progress>
            </div>
            <div id='ProgressBar'>
            <h5>40% Python</h5>
            <progress id='data' value='40' max='100'></progress>
            <h5>40% Photoshop</h5>
            <progress id='data' value='40' max='100'></progress>
            <h5>35% Canva</h5>
            <progress id='data' value='35' max='100'></progress>
            </div>
        </article>
        </>
    );
        }
export default Master