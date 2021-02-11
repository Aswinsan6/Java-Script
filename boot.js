

// darkmode
function dark() {
    document.getElementById('bg').classList.toggle('dark-theme');
  }
  // cookies timeout
  setTimeout(function(){
      document.getElementById('cookies').classList.toggle('common');
    },1000);
    function yes() {
      document.getElementById('cookies').classList.remove('common');
    }
    // sidermenu
    function slide(){
      document.getElementById("slide-menu").classList.toggle('slide-show');
    }
    function slideout(){
      document.getElementById("slide-menu").classList.remove('slide-show');
    }

    // enter the proper name
     function mysubmit() {
            var user1 = document.querySelector('#user').value;
            var pass1 = document.querySelector('#pass1').value;
            var pass2 = document.querySelector('#pass2').value;

            if (user1 == "" || user1.length <6) {
                document.querySelector('.txt').innerHTML = " <p class='red'>please enter username</p>";
                return false;
            }
            else if(pass1 == "" || pass1.length <6){
                document.querySelector('.pss1').innerHTML = " <p class='red'>please enter password</p>";
                return false;
            }
            else if(pass1 !== pass2){
                document.querySelector('.pss2').innerHTML = " <p class='red'>please enter confirmpassword</p>";
                return false;
            }
            else{
                return true;
            }
        } 
        