export interface Movie {
  name: string;
  imageCover: string;
  rate: number;
  discreption: string;
}

export interface CategoryOfFilm {
  id: number,
  title: string,
  films: Movie[]
}

export interface Notification {
  title: string,
  url: string,
  episode: string,
  date: string,
  action: string
}