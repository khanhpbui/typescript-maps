/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Map } from "./Map";
import { Company } from "./Company";

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const userMap = new Map("map");
userMap.addUserMarker(user)




// let map: google.maps.Map;
// async function initMap(): Promise<void> {

//   const position = { lat: company.location.lat, lng: company.location.lng };

//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

//   // The map
//   map = new Map(
//     document.getElementById('map') as HTMLElement,
//     {
//       zoom: 4,
//       center: position,
//       mapId: 'DEMO_MAP_ID',
//     }
//   );

//   // The marker
//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: position, 
//   });
// }

// initMap();