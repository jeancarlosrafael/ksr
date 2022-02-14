export interface Usuario {
  id: string;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  img?: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name:string;
  catchPhrase:string;
  bs:string;
}

export interface Geo {
  lat: string;
  lng: string;
}
