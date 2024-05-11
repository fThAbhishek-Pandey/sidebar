const sidebar= document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".sidebar-toggle");
const band = document.querySelector(".close-btn");
console.log(sidebar);
console.log(toggleBtn);
console.log(band);
toggleBtn.addEventListener('click',function(){
    //   sidebar.classList.toggle('show-sidebar');
      console.log("sidebar",sidebar);
      console.log(sidebar.classList);
      sidebar.classList.toggle('show-sidebar');
})
band.addEventListener('click',function(){
    console.log(sidebar);
    console.log(sidebar.classList);
    sidebar.classList.remove("show-sidebar");
})