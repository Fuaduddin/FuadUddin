// Education Snap Shoot
const Educationsnapshoot=Vue.createApp({
    data(){
        return{
            educationcapciltitle:"Education",
            educationshortdesc:"Here is a quick summary of my graduation:",
            Educationslist:[
                {nameinstitude:"East West University",eduction:"B.Sc. in Computer Science and Engineering (Software and Information Systems) ",passingyear:"2021",class:"containertimeline left",logo:"src/Images/East-west-university-LogoSVG.svg.png",location:"Dhaka"},
                {nameinstitude:"Milestone College",eduction:"HSC (Science)",passingyear:"2015",class:"containertimeline right",logo:"src/Images/logo12.png",location:"Dhaka"},
                {nameinstitude:"Milestone School",eduction:"SSC (Science)",passingyear:"2013",class:"containertimeline left",logo:"src/Images/logo12.png",location:"Dhaka"},
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
                {nameinstitude:"IBM",eduction:"Data Visualization with python",location:"Coursera"},

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



// All Certificates Image SLider
const ImageGallery= Vue.createApp({
    data(){
        return{
            ImageGalleryList:[
                {src:"src/Images/ProfessonalCertificates/DataStrucher.jpg"},
                {src:"src/Images/ProfessonalCertificates/HTML, CSS, and JavaScript for Web Developers.png"},
                {src:"src/Images/ProfessonalCertificates/jsbasic.png"},
                {src:"src/Images/ProfessonalCertificates/buildingphp.png"},
                {src:"src/Images/ProfessonalCertificates/dataanalysis.png"},
                {src:"src/Images/ProfessonalCertificates/datavisulization.png"},
                {src:"src/Images/ProfessonalCertificates/dbandsqlpython.png"},
                {src:"src/Images/ProfessonalCertificates/dm.png"},
                {src:"src/Images/ProfessonalCertificates/boothstrap.png"},
                {src:"src/Images/ProfessonalCertificates/datascience.png"},
                {src:"src/Images/ProfessonalCertificates/sql.png"},
                {src:"src/Images/ProfessonalCertificates/pythonwebacess.png"},
            ],
            currentSlide: 0,
            isModalOpen: false,
            modalImage: ''
        }
    },
    methods: {
        showSlide(index) {
            const totalSlides = this.ImageGalleryList.length; // Get total number of slides
            if (index >= totalSlides) {
                this.currentSlide = 0; // Wrap around to the first slide
            } else if (index < 0) {
                this.currentSlide = totalSlides - 1; // Wrap around to the last slide
            } else {
                this.currentSlide = index; // Set current slide
            }

            // Calculate offset based on the number of visible slides
            const slidesToShow = window.innerWidth <= 768 ? 1 : 2; // Adjust number of slides shown based on viewport width
            const offset = -this.currentSlide * (100 / slidesToShow); // Calculate offset for translation
            document.querySelector(".slides").style.transform = `translateX(${offset}%)`; // Move slides
        },
        nextSlide() {
            this.showSlide(this.currentSlide + 1); // Move to next slide
        },
        prevSlide() {
            this.showSlide(this.currentSlide - 1); // Move to previous slide
        },
        // openModal(imageSrc) {
        //     debugger
        //     const img = document.querySelector('.showimage'); // If using a class
        //    img.src = imageSrc;
        //     //this.modalImage = imageSrc; // Set the image source for the modal
        //     $('#thumbnails').css('display', 'block');
        //     //$('#showimage').src=imageSrc;
        //    //$("")
        //    // this.isModalOpen = true; // Open the modal
        // },
        // closeModal() {
        //     $('#thumbnails').css('display', 'none');
        //     //this.isModalOpen = false; // Close the modal
        // },
        // selectImage(index) {
        //     this.showSlide(index); // Show the selected image in the slider
        // }
    },
    mounted() {
        this.showSlide(this.currentSlide); // Show the initial slide
    }
});
// All Mounted
Educationsnapshoot.mount('#educationsection');
Professonalcertificatesnapshoot.mount('#certicatessection');
extracariculam.mount('#Extracariculamsection');
ImageGallery.mount('#imagegallerycontainer');