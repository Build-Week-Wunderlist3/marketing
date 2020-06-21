import React from 'react';
import { device } from './device';
import styled from 'styled-components';

export default function About() {
    return (
        <AboutUs>
            <div className = "about" >
                <h1>About WunderList 3</h1>
                <p>Wunderlist 3 takes your traditional to-do list app and automates it. It not only allows you to write your to-do, work, grocery, trip and household lists, but allows you to set up recurring to do lists by date and time. (Think recurring events on google calendar + to-do list app).<br/>No matter how much is on your plate, Wunderlist 2.0 makes it super easy to remember all the little recurring to-dos and surprise to-dos that pop up unexpectedly.</p>
            </div>
        </AboutUs>
    );
}
const AboutUs = styled.div `

    .about {
        font-size: 7rem;
        font-family: 'Balsamiq Sans', cursive;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 2%;

        @media ${device.tablet} {
            font-size: 4rem;
        }
        @media ${device.mobileL} {
            font-size: 2.4rem;
        }
        h1 {
            margin-bottom: 2%;
            color: #234099;
        }
        p {
            font-size: 2rem;
            @media ${device.mobileL} {
                font-size: 1.6rem;
            }
        }
    }
    
`