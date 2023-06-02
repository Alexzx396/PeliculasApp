import React from 'react';
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground'
// import ImageColors from 'react-native-image-colors';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
   

    if ( isLoading ) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={ 100 } />
            </View>
        )
    }

    const getPosterColors = async ( index: number ) => {
        const movie = nowPlaying[index];
        const uri  = `https://image.tmdb.org/t/p/w500${ movie.poster_path}`;
        console.log(movie.poster_path);
  
        // const colors = await ImageColors.getImageColors(uri, {});
        // console.log(colors);
     }

    return (

        <GradientBackground>
                <ScrollView>

                    <View style={{ marginTop: top + 20 }}>
                        
                        {/* Carosel Principal */}
                        <View style={{ height: 440, flexDirection: 'row' }}>
                            <Carousel 
                                data={ nowPlaying }
                                renderItem={ ({ item }: any) => <MoviePoster movie={ item } /> }
                                sliderWidth={ windowWidth }
                                itemWidth={ 300 }
                                inactiveSlideOpacity={0.9}
                                onSnapToItem={ index => getPosterColors( index )}
                            />
                        </View>

                        {/* Películas populares */}
                        <HorizontalSlider title="Popular" movies={ popular }/>
                        <HorizontalSlider title="Top Rated" movies={ topRated } />
                        <HorizontalSlider title="Upcoming" movies={ upcoming } />


                        </View>
                </ScrollView>
        </GradientBackground>
    )
}



































































































































        
