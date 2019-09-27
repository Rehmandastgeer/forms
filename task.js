var rat=0;
function add(ths,sno){
    rat=sno;
    for (var i=1;i<=5;i++){
        console.log("sno",sno)
      var cur=document.getElementById("star"+i)
        cur.className="fa fa-star";
   }
    
    for (var i=1;i<=sno;i++){
        var cur=document.getElementById("star"+i);
        if(cur.className=="fa fa-star")
        {
          cur.className="fa fa-star checked";
        }
    }
    
    }
    // function action (){
    //     console.log("Fuck off you bloody idot!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

    // }
    // $('#save').on('click', function(){

    //     $('input[type="text"]').each(function(){    
    //         var id = $(this).attr('id');
    //         var value = $(this).val();
    //        localStorage.setItem(id, value);
    //        console.log("cctrvtbh");
    //     });   
    // });
    
    // $('#load').on('click', function(){
    //     $('input[type="text"]').each(function(){    
    //         var id = $(this).attr('id');
    //         var value = localStorage.getItem(id);
            
    //         $(this).val(value);
            
    //     }); 
    // });
    function action() {
       var r = document.getElementById('title').value;
       localStorage.setItem('title',r);
       var rati = document.getElementById('title').value;
       localStorage.setItem('rating',rat);
       var desc=document.getElementById('des').value;
       localStorage.setItem('des',desc);
       
        
    }

    function action2() {
        var title=localStorage.getItem('title');
       var rating=localStorage.getItem('rating');
       var desc=localStorage.getItem('des');
       document.getElementById('t2title').value=title;
       document.getElementById('t2des').value=desc;
       document.getElementById('t2rat').value=rating;

       console.log("title",title,"rattting",desc);
    }