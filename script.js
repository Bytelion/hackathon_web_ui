var current_position = {};

function initMap() {

  var map_styles = [
    {
      "featureType":"all",
      "elementType":"all",
      "stylers":[
        {
          "visibility":"on"
        }
      ]
    },
    {
      "featureType":"all",
      "elementType":"labels",
      "stylers":[
        {
          "visibility":"off"
        },
        {
          "saturation":"-100"
        }
      ]
    },
    {
      "featureType":"all",
      "elementType":"labels.text.fill",
      "stylers":[
        {
          "saturation":36
        },
        {
          "color":"#000000"
        },
        {
          "lightness":40
        },
        {
          "visibility":"off"
        }
      ]
    },
    {
      "featureType":"all",
      "elementType":"labels.text.stroke",
      "stylers":[
        {
          "visibility":"off"
        },
        {
          "color":"#000000"
        },
        {
          "lightness":16
        }
      ]
    },
    {
      "featureType":"all",
      "elementType":"labels.icon",
      "stylers":[
        {
          "visibility":"off"
        }
      ]
    },
    {
      "featureType":"administrative",
      "elementType":"geometry.fill",
      "stylers":[
        {
          "color":"#000000"
        },
        {
          "lightness":20
        }
      ]
    },
    {
      "featureType":"administrative",
      "elementType":"geometry.stroke",
      "stylers":[
        {
          "color":"#000000"
        },
        {
          "lightness":17
        },
        {
          "weight":1.2
        }
      ]
    },
    {
      "featureType":"landscape",
      "elementType":"geometry",
      "stylers":[
        {
          "color":"#000000"
        },
        {
          "lightness":20
        }
      ]
    },
    {
      "featureType":"landscape",
      "elementType":"geometry.fill",
      "stylers":[
        {
          "color":"#4d6059"
        }
      ]
    },
    {
      "featureType":"landscape",
      "elementType":"geometry.stroke",
      "stylers":[
        {
          "color":"#4d6059"
        }
      ]
    },
    {
      "featureType":"landscape.natural",
      "elementType":"geometry.fill",
      "stylers":[
        {
          "color":"#4d6059"
        }
      ]
    },
    {
      "featureType":"poi",
      "elementType":"geometry",
      "stylers":[
        {
          "lightness":21
        }
      ]
    },
    {
      "featureType":"poi",
      "elementType":"geometry.fill",
      "stylers":[
        {
          "color":"#4d6059"
        }
      ]
    },
    {
      "featureType":"poi",
      "elementType":"geometry.stroke",
      "stylers":[
        {
          "color":"#4d6059"
        }
      ]
    },
    {
      "featureType":"road",
      "elementType":"geometry",
      "stylers":[
        {
          "visibility":"on"
        },
        {
          "color":"#7f8d89"
        }
      ]
    },
    {
      "featureType":"road",
      "elementType":"geometry.fill",
      "stylers":[
        {
          "color":"#7f8d89"
        }
      ]
    },
    {
      "featureType":"road.highway",
      "elementType":"geometry.fill",
      "stylers":[
        {
          "color":"#7f8d89"
        },
        {
          "lightness":17
        }
      ]
    },
    {
      "featureType":"road.highway",
      "elementType":"geometry.stroke",
      "stylers":[
        {
          "color":"#7f8d89"
        },
        {
          "lightness":29
        },
        {
          "weight":0.2
        }
      ]
    },
    {
      "featureType":"road.arterial",
      "elementType":"geometry",
      "stylers":[
        {
          "color":"#000000"
        },
        {
          "lightness":18
        }
      ]
    },
    {
      "featureType":"road.arterial",
      "elementType":"geometry.fill",
      "stylers":[
        {
          "color":"#7f8d89"
        }
      ]
    },
    {
      "featureType":"road.arterial",
      "elementType":"geometry.stroke",
      "stylers":[
        {
          "color":"#7f8d89"
        }
      ]
    },
    {
      "featureType":"road.local",
      "elementType":"geometry",
      "stylers":[
        {
          "color":"#000000"
        },
        {
          "lightness":16
        }
      ]
    },
    {
      "featureType":"road.local",
      "elementType":"geometry.fill",
      "stylers":[
        {
          "color":"#7f8d89"
        }
      ]
    },
    {
      "featureType":"road.local",
      "elementType":"geometry.stroke",
      "stylers":[
        {
          "color":"#7f8d89"
        }
      ]
    },
    {
      "featureType":"transit",
      "elementType":"geometry",
      "stylers":[
        {
          "color":"#000000"
        },
        {
          "lightness":19
        }
      ]
    },
    {
      "featureType":"water",
      "elementType":"all",
      "stylers":[
        {
          "color":"#2b3638"
        },
        {
          "visibility":"on"
        }
      ]
    },
    {
      "featureType":"water",
      "elementType":"geometry",
      "stylers":[
        {
          "color":"#2b3638"
        },
        {
          "lightness":17
        }
      ]
    },
    {
      "featureType":"water",
      "elementType":"geometry.fill",
      "stylers":[
        {
          "color":"#24282b"
        }
      ]
    },
    {
      "featureType":"water",
      "elementType":"geometry.stroke",
      "stylers":[
        {
          "color":"#24282b"
        }
      ]
    },
    {
      "featureType":"water",
      "elementType":"labels",
      "stylers":[
        {
          "visibility":"off"
        }
      ]
    },
    {
      "featureType":"water",
      "elementType":"labels.text",
      "stylers":[
        {
          "visibility":"off"
        }
      ]
    },
    {
      "featureType":"water",
      "elementType":"labels.text.fill",
      "stylers":[
        {
          "visibility":"off"
        }
      ]
    },
    {
      "featureType":"water",
      "elementType":"labels.text.stroke",
      "stylers":[
        {
          "visibility":"off"
        }
      ]
    },
    {
      "featureType":"water",
      "elementType":"labels.icon",
      "stylers":[
        {
          "visibility":"off"
        }
      ]
    }
  ]

  var c = {lat: 39.30952601, lng: -76.64848892};

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    // center: c,
    styles: map_styles,
    disableDefaultUI: true
  });

  navigator.geolocation.getCurrentPosition(function(position) {
    current_position = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    map.setCenter(current_position);
  }, function() {
    console.log("Geolocation error");
  });

  $.ajax({
    url: "https://api.mlab.com/api/1/databases/carrollcountyhackathon/collections/app_v1?apiKey=yLgYP8edIJHai0KeSQZy9vE2JGAtcWZr",
    method: "GET"
  }).done(function(response) {

    response.map(function(item, index) {
      var coord_lat = item["loc"]["coordinates"][0];
      var coord_long = item["loc"]["coordinates"][1];
      var team_name = item["team_name"];
      var message = item["text"];

      var marker = new google.maps.Marker({
        position: {lat: coord_lat, lng: coord_long},
        map: map,
        icon: {
          path: MAP_PIN,
          fillColor: "#87D37C",
          fillOpacity: 1,
          strokeColor: "",
          strokeWeight: 0
        },
        map_icon_label: "<span class='map-icon map-icon-point-of-interest'></span>"
      });

      var tooltip = new google.maps.InfoWindow({
        content: "<h3><u>" + team_name + "</u></h3>" + "<p>" + message + "</p>"
      });

      marker.addListener("mouseover", function() {
        tooltip.open(map, marker);
      });
      marker.addListener("mouseout", function() {
        tooltip.close(map, marker);
      });

    });
  });

}

$(document).ready(function() {
  $("#submit_button").click(function(e) {
    e.preventDefault();
    var team_name = $("#team_name").val();
    var message = $("#message_area").val();

    var data = {
      "team_name": team_name,
      "text": message,
      "loc": {
        "type": "Point",
        "coordinates": [
          current_position.lat,
          current_position.lng
        ]
      }
    };

    $.ajax({
      url: "https://api.mlab.com/api/1/databases/carrollcountyhackathon/collections/app_v1?apiKey=yLgYP8edIJHai0KeSQZy9vE2JGAtcWZr",
      method: "POST",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify(data)
    }).done(function(response) {
      console.log("Successfully posted message");
      initMap();
    });
  });
});
