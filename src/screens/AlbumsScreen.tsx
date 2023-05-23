import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const AlbumScreen = () => {
  const {logOut, authState} = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>AlbumsScreen</Text>
      {authState.isLoggedIn && <Button title="Log Out" onPress={logOut} />}
    </View>
  );
};
