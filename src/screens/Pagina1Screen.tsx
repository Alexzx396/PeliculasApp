import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {Button, Text, View, TouchableOpacity} from 'react-native';

// import {StackScreenProps} from '@react-navigation/stack/lib/typescript/src/types';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {colores, styles} from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 15}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" size={30} color={colores.primary} />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>

      <Button
        title="Ir a página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text
        style={{
          marginVertical: 20,
          fontSize: 20,
          marginLeft: 5,
        }}>
        Navegar con argumentos
      </Text>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pato',
            })
          }>
          <Icon
            style={{marginBottom: 5}}
            name="man-outline"
            size={40}
            color="white"
          />
          <Text style={styles.botonGrandeTexto}>Pato</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.botonGrande, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Vanessa',
            })
          }>
          <Icon
            style={{marginBottom: 5}}
            name="woman-outline"
            size={40}
            color="white"
          />
          <Text style={styles.botonGrandeTexto}>Vanessa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
