import React from 'react'
import PageContainer from './Container';
import { movies, randomMoviesSet2, randomMoviesSet1, Movie } from '../../movie';
import Image from "next/image";

const VideoCarousel = () => {
  return (
    <div className='bg-mainbackground'>
        <div className=' overflow-clip'>
            <div className='left-1/2 -translate-x-1/2 flex gap-5 mb-5 '>
                <div className=' aspect-video shrink-0 w-[60vw] rounded-2xl overflow-clip'>
                    <Image
                        alt={movies[0].name}
                        src={movies[0].poster}
                        height= {560}
                        width= {980}
                        objectFit='cover'
                        
                    />
                </div>
                <div className=' aspect-video shrink-0 w-[60vw] rounded-2xl overflow-clip'>
                    <Image
                        alt={movies[1].name}
                        src={movies[1].poster}
                        height= {680}
                        width= {980}
                        objectFit='cover'
                    />
                </div>
                <div className=' aspect-video shrink-0 w-[60vw] rounded-2xl overflow-clip'>
                    <Image
                        alt={movies[2].name}
                        src={movies[2].poster}
                        height= {720}
                        width= {980}
                        objectFit='cover'
                    />
                </div>
            </div>

        </div>
        <div className='space-y-3'>
            <SmallVideoCarousel movies={randomMoviesSet1}/>
            <SmallVideoCarousel movies={randomMoviesSet2}/>
        </div>
    </div>
  )
};

const SmallVideoCarousel = ({ movies} : {movies: Movie[] }) => {
    return (
        <div className='flex gap-3 overflow-clip'>
            {movies.map((movie, index) => (
                <div key={`${movie.name}-${index}`}
                    className='w-[23vw] shrink-0 rounded-xl'
                >
                <div className='aspect-video rounded-3xl h-[250px] w-[300px] '>
                    <Image
                        alt={movie.name}
                        src={movie.poster}
                        height={250}
                        width={300}
                        object-cover
                    />
                </div>
                </div>
                ))}
        </div>
    )
}

export default VideoCarousel;
