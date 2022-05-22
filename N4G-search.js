var NavSection = document.querySelector('.nav-section');
var GramSearch =[
    {class:"nav-textC",  title:"第26か (んです/~のです)"　, address:"dai26ka" },
    {class:"nav-text", title:"1. んです/~のです"　, address:"ndesu" },
    {class:"nav-text", title:"2. んですが"　, address:"ndesuga" },
    {class:"nav-text", title:"3. ていただけませんか"　, address:"teitakemasenka" },
    {class:"nav-text", title:"4. たらいいですか"　, address:"taraiidesuka" },
    {class:"nav-textC", title:"第27か (かのうけい)"　, address:"dai27ka" },
    {class:"nav-text", title:"1. N ができます。"　, address:"gadekimasu" },
    {class:"nav-text", title:"2. N~しか~ません/ない"　, address:"shika-masen" },
    {class:"nav-text", title:"3. は~が~は"　, address:"hagaha" },
    {class:"nav-textC",title:"第28か (~ながら)"　, address:"dai28ka" },
    {class:"nav-text", title:"1. V（ますဖြုတ်）＋ ながら"　, address:"nagara" },
    {class:"nav-text", title:"2. V ています"　, address:"vteimasu" },
    {class:"nav-text", title:"3. も~し~も~し"　, address:"moshi~moshi" },
    {class:"nav-textC", title:"第29か"　, address:"dai29ka" },
    {class:"nav-text", title:"1.N が/は  Vています"　, address:"Ngateimasen" },
    {class:"nav-text", title:"2.N をV ています"　, address:"woteimasu" },
    {class:"nav-text", title:"3.N はVてしまいます"　, address:"hateshimaimasu" },
    {class:"nav-text", title:"4.N はVてしまいました"　, address:"hateshimaimashita" },
    {class:"nav-textC", title:"第30か"　, address:"dai30ka" },
    {class:"nav-text", title:"1.Vてあります"　, address:"tearimasu" },
    {class:"nav-text", title:"2.V ておきます"　, address:"teokimasu" },
    {class:"nav-text", title:"3.まだVています"　, address:"madateimasu" },
    {class:"nav-textC", title:"第31か"　, address:"dai31ka" },
    {class:"nav-text", title:"1.いこうけい"　, address:"ikoukei" },
    {class:"nav-text", title:"2.いこうけい ＋とおもっています"　, address:"ikoukeitoomotteimasu" },
    {class:"nav-text", title:"3.まだVていません"　, address:"madateimasen" },
    {class:"nav-text", title:"4.V.DF/Vない＋つもりです"　, address:"tsumoridesu" },
    {class:"nav-text", title:"5.V. DF/Vない/Nの＋よていです"　, address:"yoteidesu" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
    {class:"nav-text", title:""　, address:"" },
]

init = function(){
    for(var i=0; i< GramSearch.length; i++){
        NavSection.innerHTML+="<li  class=" + GramSearch[i].class + ">" + 
        "<a href=" + "#" + GramSearch[i].address + " + >"+ GramSearch[i].title + "</a>" + 
         "</li>";
    }
}
init();


