var modal = document.getElementById('orderBtn');
var btnhead = document.getElementById('orderBtnHead');
var btnmob = document.getElementById('orderBtnMob');
var btnabout = document.getElementById('orderBtnAbout');
var datamenu = document.getElementById('datamenu');
var btnclose = document.getElementsByClassName('close')[0];
btnclose.onclick = function () {
  modal.style.display = 'none';
};
modal.onclick = function() {
  datamenu.style.display = "none";
}
function orderBtn() {
  modal.style.display = 'block';
}
btnhead.onclick = orderBtn;
btnmob.onclick = orderBtn;
btnabout.onclick = orderBtn;
