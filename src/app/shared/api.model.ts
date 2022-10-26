export interface User {
  address: Address;
  company: Company;
  email: string;
  id: number;
  name: string;
  phone: string;
  posts: Post[];
  username: string;
  website: string;
}

export interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface Address {
  city: string;
  geo: Geo;
  street: string;
  suite: string;
  zipcode: string;
}
export interface Geo {
  lat: string;
  lng: string;
}

export interface Post {
  body: string;
  id: string;
  userId: number;
  title: string;
}
