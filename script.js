

function allInactive(){
    document.getElementById("hatTab").classList.remove('active');
    document.getElementById("topTab").classList.remove('active');
    document.getElementById("underTab").classList.remove('active');
    document.getElementById("pantsTab").classList.remove('active');
    document.getElementById("shoesTab").classList.remove('active');
    document.getElementById("accessTab").classList.remove('active');
    document.getElementById("glassTab").classList.remove('active');
    document.getElementById("earTab").classList.remove('active');
    document.getElementById("watchTab").classList.remove('active');
    document.getElementById("braceTab").classList.remove('active');
}

function tabSelect(tapName,texture){
    allInactive();
    document.getElementById("component").innerHTML = tapName;

    if(texture){
        document.getElementById("texture").style.display = "block";
    }else{
        document.getElementById("texture").style.display = "none";
    }

    if(tapName=="Hat"){
        document.getElementById("hatTab").classList.add('active');
    }else if(tapName=="Top"){
        document.getElementById("topTab").classList.add('active');
    }else if(tapName=="Undershirt"){
        document.getElementById("underTab").classList.add('active');
    }else if(tapName=="Pants"){
        document.getElementById("pantsTab").classList.add('active');
    }else if(tapName=="Shoes"){
        document.getElementById("shoesTab").classList.add('active');
    }else if(tapName=="Accessorie"){
        document.getElementById("accessTab").classList.add('active');
    }else if(tapName=="Glasses"){
        document.getElementById("glassTab").classList.add('active');
    }else if(tapName=="Ears"){
        document.getElementById("earTab").classList.add('active');
    }else if(tapName=="Watch"){
        document.getElementById("watchTab").classList.add('active');
    }else if(tapName=="Bracelet"){
        document.getElementById("braceTab").classList.add('active');
    }
    
}
