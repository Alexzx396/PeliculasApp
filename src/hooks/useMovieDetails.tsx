import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { Cast, CreditsResponse } from '../interfaces/creditsInterfaces';
import { MovieFull } from '../interfaces/movideInterface';




interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}


export const useMovieDetails = ( movieId: number ) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: [],
    });


    const getMovieDetails = async() => {

        const movieDetailsPromise = await movieDB.get<MovieFull>(`/${ movieId }`);
        const castPromise = await movieDB.get<CreditsResponse>(`/${ movieId }/ credits`);

        const [ movieDetailsResp, castPromiseResponse ] = await Promise.all([ 
            movieDetailsPromise, 
            castPromise ]);

        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castPromiseResponse.data.cast,
        })
    }

    useEffect(() => {

        getMovieDetails();
         // eslint-disable-next-line react-hooks/exhaustive-deps
        
    }, []);

      /*
        El ...state es lo mismo que poner:
        isLoading: state.isLoading,
        movieFull: state.movieFull,
        cast: state.cast
        */


    return {
        ...state
    }
    
}
