/// <reference types="@types/google.maps" />
import { User } from "./User";

const user = new User();
console.log(user);

let map: google.maps.Map;
async function initMap(): Promise<void> {
  const position = { lat: user.location.lat, lng: user.location.lng };

  // Request needed libraries.
  //@ts-ignore
  const { Map } = (await google.maps.importLibrary(
    "maps"
  )) as google.maps.MapsLibrary;
  const { AdvancedMarkerElement } = (await google.maps.importLibrary(
    "marker"
  )) as google.maps.MarkerLibrary;

  // The map
  map = new Map(document.getElementById("map") as HTMLElement, {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
  });
}

initMap();
