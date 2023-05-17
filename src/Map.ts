import { User } from "./User";
import { Company } from "./Company";

export class Map {
  private map: google.maps.Map;

  constructor(divId: string) {
    // this.map = new Map(document.getElementById(divId) as HTMLElement, {
    //     zoom: 1,
    //     center: {lat:0,lng:0},
    //     mapId: "roadmap ",
    //   });
    async function initMap(): Promise<void> {
      // Request needed libraries.
      const { Map } = (await google.maps.importLibrary(
        "maps"
      )) as google.maps.MapsLibrary;
    //   const { AdvancedMarkerElement } = (await google.maps.importLibrary(
    //     "marker"
    //   )) as google.maps.MarkerLibrary;

      // The map
      this.map = new Map(document.getElementById(divId) as HTMLElement, {
        zoom: 1,
        center: {lat:0,lng:0},
        mapId: "DEMO_MAP_ID",
      });

    }
    initMap();
  }
  addUserMarker(user: User): void {
    async function initMap(): Promise<void> {
      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;
      const marker = new AdvancedMarkerElement({
        map: this.map,
        position: {
          lat: user.location.lat,
          lng: user.location.lng,
        },
      });
    }
    initMap();
  }
  addCompanyMarker(company: Company): void {}
}
