// ViewedProducts.js
import React from 'react';
import { View, Text, FlatList, Image,StyleSheet,TouchableOpacity } from 'react-native';

const ViewedProducts = ({ viewedProducts }) => {
  return (
    <View>
      <Text style={{ fontSize: 25, margin: 15, fontStyle: 'italic', fontWeight: 'bold' }}>Danh sách sản phẩm đã xem</Text>
      <FlatList
        data={viewedProducts}
        horizontal={true}
        renderItem={({ item }) => (
          <View style={{ alignItems: 'center', gap: 5, margin:5,borderRadius:5,borderWidth:1}}>
            <Image source={{ uri: item.image }} style={{
              width: 200,
              height: 200,
            }} />
            <Text>{item.name}</Text>
            <Text style={{ width: 180, justifyContent: "center" }}>{item.title1}</Text>

            <View style={{flexDirection:'row',alignItems:'center',margin:5}}>
              <Text style={{fontWeight:'bold'}}>{item.price}$</Text>
              <TouchableOpacity style={styles.addToCartButton} >
      <Text style={styles.addToCartButtonText}>+</Text>
    </TouchableOpacity></View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ViewedProducts;
const styles = StyleSheet.create({
  addToCartButton: {
    backgroundColor: '#66CCFF',
    height: 30,
    width: 30,
    borderRadius: 10,
    alignItems: 'center',
  
    marginLeft: 100,
    
  },
  addToCartButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 5,
  },
})
