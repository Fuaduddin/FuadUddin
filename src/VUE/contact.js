// Education Snap Shoot
const Contactfrom=Vue.createApp({
    data(){
        return{
            Contactfromcapciltitle:"Contact",
            Contactshortdesc:"Want to contact with me ?",
            showemailcontainer:true,
            email:'',
            subject:'',
            Message:'',
            name:''
        }
    },
    methods:{
        contactform:function()
        {
            debugger
            let email={
                name:this.name,
                email:this.email,
                subject:this.subject,
                Message:this.Message
            }
            console.log(email);
            if(emailjs.send("service_c7htwee","template_6gv0pob",email))
            {
                this.showemailcontainer=false;
                this.name="";
                this.email="";
                this.subject="";
                this.Message="";
            }
        }
    }
});
// All Mounted
Contactfrom.mount('#contactfrom');