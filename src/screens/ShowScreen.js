import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/HouseContext';

const ShowScreen = ({navigation}) => {
  const {state} = useContext(Context);

  const Houses = state.find(house => house._id === navigation.getParam('id'));
  return (
    <View>
      <Text style={styles.details}>House Name :</Text>

      <Text style={styles.content}>{Houses.headOfHouse}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    padding: 15,
    marginHorizontal: 10,
    fontSize: 16,
  },
  content: {
    padding: 15,
    marginHorizontal: 10,
    fontSize: 16,
  },
  details: {
    marginHorizontal: 10,
    marginTop: 12,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ShowScreen;
