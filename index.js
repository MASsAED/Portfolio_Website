/* This Function made 3-line img menu showing topnav Items */
function displayNavbar(){
    var x = document.getElementById("topnav");
    var y = document.getElementsByClassName("nav_bar");
    
    if (x.style.display === "inline-block"){
        x.style.display = "none";
    } else {
        x.style.display = "inline-block";
        x.style.backgroundColor = '#e5e5e5';
        x.style.width = '100%';
        x.style.textAlign = 'center';
        x.style.padding = '0.5rem';
    }
    }

/* -masoud image change size function- */
var masoudImg = document.getElementById('masoudImage');

function bigImg(masoudImg){
    masoudImg.style.width = "160px";
    masoudImg.style.height = "140px";

}

function smallImg(masoudImg){
    masoudImg.style.width = "140px";
    masoudImg.style.height = "120px";
    masoudImg.style.marginTop = "1.7rem";


}


/* Portfolio page chaging Items position*/


