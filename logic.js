let toastbox = document.getElementById('toastbox');

let mail = document.getElementById('a');
let user = document.getElementById('b')
let pass = document.getElementById('c')
let repass = document.getElementById('d')


function toast() {

   

    if (mail.value === "" && user.value === "" && pass.value === "" && repass.value === "" )  {

        let toast = document.createElement("div");
        toast.innerHTML =' <i class="fa-sharp fa-solid fa-circle-xmark"></i> UnSuccussfull Submission ';
        toast.classList.add('error');

        toastbox.appendChild(toast);
    
        setTimeout(()=>{
            toast.remove();
        },5000);

        
    }

    else{
        let toast = document.createElement("div");
        toast.innerHTML =' <i class="fa-solid fa-circle-check"></i> Successfully Submitted ';
        toast.classList.add('toast');
        toastbox.appendChild(toast);
    
        setTimeout(()=>{
            toast.remove();
        },5000);
    

    }
   
}