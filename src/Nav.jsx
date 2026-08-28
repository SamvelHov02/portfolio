import { useState } from 'react'
import githubLogo from './assets/github.svg'
import linkedinLogo from './assets/linkedin.svg'
import './Nav.css';

function Nav({ links }) {
    const [topic, setTopic] = useState('about');


    return (
        <>
            <div id='navigation'>
                <div className='wrapper'>
                    <div className='titles'>
                        <p id='name'>Samvel Hovhannisyan</p>
                        <p id='proffesion'>Software Engineer : Student at KTH</p>
                    </div>

                    <ul className='nav-contents'>
                        <li id='about'>About</li>
                        <li id='Projects'>Projects</li>
                        <li id='Skills'>Skills</li>
                    </ul>
                </div>
            
                <div id='links'>
                    <a className='link-media' id='github-link' href={links["github"]}>
                        <img src={githubLogo}/>
                    </a>

                    <a className='link-media' id='linkedin-link' href={links["linkedin"]}>
                        <img src={linkedinLogo}/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Nav;
