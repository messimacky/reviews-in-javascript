const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
toggleBtn.addEventListener('click', function(){
    //long way to add and remove show-sidebar class
    // if(sidebar.classList.contains('show-sidebar')){
    //     sidebar.classList.remove('show-sidebar');
    // }
    // else {
    //     sidebar.classList.add('show-sidebar')
    // }



    // short way to add and remove show-sidebar class
    sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar')
})