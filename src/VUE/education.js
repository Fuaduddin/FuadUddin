// Education Snap Shoot
const Educationsnapshoot=Vue.createApp({
    data(){
        return{
            educationcapciltitle:"Education",
            educationshortdesc:"Here is a quick summary of my graduation:",
            Educationslist:[
                {nameinstitude:"East West University",eduction:"B.Sc. in Computer Science and Engineering (Software and Information Systems) ",passingyear:"2021",class:"containertimeline left",logo:"/src/Images/East-west-university-LogoSVG.svg.png",location:"Dhaka"},
                {nameinstitude:"Milestone College",eduction:"HSC (Science)",passingyear:"2015",class:"containertimeline right",logo:"/src/Images/logo12.png",location:"Dhaka"},
                {nameinstitude:"Milestone School",eduction:"SSC (Science)",passingyear:"2013",class:"containertimeline left",logo:"/src/Images/logo12.png",location:"Dhaka"},
            ]
        }
    }
});
// certificates
const Professonalcertificatesnapshoot=Vue.createApp({
    data(){
        return{
            Certificatestitle:"Professonal Certificates",
            Certificatesshortdesc:"Here is a quick summary of my Certificates:",
            Certificatesslist:[
                {nameinstitude:"University of MICHIGAN",eduction:"Introduction to Structured Query Language",location:"Coursera"},
                {nameinstitude:"University of MICHIGAN",eduction:"Building Web Applications in PHP",location:"Coursera"},
                {nameinstitude:"Johns Hopkins University",eduction:"HTML, CSS, and JavaScript for Web Developers",location:"Coursera"},

                {nameinstitude:"UCDAVIS UNIVERSITY OF CALIFORNI",eduction:"JavaScript Basic",location:"Coursera"},
                {nameinstitude:"THE HONG KONG UNIVERSITY OF SCIENCE AND TECHNOLOGY",eduction:"Front-End Web UI Frameworks and Tools: Bootstrap 4",location:"Coursera"},
                {nameinstitude:"Johns Hopkins University",eduction:"HTML, CSS, and JavaScript for Web Developers",location:"Coursera"},

                {nameinstitude:"University of MICHIGAN",eduction:"Introduction to Data Science in Python",location:"Coursera"},
                {nameinstitude:"IBM",eduction:"Data Analysis with python",location:"Coursera"},
                {nameinstitude:"IBM",eduction:"Databases and SQL for Data Science with Python",location:"Coursera"},
                {nameinstitude:"University of MICHIGAN",eduction:"Using Python Access Web Data",location:"Coursera"},
                {nameinstitude:"UCSan Diego HIGHER SCHOOL OF ECONOMICS NATIONAL REASEARCH UNIVERSITY",eduction:"Data Structures",location:"Coursera"},
                {nameinstitude:"Google Digital Garage",eduction:"Fundaments of Digital Marketing",location:"Google Digital Garage"}
            ]
        }
    }
});

//extracariculam
const extracariculam= Vue.createApp({
    data(){
        return{
            extracariculamtitle:"Extra-Curricular Activities",
            extracariculamshortdesc:"Here is a quick summary of my Extra-Curricular Activities:",
            extracariculamslist:[
                {title:"Memeber",icon:"fa fa-briefcase",itemlist:[
                    "EWU Robotics Club",
                    "EWU-YES/TIB",
                    "EWUPC"
                ]},
                {title:"Voluntier",icon:"fa fa-briefcase",itemlist:[
                    "EWU Robotics Club",
                    "EWU-YES/TIB",
                    "EWUPC"
                ]},
                {title:"Work Shop",icon:"fa fa-desktop",itemlist:[
                    "Python Programming and Participating on Python Programming Contest.-East West Robotics Club",
                    "Robotics for Beginners.-East West Robotics Club",
                    "Attended many seminars and Conference"
                ]},
                {title:"Problem Solving",icon:"fa fa-desktop",itemlist:[
                    "Hacker Rank",
                ]},
            ]
        }
    }
});
// All Mounted
Educationsnapshoot.mount('#educationsection');
Professonalcertificatesnapshoot.mount('#certicatessection');
extracariculam.mount('#Extracariculamsection');