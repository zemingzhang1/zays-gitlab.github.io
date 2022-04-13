import React from 'react';
import Collapsible from 'react-collapsible';
// Original JavaScript code by Chirp Internet: chirpinternet.eu
// Please acknowledge use of this code by including this header.

export default function About(props) {
    const getContainerHeight = el => {
        return window.getComputedStyle(el).getPropertyValue("height");
    };
    
    if (props.data) {
        var name = props.data.name;
        var profilepic = 'images/' + props.data.image;
        var bio = props.data.bio;
        var street = props.data.address.street;
        var city = props.data.address.city;
        var state = props.data.address.state;
        var phone = props.data.phone;
        var emailW = props.data.emailWork;
        var emailP = props.data.emailPersonal;
        var bio2 = props.data.bio2;
        var git1 = props.data.git1;
        var git2 = props.data.git2;
        var resumeDownload = props.data.resumedownload;
    };
    
    return (
        <section id="about">
            <div id = "abtInnerWrapper">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={profilepic} alt="Hermione Granger Profile Picture" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <Collapsible trigger={bio2}>
                        <p>{bio}</p>
                    </Collapsible>
                    <hr/>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{name}</span><br/>
                                <span>{street}<br/>
                                  {city} {state}
                                </span>
                                <hr/>
                                <span><a href="tel:347-322-5173">{phone} <i className="fa fa-phone fa-lg"></i></a></span><br/>
                                <span><a href="mailto:zemingzhang1@gmail.com">{emailP} <i className="fa fa-envelope fa-lg"></i></a></span><br/>
                                <span><a href="mailto:work@zemingzhang.com">{emailW} <i className="fa fa-envelope fa-lg"></i></a></span><br/>
                                <span><a href="https://github.com/zemingzhang1">{git1} <i className="fa fa-github fa-lg"></i></a></span><br/>
                                <span><a href="https://github.com/Zays-GitLab">{git2} <i className="fa fa-github fa-lg"></i></a></span><br/>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                
                                <button class="noselect red">
                                  <a href={resumeDownload}><i className="fa fa-download fa-lg"></i> Download Resume</a>
                                </button>
                                <button class="noselect red">
                                  <a href={resumeDownload}><i className="fa fa-download fa-lg"></i> Download Cover Letter</a>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}

