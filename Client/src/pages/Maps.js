import React, { useState } from "react";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"
import { useHistory } from "react-router-dom";
import MapStyles from "./MapStyles";
//MOBX
import { toJS } from 'mobx';
import { observer } from "mobx-react";

const Maps = observer((props) => {
  const history = useHistory();

  const Restaurants = toJS(props.store.restaurants.best_rated_restaurant)?.filter(r => r.restaurant.id === history.location.state.resId);
  const SelectedRestaurant = Array.isArray(Restaurants) ? Restaurants[0].restaurant : undefined;
 
  const options =  {
    disableDefaultUI: true,
  }
  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={9}
      defaultCenter={{ lat: SelectedRestaurant.location.latitude, lng: SelectedRestaurant.location.longitude }}
    >
      <Marker
        position={{ lat: SelectedRestaurant.location.latitude, lng: SelectedRestaurant.location.longitude}}
      />
    </GoogleMap>
  ));

  return (
    <div className="GoogleMaps">

      <h2>{SelectedRestaurant ? SelectedRestaurant.name + " in " + SelectedRestaurant.location.city : "No Data"}</h2>

      
      <MapWithAMarker
        googleMapURL = {`https://maps.googleapis.com/maps/api/js?key=AIzaSyDb1D4RL292JnliF9H5BfR7TxTtN1XZIxo&v=3.exp&libraries=geometry,drawing,place`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `670px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
         
      />


    </div>
  )
});

export default Maps;