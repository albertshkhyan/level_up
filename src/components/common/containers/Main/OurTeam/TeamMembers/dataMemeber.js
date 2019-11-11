import React, { Component } from 'react';


import facebookSvg from '../../../../../../assets/svg/facebook.svg';
import instagram from '../../../../../../assets/svg/instagram.svg';
import linkedin from '../../../../../../assets/svg/linkedin.svg';

import img1 from '../../../../../../assets/cool_guys/01.jpeg';
import img2 from '../../../../../../assets/cool_guys/02.jpg';
import img3 from '../../../../../../assets/cool_guys/03.jpg';
import img4 from '../../../../../../assets/cool_guys/04.jpg';
import img5 from '../../../../../../assets/cool_guys/05.jpg';
import img6 from '../../../../../../assets/cool_guys/06.png';
import img7 from '../../../../../../assets/cool_guys/07.JPG';
import img8 from '../../../../../../assets/cool_guys/08.jpg';
import img9 from '../../../../../../assets/cool_guys/09.jpg';
import img10 from '../../../../../../assets/cool_guys/10.jpg';

// console.log(
//     img1,
//     img2,
//     img3,
//     img4,
//     img5,
//     img6,
//     img7,
//     img8,
//     img9,
//     img1
//     );

export let dataOfMembers = [
    {
      id: 0,
      image_addres: img1,
      name: "Levon Azizyan",
      post: "CEO",
      about_work: "Software Engineer at EPAM Systems",
      goCocial : [
        {addresSoc: "https://www.facebook.com/yan.levon", 
        iconSoc : facebookSvg},
        {addresSoc: "https://www.linkedin.com/in/levon-azizyan-a5391a90/",
         iconSoc : linkedin},
        {addresSoc: "https://www.instagram.com/levonazizyan5/",
        iconSoc : instagram},

      ],
      

    },
  
    {
      id: 1,
      image_addres : img2,
      name: "Armen Zakaryan",
      post: "System Administrator",
      about_work: "IT Support specialist at Betconstruct",
      goCocial : [
          
            {addresSoc: "https://www.facebook.com/armen.zaqaryan.92",
            iconSoc : facebookSvg
            },
            {addresSoc: "https://www.linkedin.com/in/armen-zakaryan-72302a134/",
            iconSoc : linkedin
            },
            {addresSoc: "https://www.instagram.com/armen.zakaryan96/",
            iconSoc : instagram
            },

          
      ],

    },
  
    {
      id: 2,
      image_addres:img3,
      name: "Karen Mkhitaryan",
      post: "Java & Automation Testing Mentor",
      about_work: "Software Test Automation Engineer at EPAM Systems",
      goCocial : [
          {addresSoc: "",
          iconSoc : ''
          },
          {addresSoc: "https://www.linkedin.com/in/karen-mkhiataryan-b19386113/",
          iconSoc : linkedin
          },
          {addresSoc: "https://www.instagram.com/karen11mkhitaryan/",
          iconSoc : instagram
          },
      ],

    },
  
    {
      id: 3,
      image_addres:img4,
      name: "Levon Aloyan",
      about_work: "Software Engineer at EPAM Systems",
      post: "Java Mentor",
      goCocial : [
        {addresSoc: "",
        iconSoc : ''
        },
        {addresSoc: "https://www.linkedin.com/in/karen-mkhiataryan-b19386113/",
        iconSoc : linkedin
        },
        {addresSoc: "https://www.instagram.com/karen11mkhitaryan/",
        iconSoc : instagram
        },
    ],
    },
  
    {
      id: 4,
      image_addres:img5,
      name: "Karen Sargsyan",
      about_work: "Js Mentor at Level Up IT Center",
      post: "JS Mentor",
        goCocial : [
            {addresSoc: "https://www.facebook.com/karen9618",
            iconSoc : facebookSvg
            },
            {addresSoc: "https://www.instagram.com/karen.__.sargsyan/",
            iconSoc : instagram
            },
            {addresSoc: "",
            iconSoc : ''
            }
        ],



    },
  
    {
      id: 5,
      image_addres:img6,
      name: "Ruben Aprikyan",
      post: "NodeJS Mentor",
      about_work: "Software Engineer at Brainstorm Technologies",
        goCocial  : [
            {addresSoc: "https://www.facebook.com/rubenaprikyan8.01",
            iconSoc : facebookSvg
            },
            {addresSoc: "",
            iconSoc : ""
            },
            {addresSoc: "",
            iconSoc : ""
            }
        ],
    },
  
    {
      id: 6,
      image_addres:img7,
      about_work: "Lead Software Test Automation Engineer at EPAM Systems",
      name: "Sona Gamaryan",
      post: "Manual Testing Mentor",
        goCocial : [
            {addresSoc: "https://web.facebook.com/sona.gamaryan",
            iconSoc : facebookSvg
            },
            {addresSoc: "https://www.instagram.com/sonagamm/",
            iconSoc : linkedin
            },
            {addresSoc: "https://www.linkedin.com/in/sona-gamaryan-a8507214/",
            iconSoc : instagram
            }
        ],
    },
  
    {
      id: 7,
      image_addres:img8,
      about_work: "Senior Software Testing Engineer at EPAM Systems",
      name: "Astghik Sanasaryan",
      post: "Manual Testing Mentor",
        goCocial : [
            {addresSoc: "https://web.facebook.com/astghik.sanasaryan",
            iconSoc :   facebookSvg
            },
            {addresSoc: "https://www.instagram.com/astghik_s/",
            iconSoc : linkedin  
            },
            {addresSoc: "https://www.linkedin.com/in/astghiks/",
            iconSoc : instagram  
            }
        ],

    },
  
    {
      id: 8,
      image_addres:img9,
      about_work: "Js Mentor at Level Up IT Center",
      name: "Mickael Gevorgyan",
      post: "JS Mentor",
        goCocial : [
            {addresSoc: "https://www.fc.com/profile.php?id=100004466496347",
            iconSoc : facebookSvg
            },
            {addresSoc: "https://www.instagram.com/michaelgevorgyan/",
            iconSoc :  instagram
            },
            {addresSoc: "",
            iconSoc : ""
            }
        ],

    },
  
    {
      id: 9,
      image_addres:img10,
      about_work: "Software Engineer at EPAM Systems",
      name: "Arsen Admayan",
      post: "JS Mentor",
      goCocial : [
        {addresSoc: "https://www.fc.com/arsen.adamyan.35",
        iconSoc : facebookSvg
        },
        {addresSoc: "https://www.instagram.com/arsenadamyan2494/",
        iconSoc : linkedin
        },
        {addresSoc: "https://www.linkedin.com/in/arsen-adamyan-81b621135/",
        iconSoc : instagram
        }
      ],



    }
  ];
