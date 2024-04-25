import blackBear from "../assets/blackBear.jpg";
import './GalleryContent.css'

const imageLinks = [
  {
    img: blackBear,
    heading: "Professional Portfolios",
  },
  {
    img: blackBear,
    heading: "Social Events",
  },
  {
    img: blackBear,
    heading: "Weddings",
  },
];







export default function GalleryContent() {

    return(
        <ul>
            {imageLinks.map((imageLink,i)=>{
                return (
                  <li className="galleryImg" key={i}>
                    <img src={imageLink.img} alt="" />
                    <h3>{imageLink.heading}</h3>
                  </li>
                );
            })}
        </ul>
    )


}