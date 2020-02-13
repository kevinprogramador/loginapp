import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

//mapbox

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  
  map : mapboxgl.Map;

  ngOnInit() {


    mapboxgl.accessToken =  environment.mapbox;
    this.map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 17,
    center: [-70.63419, -33.58331]
    });

    
    this.map.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true

        },
      trackUserLocation: true
        })
      );
    
}
    
}
