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

/* -masoud image change color function- */

function changeMasoudColor(){
    var x = document.getElementById('masoudImage');

    if (x.style.width === "170px"){
        x.style.width = "120px";
    }else{
        x.style.width = "170px";
    }
}
