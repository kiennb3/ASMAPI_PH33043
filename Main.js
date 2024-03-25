// MainScreen.js
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import axios from 'axios';
import NewProducts from './component/NewSP';
import HotProducts from './component/SPhot';
import Banner from './component/Banner';
import ViewedProducts from './component/Viewold';

const MainScreen = () => {
  const [viewedProducts, setViewedProducts] = useState([]);

  useEffect(() => {
    // Fetch viewed products from JSON server
    axios.get('http://192.168.1.47:3000/port')
      .then(response => {
        setViewedProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching viewed products:', error);
      });
  }, []);

  return (
    <ScrollView>
       <Banner />
      {/* Hiển thị danh sách sản phẩm mới */}
      <NewProducts />

      {/* Hiển thị danh sách sản phẩm hot */}
      <HotProducts />

      {/* Hiển thị banner quảng cáo hoặc slideshow */}
     

      {/* Hiển thị danh sách sản phẩm đã xem */}
      <ViewedProducts viewedProducts={viewedProducts} />
    </ScrollView>
  );
};

export default MainScreen;
