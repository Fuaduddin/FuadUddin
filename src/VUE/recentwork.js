
const Recentwork=Vue.createApp({
    data(){
        return{
            Recentworktitle:"RECENT WORK",
            RecentworkShortDesc:"Some of the recent work projects I have work on:",
            works:[
                {
                Projectimage:"/src/Images/RecentWork/afi-1.png",
                title:"Armed Forces Insurance",
                ShortDescrption:"It’s an existing web application built on Sitecore technology. Work for their Content Management Front-end development and Back-End Development like different types of form like there insurance related form, contact form and lots more using Sitecore, ASP.NET MVC and Restful API. ",
                technology:[
                    "Sitecore 10.2","Asp.Net(MVC)","JavaScript","jQuery","HTML","CSS","Restful API"
                ],
                WebsiteLink:"https://www.afi.org/"},
                {
                 Projectimage:"/src/Images/RecentWork/adeco.jpg",
                title:"Addeco",
                ShortDescrption:"It’s an existing web application built on Sitecore technology. Work for their Content Management, Build Sitecore forms and Front-end development.",
                technology:[
                    "jQuery","JavaScript","HTML","CSS","Sitecore","Bootstrap 5"
                ],
                WebsiteLink:"https://www.adecco.co.uk/"},
                {
                Projectimage:"/src/Images/RecentWork/angles.png",
                title:"Office Angles ",
                ShortDescrption:"It’s an existing web application built on Sitecore technology. Work for their Content Management and Front-end development.",
                technology:[
                    "jQuery","JavaScript","HTML","CSS","Sitecore","Bootstrap 5"
                ],
                WebsiteLink:"https://www.office-angels.com/"},
                {
                Projectimage:"/src/Images/byteherar.png",
                title:"Scale7",
                ShortDescrption:"A Sitecore web application built for the Arabic Factory. Work for their Content Management and Front-end development and Back-End development using Sitecore and ASP.NET MVC. Made forms for client for manage their site. ",
                technology:[
                    "Sitecore 10.2","Asp.Net(MVC)","JavaScript","jQuery","HTML","CSS"
                ],
                WebsiteLink:"https://scale7.qa/"},
                {
                Projectimage:"/src/Images/RecentWork/Ecluid.png",
                title:"ECLUID",
                ShortDescrption:"It’s an existing web application built on Sitecore technology. Work for their Content Management and Front-end development.",
                technology:[
                    "jQuery","JavaScript","HTML","CSS","Sitecore","Bootstrap 5"
                ],
                WebsiteLink:"https://euclidmanagers.com/"},
                {
                Projectimage:"/src/Images/byteherar.png",
                title:"Factory One",
                ShortDescrption:"A Sitecore web application built for the Arabic Factory. Work for their Content Management and Front-end development and Back-End development using Sitecore and ASP.NET MVC. Made forms for client for manage their site.",
                technology:[
                    "Sitecore 10.2","Asp.Net(MVC)","JavaScript","jQuery","HTML","CSS"
                ],
                WebsiteLink:"https://factoryone.qa/"},
                {
                Projectimage:"/src/Images/RecentWork/Racs.png",
                title:"RACS ",
                ShortDescrption:"It’s an existing web application built on Sitecore   technology. Work for their Content Management, Build Sitecore forms and Front-end development.",
                technology:[
                    "jQuery","JavaScript","HTML","CSS","Sitecore","Bootstrap 5"
                ],
                WebsiteLink:"https://www.surgeons.org/"},
                {
                Projectimage:"/src/Images/RecentWork/trade.png",
                title:"Trade World Advertising",
                ShortDescrption:"An ASP.NET web application built for Trade World Advertising. It was a CMS System for the client. Made forms for client for manage their site.",
                technology:[
                    "Asp.Net(MVC)","SQL Server","MVC","C#"
                ],
                WebsiteLink:"https://tradeworldad.com/Home/"},
                {
                Projectimage:"/src/Images/RecentWork/RSCI.png",
                title:"RSCI",
                ShortDescrption:"A Sitecore web application built for the RSCI Medical University. Work for their Content Management and Front- end development using Sitecore and ASP.NET MVC. ",
                technology:[
                    "Sitecore 10.2","Asp.Net(MVC)","JavaScript","jQuery","HTML","CSS"
                ],
                WebsiteLink:"https://www.rcsi.com/dublin"},
                {
                Projectimage:"/src/Images/byteherar.png",
                title:"The Byte Heart Property:",
                ShortDescrption:"An ASP.NET web application built for the byte heart property. Made forms for Clients and Customers to create accounts and advertise their properties which clients can buy, rent or sell their property.",
                technology:[
                    "Asp.Net(MVC)","SQL Server","MVC","C#","HTML","CSS"
                ],
                WebsiteLink:""}
            ]
        }
    }
});
// All Mounted
Recentwork.mount('#recentworksection');
