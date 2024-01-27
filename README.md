### Hi, I'm Patsy
## Welcome to my Full-Stack Developer Portfolio!

This was a tough project, but I definitely had fun building it and I learned a lot about React. I hope you enjoy it! ✨

## Tech Stack I Used:
    - HTML 
    - CSS
    - JavaScript
    - React JS

## Imports I Used & Why:
   
I used this hook to manage the state and behavior of the navigation menu as well as set the state for the particles background.
   
    import React, { useState } from "react"; 
    
I added react-icons to display nice consistent icons throughout the application.

    import { FaBars, FaTimes } from "react-icons/fa";
    import { FaReact } from "react-icons/fa";
    import { DiRuby } from "react-icons/di";
    import { SiRubyonrails } from "react-icons/si";
    import { RiJavascriptFill } from "react-icons/ri";

I used the Link component from  the react-scroll library to enhance the user's experience with a smooth scroll on a single-page application.
    
    import { Link } from 'react-scroll';

I used a variety of reactstrap components to display my projects in nice cards
    
    import {
        Card,
        CardBody,
        CardTitle,
        CardSubtitle,
        CardText,
        CardLink,
        Container
    } from "reactstrap";
    
I used a combination of imports to build a customized component to display the react particles. 

    import { useEffect, useMemo, useState } from "react";
    import Particles, { initParticlesEngine } from "@tsparticles/react";
    import { loadSlim } from "@tsparticles/slim"; 
