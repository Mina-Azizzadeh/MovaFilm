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