var myCenter=new google.maps.LatLng( 18.606855,73.875182);
function initialize()
{
	// adding markers using jason
var markers = [{"latitude":18.606855,"longitude":73.875182,"content":"\r\n\t <p> Army Institute Of technology, Pune</p><h3 align=\"center\"> <img src=\"images/aitlogo2.gif\" height=\"100\" width=\"150\"> </h3>"}];

// styling map
var styles =[
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
];


var styledMap = new google.maps.StyledMapType(styles,
{name: "Styled Map"});

//setting map options

var mapProp = {
	zoomControl : true,
	zoomControlOptions: {
	            style : google.maps.ZoomControlStyle.SMALL,
	            position : google.maps.ControlPosition.TOP_RIGHT
	        },
			 panControl : false,
	        streetViewControl : false,
	        mapTypeControl: false,
	        overviewMapControl: false,
	        scrollwheel: false,
  center:myCenter,
  zoom:12,
 mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
  };
 
 	
 
 
 

var map=new google.maps.Map(document.getElementById("mapView"),mapProp);
 map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  var image = 'images/marker-red.png';
 
for (i = 0; i < markers.length; i++) {
var data = markers[i]
var myLatlng = new google.maps.LatLng(data.latitude, data.longitude);
var marker = new google.maps.Marker({
position: myLatlng,
map: map,

  icon: image,
animation:google.maps.Animation.DROP
});


// setting infowindow
var infoWindow  = new google.maps.InfoWindow({
	
      size: new google.maps.Size(200,250),
 
        maxWidth: 200,
	content: data.content
        
    });


  
  infoWindow.open(map, marker);
(function(marker, data) {
google.maps.event.addListener(marker, "click", function(e) {

infoWindow.setContent(data.content);
infoWindow.open(map, marker);

});
// Attaching a click event to the current marker
google.maps.event.addListener(marker, "mouseover", function(e) {

infoWindow.setContent(data.content);
infoWindow.open(map, marker);

});











})(marker, data);


}













  
 
 
     
 
 
  
 
}












google.maps.event.addDomListener(window, 'load', initialize);





	
		// JavaScript Document