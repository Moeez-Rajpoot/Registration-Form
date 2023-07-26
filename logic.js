let toastbox = document.getElementById('toastbox');


function toast() {
    let toast = document.createElement("div");
    toast.innerHTML =' <i class="fa-solid fa-circle-check"></i> Successfully Submitted ';
    toast.classList.add('toast');
    toastbox.appendChild(toast);

    setTimeout(()=>{
        toast.remove();
    },5000);

}