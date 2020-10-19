const options = {
    "dragging": false
    ,"touchZoom": false
    ,"doubleClickZoom" : false
    ,"scrollWheelZoom": false
    ,"zoomControl": false
  };
  
  const spanMapa = document.querySelector('span[data-lat]');
  const lat=spanMapa.dataset.lat;
  const lng=spanMapa.dataset.lng;
  
  
  const map = L.map('mapid',options).setView([lat,lng], 15);
  
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  ).addTo(map);
  
  const icon = L.icon({
    "iconUrl": "/images/map-marker.svg"
    ,"iconSize": [58,68]
    ,"iconAnchor" : [29,68]
    ,"popupAnchor" : [170,2]
  });
  
  L
    .marker([lat,lng],{ icon })
    .addTo(map)  
  
  function selectImage(event){
    const button = event.currentTarget;
    console.log('selectImage',event.currentTarget);
  
    const buttons = document.querySelectorAll('.images button');
    console.log(buttons);
    
    buttons.forEach( (button)=> {
      button.classList.remove("active");
    });
      
  const image = button.children[0];
    const imageContainer = document.querySelector('.orphanage-details > img')
  
    imageContainer.src=image.src;
  
    button.classList.add('active');
  
    
  }

