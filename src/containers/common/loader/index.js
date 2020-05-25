import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

function Loader() {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center',
     backgroundColor: '#F5FCFF88', zIndex: 99999, position: 'absolute',
     top: 0, left: 0, right: 0, bottom: 0}}>
      <ActivityIndicator size={'large'} color={'dodgerblue'} />
    </View>
  );
}

export default Loader;
