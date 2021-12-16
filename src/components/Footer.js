import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube,faTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (

    <>
      <footer>

      <div className="flex justify-center items-center h-50
    bg-black text-white">

      <div className="container">
       
       <div class="mx-16">
      <div class="my-8">
                <p className="main-hero-para text-left text-md font-bold w-100">
                  collab.
                </p>
                </div>
                <div class="mb-2">
                <div class="my-2">
                <p className="main-hero-para text-left text-md font-bold w-100">
                  Project inquiries
                </p>
                </div>

                <div class="mx-2 my-2">
        <button class="ring-1 ring-gray-600 bg-gray-400 
                       w-16 h-8 rounded-lg">
            Phone
        </button>
    </div>
    </div>
          <div className="text-right"><a href="/about/">About</a>&nbsp;&nbsp;<a href="/services/">Services</a>&nbsp;&nbsp;<a href="/case study/">Case Study</a>&nbsp;&nbsp;<a href="/team/">Team</a>&nbsp;&nbsp;<a href="/help/">Help</a></div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-left w-100">
                  © 2021 collab. All rights reserved
                </p>
                </div>
                <div className="flex flex-col items-end min-h-10 py-2">
                
                <div className="flex text-l">
                     
                     <FontAwesomeIcon 
                     icon={faInstagram}
                     className="hover:text-black-500"></FontAwesomeIcon>

                      <FontAwesomeIcon 
                     icon={faTwitter}
                     className="hover:text-blue-500"></FontAwesomeIcon>
                     
                     <FontAwesomeIcon 
                     icon={faYoutube}
                     className="hover:text-red-500"></FontAwesomeIcon> 
                </div>  
                
                </div>
              </div>
            </div> 
            </div> 
      </footer>
    </>
  );
};

export default Footer;