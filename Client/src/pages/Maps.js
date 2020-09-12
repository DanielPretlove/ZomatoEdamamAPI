import React from "react";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"
import { useHistory } from "react-router-dom";
//MOBX
import { toJS } from 'mobx';
import { observer } from "mobx-react";

const API_KEY = 'AIzaSyDb1D4RL292JnliF9H5BfR7TxTtN1XZIxo';

const Maps = observer((props) => {
  const history = useHistory();

  const Restaurants = toJS(props.store.restaurants.best_rated_restaurant)?.filter(r => r.restaurant.id === history.location.state.resId);
  const SelectedRestaurant = Array.isArray(Restaurants) ? Restaurants[0].restaurant : undefined;
 
  
  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: Number(SelectedRestaurant.location.latitude), lng: Number(SelectedRestaurant.location.longitude) }}
    >
      <Marker
        position={{ lat: Number(SelectedRestaurant.location.latitude), lng: Number(SelectedRestaurant.location.longitude)}}
      />
    </GoogleMap>
  ));

  return (
    <div className="GoogleMaps">

      <h2>{SelectedRestaurant ? SelectedRestaurant.name + " in " + SelectedRestaurant.location.city : "No Data"}</h2>

      {SelectedRestaurant ?
      <MapWithAMarker
        googleMapURL = {`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,place`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `765px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
         
      /> : <h2>Cannot load Map Data</h2>}


    </div>
  )
});

export default Maps;