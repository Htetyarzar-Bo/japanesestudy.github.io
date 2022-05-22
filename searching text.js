const selectableTextArea = document.querySelectorAll(".selectable-text-area");

 // ------------- additional code ---------------------------

// -------cancel cross sign ကို စာရေး မှ ပေါ်လာအောင် -----------

const cancelBtn = document.querySelector('.cancel-btn');  
//const searchInput = document.getElementById('search');

// -------------side bar ------------------------------
var ShowMenu=document.getElementById('show-menu');
var HideMenu = document.getElementById('hide-menu');
var SideBar=document.getElementById('sidebar-menu');

ShowMenu.addEventListener('click',function(){
     SideBar.classList.add('active');
})
HideMenu.addEventListener('click',function(){
     SideBar.classList.remove('active');
})
// -------------side bar ------------------------------

 // selectableTextArea ကို click တာနဲ့ sidebar ပျောက်အောင် 

function HideSideBar(event){
    SideBar.classList.remove('active');
}


// ------------Search box ကိုဖွင့်ဖို့ -------------------------

const DefOpen = document.querySelector('.Def-open');
const Container = document.querySelector('.container');
const CloseBtn = document.querySelector('#Close-Btn');

DefOpen.onclick = () =>{
  Container.classList.add('active');
  CloseBtn.classList.add('active');
  DefOpen.classList.add('active');
}
CloseBtn.onclick =()=>{
  Container.classList.remove('active');
  CloseBtn.classList.remove('active');
  DefOpen.classList.remove('active');
  document.getElementById('word').innerHTML = "kanji"; 
  document.getElementById('yomi').innerHTML = "furigana";
  document.getElementById('mean').innerHTML = "မြန်မာစာ";
  document.getElementById('remark').innerHTML = "မှတ်ချက်";
}

