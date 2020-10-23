// gg map
function initMap() {
    const loc = {lat: 21.027763, lng: 105.834160};
  
    const map = new google.maps.Map(document.querySelector('.map'), {
      zoom: 14,
      center: loc
    });
  
    const marker = new google.maps.Marker({
      position: loc,
      map: map
    });
  }

// sticky menu background
window.addEventListener('scroll',function(){
    if(window.scrollY >0){
        document.querySelector('#navbar').style.opacity = 0.9;
    }else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// smoth srcoll
$('#navbar a,.btn').on('click',function(evt){
    if(this.hash !== ''){
        event.preventDefault();
        const hash = this.hash;
        $('html,body').animate({
            scrollTop:$(hash).offset().top - 100
        },
        800
        );
    }
});
