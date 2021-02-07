function dark() {
    document.getElementById('bg').classList.toggle('dark-theme');
  }
  setTimeout(function(){
      document.getElementById('cookies').classList.toggle('common');
    },1000);
    function yes() {
      document.getElementById('cookies').classList.remove('common');
    }
    function slide(){
      document.getElementById("slide-menu").classList.toggle('slide-show');
    }
    function slideout(){
      document.getElementById("slide-menu").classList.remove('slide-show');
    }