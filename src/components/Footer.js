import React, { Component } from 'react';
import FaTwitter from 'react-icons/fa';
import FaFacebook from 'react-icons/fa';
import FaGooglePlus from 'react-icons/fa';
import FaEnvelope from 'react-icons/fa';
import FaPinterest from 'react-icons/fa';
import FaLinkedin from 'react-icons/fa';
// import { ShareButtonRectangle, ShareBlockStandard } from 'react-custom-share';
export default function Footer(props) {

    if (props.data) {
        var networks = props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
        })
    }

    return (
        <footer>

            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        {networks}
                    </ul>

                    <ul className="copyright">
                        <li>&copy; Copyright 2020 Mírian Silva</li>
                        <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                    </ul>

                </div>
                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
            </div>
        </footer>
    );
}


// // import react-custom-share components
// import { ShareButtonRectangle, ShareBlockStandard } from 'react-custom-share';

// export default function Footer(props) {

//     if (props.data) {
//         var networks = props.data.social.map(function (network) {
//             return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
//         })
//     }

//     // const ShareComponent = props => {
//     //     // create object with props for shareBlock
//     //     const shareBlockProps = {
//     //       url: 'https://mywebsite.com/page-to-share/',
//     //       button: ShareButtonRectangle,
//     //       buttons: [
//     //         { network: 'Twitter', icon: FaTwitter },
//     //         { network: 'Facebook', icon: FaFacebook },
//     //         { network: 'GooglePlus', icon: FaGooglePlus },
//     //         { network: 'Email', icon: FaEnvelope},
//     //         { network: 'Pinterest', icon: FaPinterest, media: 'https://mywebsite.com/image-to-share.jpg' },
//     //         { network: 'Linkedin', icon: FaLinkedin },
//     //       ],
//     //       text: `Give it a try - mywebsite.com `,
//     //       longtext: `Take a look at this super website I have just found.`,
//     //     };
//     // };
    
//     return (
//         <footer>

//             <div className="row">
//                 <div className="twelve columns">
//                     <ul className="social-links">
//                         {networks}
//                     </ul>
//                     <ul className="copyright">
//                         <li>&copy; Copyright 2020 ZeMing Zhang</li>
//                         <li>Design by <a title="W3Schools" href="http://www.styleshout.com/">W3Schools,</a> <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a> <a title="GeekforGeeks" href="http://www.styleshout.com/">and GeekforGeeks</a></li>
//                     </ul>

//                 </div>
//                 <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
//             </div>
//         </footer>
//     );
// }

