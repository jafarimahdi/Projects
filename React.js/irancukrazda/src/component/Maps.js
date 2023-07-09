import React from "react";
import {
    InfoWindow,
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

class Maps extends React.Component {
    render() {
        const MapWithAMarker = withScriptjs(
            withGoogleMap((props) => (
                <GoogleMap
                    defaultZoom={14}
                    defaultCenter={{
                        lat: 47.49860879695496,
                        lng: 19.06518534465765,
                    }}
                >
                    <Marker
                        position={{
                            lat: 47.49881289263656,
                            lng: 19.064279082698405,
                        }}
                    >
                        {/* <infoWindow>
                            <div>irancukrazda</div>
                        </infoWindow> */}
                    </Marker>

                    <Marker
                        position={{
                            lat: 47.49901127842058,
                            lng: 19.066500127849203,
                        }}
                    />
                </GoogleMap>
            ))
        );

        return (
            <div>
                <MapWithAMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAY4M3D3SLG-2WJig3eUvC_fgp938vVrDE&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `450px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}
export default Maps;
