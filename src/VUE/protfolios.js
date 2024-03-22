const Protfolioswork=Vue.createApp({
    data(){
        return{
            protfolioscapciltitle:"Protfolios",
            protfolioscategory:[
                {id:0,categoryname:"All"},
                {id:1,categoryname:"Front-End"},
                {id:2,categoryname:"Vue JS"},
                {id:3,categoryname:"Sitecore(CMS)"},
                {id:4,categoryname:"Python"},
                {id:5,categoryname:"ASP.NET"},
                {id:6,categoryname:"PHP"},
            ],
            ProtfoliosLIst:[
              {
                Image:"src/Images/Protfolios/commerce.jpg",
              Title:"E-Commerce",
              link:"https://github.com/Fuaduddin/E-Commerce",
              Details:"The project was design using 3-layer Architecture. There are 5 user groups which are Super Admin, Admin, Customer, Delivery Man, and Supplier. Only those who have registered can enter the system. They all can login to their Dashboards according to their role. Customer can order their product and they also can view their order details and track them. Admin and supper admin can assign delivery details to the delivery man and needed product details to the supplier. Delivery man and Suppliers can view their assignment list. Super Admin can add or remove products, calculate orders, products, and admin according to the system need.",
              Technology:[
                "ASP.NET (Stored Procedure)","HTML","CSS","Bootstrap 5","JavaScript","C#",
                "Ajax","jQuery","SQL"
              ],
              DB:"SQL Server",
              category:5
              },
              {
                Image:"src/Images/Protfolios/voting.jpg",
                Title:"E-Voting System",
                link:"https://github.com/Fuaduddin/E-votingSytem",
                Details:"There are 4 user groups which are Super Admin, Admin, Voter and Candidate. Only those whom have been registered  or added by Super Admin or Admin can login to the system. They all need to have NID card to register. Voter to see all the election result and all the candidates. They can vote their favorite candidate by this system. Voter can vote once in the system. Candidate can view all the election result and his or her election result. Admin can add candidate, vote, Election. Super Admin can add or remove election, calculation of election, voter, candidate and admin according to the election need. Admin and Super Ad- min also can give votes. The system has been designed and implemented in way to include finger print voting system can be enabled anytime.",
                Technology:[
                  "ASP.NET (Entity Framework)","HTML","CSS","Bootstrap 5","JavaScript","C#",
                  "Ajax","jQuery","SQL","Restful API"
                ],
                DB:"SQL Server",
                category:5
                },
                {
                    Image:"src/Images/Protfolios/event.jpg",
                    Title:"Event Talk",
                    link:"https://github.com/Fuaduddin/EventTalk",
                    Details:"The project was design using 3-layer Architecture. There are 5 user groups which are Super Admin, Admin, Customer, Blogger and Speaker. Only those who have registered can enter the system. They all can login to their Dashboards according to their role. Customer can buy ticket for any event and they also can view their reservation details and see blogs and give a feedback. Blogger can add new post and they also can see the customer review. Speaker can see their event details and their previous event list. Admin and supper admin can add new event and assign speakers, also can see blogs feedback. Super Admin can add or remove blogger, speaker, blog, and admin according to the system need.",
                    Technology:[
                      "ASP.NET Core (Entity Framework)","HTML","CSS","Bootstrap 5","JavaScript","C#",
                      "Ajax","jQuery","SQL"
                    ],
                    DB:"SQL Server",
                    category:5
                },
                {
                    Image:"src/Images/Protfolios/crm.jpeg",
                    Title:"Customer Relationship Management (CRM)",
                    link:"https://github.com/Fuaduddin/CustomerResourceManagement-CRM-",
                    Details:"The project was design using 2-layer Architecture. There are 4 user groups which are customer, admin, super admin and staff. They all need to register and activate their accounts through mail which will be sent from the application. Customer will need to login into the system to see product, and details about the appointment with the staff or cancel an appointment. The system will also send a mail before their appointment to both the customer and the as- signed staff. Staff can see their next assignment details and announcements and appointments details which is provided by the super admin or admin. Here admin and super admin can add or update or remove customer, product, and staff according to the business need.",
                    Technology:[
                      "PHP","HTML","CSS","Bootstrap 5","JavaScript",
                      "Ajax","jQuery","SQL"
                    ],
                    DB:"MySQL",
                    category:6
                },
                {
                    Image:"src/Images/Protfolios/hrm.jpg",
                    Title:"Human Resources Management (HRM)",
                    link:"https://github.com/Fuaduddin/HRM.git",
                    Details:"The project was design using 2-layer Architecture. There are 3 user groups which are Staff, Super Visor and Super Admin. Staff will need to login into the system to see leave types that company offers, holiday list and details about the leave. They can apply or cancel a leave. Super Visor can see the staff details under them and application for leave. Hey also can approve or cancel the leave request. They can also view all the holidays and leave types. Here super admin can add or update or remove staff, supervisor, leave types, job title and lots more according to the business need.",
                    Technology:[
                      "PHP","HTML","CSS","Bootstrap 5","JavaScript",
                      "Ajax","jQuery","SQL"
                    ],
                    DB:"MySQL",
                    category:6
                },
                {
                    Image:"src/Images/Protfolios/todo.png",
                    Title:"To do App",
                    link:"https://github.com/Fuaduddin/TodoAPP",
                    Details:"Developed in HTML, CSS, Bootstrap, JavaScript, ASP.Net MVC (Entity Framework), Restful API and SQL. Includes adding new task and task management. User can also delete and update any task. User can also search or filters tasks.",
                    Technology:[
                      "ASP.Net MVC (Entity Framework)","HTML","CSS","Bootstrap 5","JavaScript",
                      "Ajax","jQuery","SQL","Restful API"
                    ],
                    DB:"SQL Server",
                    category:5
                },
                {
                    Image:"src/Images/Protfolios/hotel.jpg",
                    Title:"Hotel and Restaurant Management System",
                    link:"https://github.com/Fuaduddin/HotelandResturantManagementSystem",
                    Details:" Includes online booking and restaurant management. In house services are also offered through online access for customers and internal staffs.",
                    Technology:[
                      "PHP","HTML","CSS","Bootstrap 5","JavaScript",
                      "Ajax","jQuery","SQL"
                    ],
                    DB:"MySQL",
                    category:6
                },
                {
                    Image:"src/Images/Protfolios/hotel.jpg",
                    Title:"Food & Restaurant",
                    link:"https://github.com/Fuaduddin/food-resturant",
                    Details:" In this project it's shows the profile of a restaurant. Here we can see their products, their reviews and their socials media address. It’s a basic HTML, CSS, Bootstrap and JavaScript front-end design.",
                    Technology:[
                     "HTML","CSS","Bootstrap 5","JavaScript","jQuery"
                    ],
                    DB:"",
                    category:1
                },
                {
                    Image:"src/Images/Protfolios/password.jpeg",
                    Title:"Password Management System",
                    link:"https://github.com/Fuaduddin/passwordmanager",
                    Details:"It was developed by python. User can save their password in the system. User can delete or modify their password. Here the user can also search their password. A user needs to have a master password to get into the system. A user can also add a new master password.",
                    Technology:[
                     "Python"
                    ],
                    DB:"",
                    category:4
                },
                {
                    Image:"src/Images/Protfolios/ml.jpg",
                    Title:"A Relative Study of Supervised Machine Learning Classifiers for Detecting the Anomaly Traffic",
                    link:"https://github.com/Fuaduddin/NIDS",
                    Details:"The article  presents the latest work on network peculiarity recognition utilizing machine learning strategies for better agreement to pick proper technique while carrying out NIDS through far reaching writing investigation. The empirical  results assign that the exactness, false caution rate, and practicality of the  great deal of examination is being done the improvement of compelling NIDS.",
                    Technology:[
                     "Python"
                    ],
                    DB:"",
                    category:4
                },
                {
                    Image:"src/Images/Protfolios/ml.jpg",
                    Title:"Lung Cancer Detection Using Machine Learning Algorithms",
                    link:"https://github.com/Fuaduddin/LungCancerDetectionUsingMachineLearningAlgorithm",
                    Details:"Developed in Python and a dataset from Kaggle was used. I also have used basic data analysis in this project. The data set contains different risk factors like fbs, chol, oldpeak and many more. I used supervised machine learning Algorithms (Naïve Bayes,Decision tree and Random Forest Tree) to predict whether a patient has heart disease or not.",
                    Technology:[
                     "Python"
                    ],
                    DB:"",
                    category:4
                },
                {
                    Image:"src/Images/Protfolios/event.jpg",
                    Title:"Event Talk",
                    link:"https://github.com/Fuaduddin/LungCancerDetectionUsingMachineLearningAlgorithm",
                    Details:"Developed in Sitecore 9.0.2 platform, ASP.NET MVC, HTML, CSS, Bootstrap5, JavaScript. The Project is designed according to Helix Principle. Users can easily edit the content of the website and create new website pages easily. Custom forms were made so that Users can send emails and subscribe.",
                    Technology:[
                        "ASP.Net MVC","HTML","CSS","Bootstrap 5","JavaScript",
                        " Sitecore 9.0.2 platform"
                    ],
                    DB:"",
                    category:3
                },
                {
                    Image:"src/Images/Protfolios/personal.png",
                    Title:"Personal Website",
                    link:"https://github.com/Fuaduddin/PersonalWebsite",
                    Details:"In this project it's shows my recent work and my portfolios. Here we can see working experience , my education and other information about me. User can also sent me mail using my website for contacting me. It’s a basic HTML, CSS, Bootstrap and JavaScript front-end design.",
                    Technology:[
                        "HTML","CSS","Bootstrap 5","JavaScript",
                        " Vue Js"
                    ],
                    DB:"",
                    category:2
                },
                {
                    Image:"src/Images/Protfolios/ebookstore.jpg",
                    Title:"E-Book Store",
                    link:"https://github.com/Fuaduddin/BookStore",
                    Details:"There are 5 user groups which are Super Admin, Admin, Customer,Blogger and Publisher.  Only those who have registered can enter the system. They all can login to their Dashboards according to their role. Customer can order their product and they also can view their order details and track them. Admin and supper admin can maintain book store information and needed book details to the Publisher. Publisher can view book order list and also can add their new book details. Blogger can add new blogs and view there all blogs. Super Admin can add or remove book , calculate orders, book , and admin according to the system need.",
                    Technology:[
                      "ASP.NET MVC (Entity Framework)","HTML","CSS","Bootstrap 5","JavaScript","C#",
                      "Ajax","jQuery","SQL","3-Layer Architure"
                    ],
                    DB:"SQL Server",
                    category:5
                },
                {
                    Image:"src/Images/Protfolios/tour.jpg",
                    Title:"Travel and Tourism Management System (Pacific)",
                    link:"https://github.com/Fuaduddin/PacifiTourTraveling",
                    Details:"There are 7 user groups which are Super Admin, Admin, Customer,Blogger,Hotel Manager, Bus Manager and Airplane Manager. Only those who have registered can enter the system. They all can login to their Dashboards according to their role.Customer can booked their traveling tickets or hotel rooms or a tour package and they also can view their booked details and track them. Customer can sign up using their  Facebook or Gmaill account.Admin and supper admin can maintain all kind of booking information and  package booking information. Hotel Manager, Bus Manager and Airplane Manager can view booking list and also can add their new Offer or packages. Blogger can add new blogs and view there all blogs. Super Admin can add or remove booking and package, calculate booking , and admin according to the system need.",
                    Technology:[
                      "ASP.NET MVC (Entity Framework)","HTML","CSS","Bootstrap 5","JavaScript","C#",
                      "Ajax","jQuery","SQL","3-Layer Architure"
                    ],
                    DB:"SQL Server",
                    category:5
                },
            ],
            ProtfoliosLIst2:[],
            eerrormsg:""
        }
    },
    methods: {
        filter: function (id) {
        if(id>0)
        {
            this.ProtfoliosLIst2=this.ProtfoliosLIst.filter(ProtfoliosLIst=>ProtfoliosLIst.category===id);
        }
        else
        {
            this.ProtfoliosLIst2=this.ProtfoliosLIst;
        }
        if( this.ProtfoliosLIst2.length===0 && id>0)
        {
            this.errormsg="No Data Found";
        }
        else
        {
            this.errormsg="";
        }
      },
      onChange:function(event) {
        var value=event.target.value;
        if(value>0)
        {
            this.ProtfoliosLIst2=this.ProtfoliosLIst.filter(ProtfoliosLIst=>ProtfoliosLIst.category==value);
        }
        else
        {
            this.ProtfoliosLIst2=this.ProtfoliosLIst;
        }
        if( this.ProtfoliosLIst2.length===0 && value>0)
        {
            this.errormsg="No Data Found";
        }
        else
        {
            this.errormsg="";
        }
      }
    },
    computed:{
        totalforbutton:function(){
            let totalproject=0;
            if(this.ProtfoliosLIst2.length==0)
            {
               totalproject=this.ProtfoliosLIst.length;
            }
            else
            {
                totalproject=this.ProtfoliosLIst2.length;
            }
            
            return totalproject;
        }
    }
});
Protfolioswork.mount('#protfolioscontainer');