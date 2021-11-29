 "use strict";

    

       function one() {

  let base = document.getElementById("Base");

   

  base.innerHTML += "1";

      }

      function two() {

         let base = document.getElementById("Base");

        

           base.innerHTML += "2";

      }

      function three() {

         let base = document.getElementById("Base");

        

   base.innerHTML += "3";

      }

      function four() {

         let base = document.getElementById("Base");

          

    base.innerHTML += "4";

      }

      function five() {

         let base = document.getElementById("Base");

          

  base.innerHTML += "5";

      }

      function six() {

         let base = document.getElementById("Base");

          

           base.innerHTML += "6";

      }

      function seven() {

         let base = document.getElementById("Base");

          

  

    base.innerHTML += "7";

      }

      function eight() {

         let base = document.getElementById("Base");

          

    base.innerHTML += "8";

      }

      function nine() {

         let base = document.getElementById("Base");

            

    base.innerHTML += "9";

      }

      function zero() {

       let base = document.getElementById("Base");

            

    base.innerHTML += "9";

  }  

      

    function oneadd() {

  

         let add = document.getElementById("Add");

         

  add.innerHTML += "1";

      }

      function twoadd() {

          

         let add = document.getElementById("Add");

        

           add.innerHTML += "2";

      }

      function threeadd() {

        

         let add = document.getElementById("Add");

    

   add.innerHTML += "3";

      }

      function fouradd() {

        

         let add = document.getElementById("Add");

    add.innerHTML += "4";

      }

      function fiveadd() {

      

          

         let add = document.getElementById("Add");

         

         

  add.innerHTML += "5";

      }

      function sixadd() {

         

         let add = document.getElementById("Add");

       

           add.innerHTML += "6";

      }

      function sevenadd() {

         

         let add = document.getElementById("Add");

         

        add.innerHTML += "7";   

  }

      function eightadd() {

         

         let add = document.getElementById("Add");

      

  add.innerHTML += "8";

  

      }

      function nineadd() {

        

         let add = document.getElementById("Add");

         

    add.innerHTML += "9";

  }

  function zeroadd() {

    let add = document.getElementById("Add");

         

    add.innerHTML += "0";

  }

    function onesub() {

  

   let sub = document.getElementById("Subtract");

         

  sub.innerHTML += "1";

      }

      function twosub() {

        

          let sub = document.getElementById("Subtract");

        

           sub.innerHTML += "2";

      }

      function threesub() {

        

          let sub = document.getElementById("Subtract");

        

   sub.innerHTML += "3";

      }

      function foursub() {

        

          let sub = document.getElementById("Subtract");

      

    sub.innerHTML += "4";

      }

      function fivesub() {

          let sub = document.getElementById("Subtract");

         

  sub.innerHTML += "5";

      }

      function sixsub() {

         

          let sub = document.getElementById("Subtract");

       

           sub.innerHTML += "6";

      }

      function sevensub() {

        

          let sub = document.getElementById("Subtract");

    

    sub.innerHTML += "7";

  

      }

      function eightsub() {

        

            let sub = document.getElementById("Subtract");

         

    sub.innerHTML += "8";

      }

      function ninesub() {

         

            let sub = document.getElementById("Subtract");

    sub.innerHTML+= "9";

  }

  function zerosub() {

    let sub = document.getElementById("Subtract");

    sub.innerHTML+= "0";

  }

    function onemul() {

  

  

         let mul = document.getElementById("Multiply");

         

mul.innerHTML += "1";

      }

      function twomul() {

        

         let mul = document.getElementById("Multiply");

         

         mul.innerHTML += "2";

      }

      function threemul() {

        

         let mul = document.getElementById("Multiply");

         

         mul.innerHTML += "3";

 

      }

      function fourmul() {

       

         let mul = document.getElementById("Multiply");

         

  mul.innerHTML += "4";

      }

      function fivemul() {

        

         let mul = document.getElementById("Multiply");

        

mul.innerHTML += "5";

      }

      function sixmul() {

        

         let mul = document.getElementById("Multiply");

         mul.innerHTML += "6";

      }

      function sevenmul() {

         

         let mul = document.getElementById("Multiply");

  mul.innerHTML += "7";

  

      }

      function eightmul() {

         let mul = document.getElementById("Multiply");

  mul.innerHTML += "8";

      }

      function ninemul() {

         

         let mul = document.getElementById("Multiply");

        

          mul.innerHTML += "9";

  }

  function zeromul() {

    let mul = document.getElementById("Multiply");

        

          mul.innerHTML += "0";

  }

    function onediv() {

         let div = document.getElementById("Divide");

  div.innerHTML += "1";

      }

      function twodiv() {

    

         let div = document.getElementById("Divide");

          div.innerHTML += "2";

      }

      function threediv() {

        

         let div = document.getElementById("Divide");

  div.innerHTML += "3";

      }

      function fourdiv() {

         

         let div = document.getElementById("Divide");

   div.innerHTML += "4";

      }

      function fivediv() {

       

         let div = document.getElementById("Divide");

 div.innerHTML += "5";

      }

      function sixdiv() {

       

         let div = document.getElementById("Divide");

          div.innerHTML += "6";

      }

      function sevendiv() {

      

         let div = document.getElementById("Divide");

   div.innerHTML += "7";

  

      }

      function eightdiv() {

      

         let div = document.getElementById("Divide");

 div.innerHTML += "8";

  

      }

      function ninediv() {

      

         let div = document.getElementById("Divide");

   div.innerHTML += "9";

  }

  function zerodiv() {

   let div = document.getElementById("Divide");

   div.innerHTML += "0"

  }

  function together() {

    let base = document.getElementById("Base").innerHTML;

          let sub = document.getElementById("Subtract").innerHTML;

         let add = document.getElementById("Add").innerHTML;

         let mul = document.getElementById("Multiply").innerHTML;

         let div = document.getElementById("Divide").innerHTML;

         let ans = document.getElementById("Answer");

       mul = ( Number(mul) > 0) ? mul = mul : mul = 1;

       div = ( Number(div) > 0) ? div = div : div = 1;

      ans.innerHTML = base - Number(sub)  + Number(add) * Number(mul) / Number(div);

      console.log(ans.innerHTML);

      

       

        

        

       }

