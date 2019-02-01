export class Pump {
    // id: number;
    lat: number;
    lon: number;
    notes: string;
    checked: boolean;

    constructor(lat, lon, notes) {
        // this.id = id; // this is automatically auto-incremented by json-server and is unnecessary to put here
        this.lat = lat;
        this.lon = lon;
        this.notes = notes;
        this.checked = false; 
    }
}