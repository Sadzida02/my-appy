import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faEarthEurope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const logo = new URL("../images/logow.png", import.meta.url)


export default function Footer() {
    return(
        <div className="flex justify-around text-white w-full h-[190px] p-7 bg-myBrown text-sm px-40 items-center">
            <div className="flex flex-col">
                <span className="font-koulen p-1">Follow us</span>
                <span className="p-1"><FontAwesomeIcon icon={faInstagram} className="inline w-4 p-0.5"/>&nbsp;mymini.corner</span>
                <span className="p-1"><FontAwesomeIcon icon={faFacebook} className="inline w-4"></FontAwesomeIcon>&nbsp;mymini.corner</span>
                <span className="p-1"><FontAwesomeIcon icon={faEnvelope} className="inline w-4"/>&nbsp;mymini.corner@gmail.com</span>
                

            </div>
            <div>
                <img src={logo} alt="logo" className="w-[150px] filter"/>
            </div>

            <div className="flex flex-col">
                <span className="font-koulen p-1">Contact us</span>
                <span className="p-1"><FontAwesomeIcon icon={faLocationDot} className="inline"></FontAwesomeIcon>&nbsp;Kakanj</span>
                <span className="p-1"><FontAwesomeIcon icon={faLocationDot} className="inline"></FontAwesomeIcon>&nbsp;Sarajevo</span>
                <span className="p-1"><FontAwesomeIcon icon={faEarthEurope} className="inline"></FontAwesomeIcon>&nbsp;Bosnia and Herzegowina</span>
                <span className="p-1"><FontAwesomeIcon icon={faPhone} className="inline w-4"></FontAwesomeIcon>&nbsp;+387 236 183</span>
            </div>
            
        </div>
    )
}