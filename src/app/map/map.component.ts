import { Component } from '@angular/core';
import * as L from 'leaflet';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  implements   AfterViewInit {
 

    ngAfterViewInit() {
      const mymap = L.map('mapid').setView([-23.013104, -43.394365], 13);
  
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Zay Telmplte | Template Design by <a href="https://templatemo.com/">Templatemo</a> | Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
      }).addTo(mymap);
  
      L.marker([-23.013104, -43.394365]).addTo(mymap)
        .bindPopup("<b>Zay</b> eCommerce Template<br />Location.")
        .openPopup();
  
      mymap.scrollWheelZoom.disable();
      mymap.touchZoom.disable();
    }
  }