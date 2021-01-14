export interface Movies {

}

export interface CategoredMovies{
    category: string,
    movies: Movie[]
}

export interface Movie {
    backdrop: string,
    cast: Array<string>,
    classification: string,
    director: string,
    genres: Array<string>,
    id: string,
    imdb_rating: number,
    imdb_rating_Array?: Array<number>,
    length: string,
    overview: string,
    poster: string,
    released_on: string,
    slug: string,
    title: string
}