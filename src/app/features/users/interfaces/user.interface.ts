export interface IUser {
    results: IResult[];
    info: IInfo;
}

export interface IInfo {
    seed: string;
    results: number;
    page: number;
    version: string;
}

export interface IResult {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: IDob;
    registered: IDob;
    phone: string;
    cell: string;
    id: ID;
    picture: Picture;
    nat: string;
}

export interface IDob {
    date: Date;
    age: number;
}

export interface ID {
    name: string;
    value: string;
}

export interface ILocation {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: Coordinates;
    timezone: Timezone;
}

export interface Coordinates {
    latitude: string;
    longitude: string;
}

export interface Street {
    number: number;
    name: string;
}

export interface Timezone {
    offset: string;
    description: string;
}

export interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface Name {
    title: string;
    first: string;
    last: string;
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}
