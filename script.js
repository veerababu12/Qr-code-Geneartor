

function a() {

  var v = document.getElementById("t").value;




  if (v == "") {
    alert("entered nothing");
    return false;
  }
  document.getElementById("lop").setAttribute("src", "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + v);



  document.getElementById('kio').setAttribute('style', 'background-color:green');

  download = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + v;



}

function b() {


  document.getElementById("lop").setAttribute("src", "");

  document.getElementById('kio').setAttribute('style', 'background-color:#6D5D6E;');
  document.getElementById("t").value = "";


}