export type Movie = {
    poster: string;
    name: string;
};

export const movies = [
    {poster: "/posters/beachboy.jpg", name: "Beach boy"},
    {poster: "/posters/coffeelady.jpg", name: "Coffee Lady"},
    {poster: "/posters/meditating.jpg", name: "fed Giraffe"},
    {poster: "/posters/Museleum.jpg", name: "Museleum"},
    {poster: "/posters/pisa.jpg", name: "Pisa"},
    {poster: "/posters/scalpture.jpg", name: "Scalpture"},
    {poster: "/posters/sittinglady.jpg", name: "Sitting Lady"},
];

export const randomMoviesset1 = movies
    .sort(() => Math.random() - 0.5)
    .concat(movies.sort(() => Math.random() - 0.5))
    .concat(movies.sort(() => Math.random() - 0.5))

export const randomMoviesSet2 = movies
    .sort(() => Math.random() - 0.5)
    .concat(movies.sort(() => Math.random() - 0.5))
    .concat(movies.sort(() => Math.random() - 0.5))
    .sort(() => Math.random() - 0.5);