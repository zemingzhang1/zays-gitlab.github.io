import React from 'react';

export default function About(props) {

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

        var resumeDownload = props.data.resumedownload;
    }

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={profilepic} alt="Hermione Granger Profile Picture" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>

                    <p>{bio}</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{name}</span><br/>
                                <span>{street}<br/>
                                  {city} {state}
                                </span><br/>                               
                                <span><a href="tel:347-322-5173">{phone}</a></span><br/>
                                <span><a href="mailto:zemingzhang1@gmail.com">{emailP}</a></span><br/>
                                <span><a href="mailto:work@zemingzhang-zay.com">{emailW}</a></span><br/>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                
                                <button class="noselect green">
                                  <a href={resumeDownload}><i className="fa fa-download"></i> Download Resume</a>
                                </button>
                                <button class="noselect red">
                                  <a href={resumeDownload}><i className="fa fa-download"></i> Download Cover Letter</a>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