function OpenSearchBox(){
  Container.classList.add('active');
  CloseBtn.classList.add('active');
  DefOpen.classList.add('active');
}

  document.body.addEventListener('keypress',KeyPress);  // စာရိုက်မှ cross ပေါ်ဖို့ 

  function KeyPress(){

    if(searchInput.value!=" " ){    // " " မှသာ click တစ်ချက်တည်းနဲ့ ပေါ် နိုင်  //"" ဆို ၂ချက်နှိုပ် မှ ပေါ် 
        cancelBtn.classList.add('active');

    }else{
        cancelBtn.classList.remove('active');
    }
  }
  
    
  cancelBtn.onclick = () =>{
    cancelBtn.classList.remove('active');
    searchInput.value = "";
  } 

  // ------------- additional code -----------------------------


 selectableTextArea.forEach(elem => {
    elem.addEventListener("mouseup", selectableTextAreaMouseUp);
 });


  document.addEventListener("mousedown", documentMouseDown);

  function documentMouseDown(event) {
    window.getSelection().empty();
    
  }

   function selectableTextAreaMouseUp(event) {
   // const selectedText = window.getSelection().toString().trim();
    
     SearchBtnClick();    //mouseup လုပ်တာနဲ့ search လုပ်ဖို့ 
     OpenSearchBox();
     HideSideBar();
    }
    
    
  //---------------select ထားသော data ကို ရှာခြင်း  ------------------ 
  function SearchBtnClick(event) {
     
    const selectedText = window.getSelection().toString().trim();
        
      if(selectedText == ""){
          return;
      }
      found = -1; 

    for (var i = 0; i < definition.length; i++){
        if(selectedText == definition[i].word ) {
            found = i;
            break;
        }else{
            document.getElementById('word').innerHTML = "ရှာမတွေ့ပါ!"; 
            document.getElementById('yomi').innerHTML = "<p style='text-align: justify;  margin: 20px;'  >" +"သင်ရှာဖွေနေသောစကားလုံးမှာဤအဘိဓါန်တွင် မရှိ(သို့)မထည့်သွင်းရသေးပါ!"+"</p>";
            document.getElementById('mean').innerHTML = "";
            document.getElementById('image').src = " ";
            document.getElementById('remark').innerHTML = "";
        }
    }
    
        if(found>= 0){
          show(found);
        }

  /* for (var i = 0; i < definition.length; i++){
    
          if(selectedText == definition[i].yomi) {
            found = i;
            break;
          }else{
          document.getElementById('word').innerHTML = "ရှာမတွေ့ပါ!"; 
          document.getElementById('yomi').innerHTML = "<p style='text-align: justify;margin: 20px;' >" +"သင်ရှာဖွေနေသောစကားလုံးမှာဤအဘိဓါန်တွင် မရှိ(သို့)မထည့်သွင်းရသေးပါ!"+"</p>";
          document.getElementById('mean').innerHTML = "";
          document.getElementById('remark').innerHTML = "";
          }
   
    }
      if(found>= 0){
        show(found);
      } */

      for (var i = 0; i < definition.length; i++){
        if(selectedText == definition[i].mean ) {
          found = i;
          break;
        }else{
        document.getElementById('word').innerHTML = "ရှာမတွေ့ပါ!"; 
        document.getElementById('yomi').innerHTML = "<p style='text-align: justify;margin: 20px;' >" +"သင်ရှာဖွေနေသောစကားလုံးမှာဤအဘိဓါန်တွင် မရှိ(သို့)မထည့်သွင်းရသေးပါ!"+"</p>";
        document.getElementById('mean').innerHTML = "";
        document.getElementById('image').src = " ";
        document.getElementById('remark').innerHTML = "";
        }
    
    }

    if(found>= 0){
      show(found);
    }

  }

  function show(i) {
      document.getElementById('word').innerHTML = definition[i].word;
      document.getElementById('yomi').innerHTML = definition[i].yomi;
      document.getElementById('mean').innerHTML = definition[i].mean;
      if(definition[i].img == ""){
        document.getElementById('image').src = " ";  //    -> " "
        document.getElementById('remark').style.marginTop = "-200px";
      }else{
      document.getElementById('image').src = definition[i].img;
      document.getElementById('remark').style.marginTop = "10px";
    }
      if(definition[i].remark == ""){
        document.getElementById('remark').innerHTML = definition[i].remark ;
      }else{
        document.getElementById('remark').innerHTML ="(" + definition[i].remark + ")";
      }
     
     
    }
    show(0);

  // -------------------------input data ကို Enter key ဖြင့် ရှာခြင်း----------------------------------

  document.addEventListener('keypress',EnterKeyPress);    // keypress is for capital letter
    function EnterKeyPress(event){
        if (event.keyCode == 13){   // keycode မှာ " " ပါလည်းရ မပါလည်းရ 
         //let query = searchInput.value;
          EnterSearch();
        }
  }


  function EnterSearch(){
     query = document.getElementById('search').value;
    
      if(query == ""){
        return;
      }
    found = -1; 
    
    for (var i = 0; i < definition.length; i++){
      if(query == definition[i].word) {
          found = i;
          break;
        }else{
          document.getElementById('word').innerHTML = "Word not found"; 
          document.getElementById('yomi').innerHTML = "The word you entered is not found in our dictionary";
          document.getElementById('mean').innerHTML = "";
          document.getElementById('remark').innerHTML = "";
        }
    }
      if(found>= 0){
        show(found);
      }

  /* for (var i = 0; i < definition.length; i++){
      for(var j =0; j < definition[i].yomi.length ; j++){
        if(query == definition[i].yomi[j]) {
          found = i;
          break;
        }else{
        document.getElementById('word').innerHTML = "Word not found"; 
        document.getElementById('yomi').innerHTML = "The word you entered is not found in our dictionary";
        document.getElementById('mean').innerHTML = "";
        document.getElementById('remark').innerHTML = "";
        }
      }
    }
    if(found>= 0){
      show(found);
    }
*/
    for (var i = 0; i < definition.length; i++){
    
        if(query == definition[i].mean) {
          found = i;
          break;
        }else{
        document.getElementById('word').innerHTML = "Word not found"; 
        document.getElementById('yomi').innerHTML = "The word you entered is not found in our dictionary";
        document.getElementById('mean').innerHTML = "";
        document.getElementById('remark').innerHTML = "";
        }
      
    }
  
      if(found>= 0){
      show(found);
    }
 
  }
  

 
  // ----------input data ကို Enter key ဖြင့် ရှာခြင်း----------------------------------