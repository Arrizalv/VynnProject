import ProfilePic from "./assets/image.jpg"

function Card(){
    return(
      <>
      <div className="Card">
        <img src={ProfilePic} alt="Esport Team Logo" className="img-data" />
      <h2>VynnProjx</h2>
      <p>We Learn about Technologies</p>
      </div>
      </>
    );
}

export default Card

