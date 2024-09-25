# Vélo Route
RouteTour is a web service that converts GPX files to KML format and generates flyover-style videos using Google Earth API street view images. This allows users to visualize the condition and traffic patterns of their routes in an engaging and informative way.
Sure! Here's a README description for your GitHub repository:

## Technical Overview

This project provides a web service that allows users to upload GPX (GPS Exchange Format) files, convert them to KML (Keyhole Markup Language) files, and generate flyover-style videos using Google Earth API street view images. The service is designed to help users visualize the condition and traffic patterns of their routes.

## Features

- **File Upload**: Upload GPX files with drag-and-drop functionality.
- **GPX to KML Conversion**: Convert GPX files to KML format.
- **Map Preview**: Preview the uploaded GPX route and the converted KML route on an interactive map.
- **Video Generation**: Generate a flyover-style video using street view images along the route.
- **Download and Share**: Download the generated KML file and video, or share them via a link.
- **User Authentication**: Register and log in to manage uploaded files and generated videos.
- **Subscription Plans**: Free and premium plans with additional features.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- Google Earth API key

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/gpx-to-kml-converter.git
    cd gpx-to-kml-converter
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add your Google Earth API key and other necessary configurations.

4. Start the development server:
    ```bash
    npm start
    ```

### Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Upload a GPX file using the file upload interface.
3. Preview the route on the map.
4. Convert the GPX file to KML format.
5. Generate a flyover-style video using the Google Earth API.
6. Download or share the generated KML file and video.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature/your-feature-name
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the contributors and the open-source community.
- Special thanks to Google for providing the Google Earth API.
