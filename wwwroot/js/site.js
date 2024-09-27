// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
function initialize() {
    const fenway = { lat: 40.4406, lng: -79.9959 };
    const map = new google.maps.Map(document.getElementById("map"), {
      center: fenway,
      zoom: 12,
    });

    const ctaLayer = new google.maps.KmlLayer({
        url: "https://file.io/bI4o7fkRk0NY",
        map: map,
      });

    const panorama = new google.maps.StreetViewPanorama(
      document.getElementById("pano"),
      {
        position: fenway,
        pov: {
          heading: 34,
          pitch: 10,
        },
      },
    );

    map.setStreetView(panorama);
  }
  
  window.initialize = initialize;