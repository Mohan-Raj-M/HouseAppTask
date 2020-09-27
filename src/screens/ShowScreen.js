import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/HouseContext';

const ShowScreen = ({navigation}) => {
  const {state} = useContext(Context);

  const Houses = state.find(house => house._id === navigation.getParam('id'));
  return (
    <View>
      <Text style={styles.details}>House Name :</Text>
      <Text style={styles.title}>{Houses.name}</Text>
      <Text style={styles.details}>Founder :</Text>
      <Text style={styles.content}>{Houses.founder}</Text>
      <Text style={styles.details}>School :</Text>
      <Text style={styles.content}>{Houses.school}</Text>
      <Text style={styles.details}>House ghost :</Text>
      <Text style={styles.content}>{Houses.houseGhost}</Text>
      <Text style={styles.details}>mascot :</Text>
      <Text style={styles.content}>{Houses.mascot}</Text>
      <Text style={styles.details}>House Head :</Text>
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
