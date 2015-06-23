

function hamburgerclick(id){

  if(document.getElementById(id).style.width === '0px'){
  document.getElementById(id).style.width = '200px';
  }
  else{
      document.getElementById(id).style.width ='0px';
  }
}
