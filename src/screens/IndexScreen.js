import React, {Component, useContext, useEffect} from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Context} from '../context/HouseContext';

const IndexScreen = ({navigation}) => {
  const {state, getHouses} = useContext(Context);

  useEffect(() => {
    getHouses();

    const listner = navigation.addListener('didFocus', () => {
      getHouses();
    });
    return () => {
      listner.remove();
    };
  });

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={Houses => Houses.name}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('show', {id: item._id});
              }}>
              <View style={styles.row} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
});

export default IndexScreen;
