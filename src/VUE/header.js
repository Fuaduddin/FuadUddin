// header parts
const headerdetails = Vue.createApp({
    data(){
      return{
        title:"Fuad Uddin | Full Stack Developer"
      }
    }
  });
  const Navbarlogo=Vue.createApp ({
    data(){
        return{
            icon:"src/Images/transparenticon.png"
        }
    }
  });

  // header mounted
  const headerbanner=Vue.createApp ({
    data(){
        return{
            education:"EDUCATION",
            experince:"EXPERIENCE",
            work:"RECENT WORK",
            Personal:"PROTFOLIOS",
            skills:"SKILLS",
            contact:"CONTACT"
        }
    }
  });
// All Mounted Details
  headerdetails.mount('#title');
  Navbarlogo.mount('#navbar');
  headerbanner.mount('#headerbanner');