function clearAll() {
   let base = document.document.getElementById("Base");
   let sub = document.getElementById("Subtract");

   let add = document.getElementById("Add");

   let mul = document.getElementById("Multiply");

   let div = document.getElementById("Divide");

   let ans = document.getElementById("Answer");
   
   sub.innerHTML  = "0";
   add.innerHTML  = "0";
   mul.innerHTML  = "0";
   div.innerHTML  = "0";
   ans.innerHTML = "0";
}
function switchAdd() {
   let base = document.document.getElementById("jsbase");
   let sub = document.getElementById("jssub");

   let add = document.getElementById("jsadd");

   let mul = document.getElementById("jsmul");

   let div = document.getElementById("jsdiv");
}
function switchSub() {
   let base = document.document.getElementById("jsbase");
   let sub = document.getElementById("jssub");

   let add = document.getElementById("jsadd");

   let mul = document.getElementById("jsmul");

   let div = document.getElementById("jsdiv");
}
function switchMul() {
   let base = document.document.getElementById("jsbase");
   let sub = document.getElementById("jssub");

   let add = document.getElementById("jsadd");

   let mul = document.getElementById("jsmul");

   let div = document.getElementById("jsdiv");
}
function switchDiv() {
   let base = document.document.getElementById("jsbase");
   let sub = document.getElementById("jssub");

   let add = document.getElementById("jsadd");

   let mul = document.getElementById("jsmul");

   let div = document.getElementById("jsdiv");
}

 