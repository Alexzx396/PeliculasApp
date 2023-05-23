import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';

import {SettingsScreen} from '../screens/SettingsScreen';
import {
  useWindowDimensions,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colores, styles} from '../theme/appTheme';
import {Tabs} from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{drawerType: width >= 768 ? 'permanent' : 'front'}}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://www.pngkit.com/png/full/302-3022217_roger-berry-avatar-placeholder.png',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de menú */}
      <View style={styles.menuContainer}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            style={{marginRight: 15}}
            name="map-outline"
            size={20}
            color="black"
          />
          <TouchableOpacity
            style={styles.menuBoton}
            onPress={() => navigation.navigate('Tabs')}>
            <Text style={styles.menuTexto}>Navegación</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            style={{marginRight: 15}}
            name="settings-outline"
            size={20}
            color="black"
          />
          <TouchableOpacity
            style={styles.menuBoton}
            onPress={() => navigation.navigate('SettingsScreen')}>
            <Text style={styles.menuTexto}>Ajustes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
