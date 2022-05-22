const CaretDown1 = document.getElementById("N1");
 const CaretDown2 = document.getElementById("N2");
 const CaretDown3 = document.getElementById("N3");
 const CaretDown4 = document.getElementById("N4");
 const CaretDown5 = document.getElementById("N5");
 var List1 = document.querySelector(".list1");
 var List2 = document.querySelector(".list2");
 var List3 = document.querySelector(".list3");
 var List4 = document.querySelector(".list4");
 var List5 = document.querySelector(".list5");
 var LevleList1 = document.querySelector('.one')
 var LevleList2 = document.querySelector('.two')
 var LevleList3 = document.querySelector('.three')
 var LevleList4 = document.querySelector('.four')
 var LevleList5 = document.querySelector('.five')

 CaretDown1.onclick=()=>{ 
    List1.classList.toggle('Active');
    List2.classList.remove('Active');
    List3.classList.remove('Active');
    List4.classList.remove('Active');
    List5.classList.remove('Active');
    LevleList1.classList.toggle('active');
    LevleList2.classList.remove('active');
    LevleList3.classList.remove('active');
    LevleList4.classList.remove('active');
    LevleList5.classList.remove('active');
 };

 CaretDown2.onclick=()=>{
    List2.classList.toggle('Active');
    List1.classList.remove('Active');
    List3.classList.remove('Active');
    List4.classList.remove('Active');
    List5.classList.remove('Active');
    LevleList2.classList.toggle('active');
    LevleList1.classList.remove('active');
    LevleList3.classList.remove('active');
    LevleList4.classList.remove('active');
    LevleList5.classList.remove('active');
 };

 CaretDown3.onclick=()=>{
    List3.classList.toggle('Active');
    List1.classList.remove('Active');
    List2.classList.remove('Active');
    List4.classList.remove('Active');
    List5.classList.remove('Active');
    LevleList3.classList.toggle('active');
    LevleList1.classList.remove('active');
    LevleList2.classList.remove('active');
    LevleList4.classList.remove('active');
    LevleList5.classList.remove('active');
 };
 CaretDown4.onclick=()=>{
    List4.classList.toggle('Active');
    List1.classList.remove('Active');
    List2.classList.remove('Active');
    List3.classList.remove('Active');
    List5.classList.remove('Active');
    LevleList4.classList.toggle('active');
    LevleList1.classList.remove('active');
    LevleList2.classList.remove('active');
    LevleList3.classList.remove('active');
    LevleList5.classList.remove('active');
 };
 CaretDown5.onclick=()=>{
    List5.classList.toggle('Active');
    List1.classList.remove('Active');
    List2.classList.remove('Active');
    List3.classList.remove('Active');
    List4.classList.remove('Active');
    LevleList5.classList.toggle('active');
    LevleList1.classList.remove('active');
    LevleList2.classList.remove('active');
    LevleList3.classList.remove('active');
    LevleList4.classList.remove('active');
 };
 