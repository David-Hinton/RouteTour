function initialize() {
    let map, panorama, coordinates = [];
    let isPaused = false; // Flag to control the update

    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.48986, lng: -79.90089 },
        zoom: 14,
    });

    const routeLayer = new google.maps.KmlLayer({
        url: "https://file.io/uL4wVRnPccgY", // file.io upload
        map: map,
    });

    panorama = new google.maps.StreetViewPanorama(
        document.getElementById("pano"),
        {
            position: { lat: 40.48986, lng: -79.90089 },
            pov: { heading: 34, pitch: 10 },
        },
    );

    map.setStreetView(panorama);

    async function fetchKML() {
        try {
            const response = await fetch('http://192.168.1.160:8080/TestFile.kml'); //local server with cors enabled:  http-server -p 8080 --cors
            const kmlText = await response.text();
            const parser = new DOMParser();
            const kmlDoc = parser.parseFromString(kmlText, 'application/xml');
            return Array.from(kmlDoc.getElementsByTagName('Placemark'));
        } catch (error) {
            console.error('Error fetching KML:', error);
        }
    }

    fetchKML().then((result) => {
        if (result) {
            result.forEach(placemark => {
                coords = placemark.getElementsByTagName('coordinates')[0].textContent.trim().split(" ").map(point => {
                    const [longitude, latitude, elevation] = point.split(",");
                    return { lng: parseFloat(longitude), lat: parseFloat(latitude), elevation: parseFloat(elevation) };
                });
                console.log('Coords loaded:', coords);
                coordinates.push({
                    lat: parseFloat(coords[0].lat),
                    lng: parseFloat(coords[0].lng)
                });
            });
            console.log('Placemarks loaded:', coordinates);
            let index = 0;

            function updatePosition() {
                if (isPaused) return; // Check if paused
                console.log('coords', coords);
                if (index < coords.length) {
                    const nextCoord = coords[index];
                    panorama.setPosition(nextCoord);
                    if (index > 0) {
                        const prevCoord = coords[index - 1];
                        const heading = google.maps.geometry.spherical.computeHeading(prevCoord, nextCoord);
                        panorama.setPov({ heading: heading, pitch: 0 });
                    }
                    index++;
                    setTimeout(updatePosition, 3000);
                }
            }

            updatePosition();

            // Add click event to toggle pause
            document.getElementById("pause").addEventListener("click", () => {
                isPaused = !isPaused;
                if (!isPaused) updatePosition(); // Resume if unpaused
            });
        }
    });
}

window.initialize = initialize;
