import React from 'react'
import { FlatList, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { CastItem } from './CastItem';

import { Cast } from '../interfaces/creditsInterfaces';
import { MovieFull } from '../interfaces/movideInterface';
// import currencyFormatter from 'currency-formatter';

interface Props {
    movieFull: MovieFull;
    cast: Cast[]
}


export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>

                <View style={{ flexDirection: 'row' }}>
                    <Icon 
                        name="star-outline"
                        color="grey"
                        size={ 16 }
                    />
                    

                    <Text> { movieFull.vote_average }</Text>

                    <Text style={{ marginLeft: 5 }}>
                         - { movieFull.genres.map( g => g.name ).join(', ') }
                    </Text>

                </View>

                {/* Historia */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Historia
                </Text>

                <Text style={{ fontSize: 16 }}>
                    { movieFull.overview }
                </Text>

                {/* Historia */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text 
                    style={{
                    fontWeight:'300',
                    textAlign:'justify',
                    fontSize:16}}>
                    { 
                    new Intl.NumberFormat("en-US",{style:'currency', currency:'USD'})
                    .format(movieFull.budget)
                    }
                </Text> 
                                

            </View>

            {/* Casting */}
            <View style={{ marginTop: 10, marginBottom: 100   }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20}}>
                    Actores
                </Text>

                <FlatList 
                    data={ cast }
                    keyExtractor={ (item, index ) => item.id.toString() + index }
                    renderItem={ ({ item }) => <CastItem actor={ item } /> }
                    horizontal={ true }
                    showsHorizontalScrollIndicator={ false }
                    style={{ marginTop: 10, height: 70 }}
                />
                

            </View>


        </>
    )
}
