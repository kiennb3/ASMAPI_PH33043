import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Caidat = () => {
  const [name, setName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleLogout = () => {
    // Xử lý logic đăng xuất ở đây
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hồ sơ sinh viên</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên sinh viên"
        value={name}
        onChangeText={text => setNameD(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập mã sinh viên"
        value={studentID}
        onChangeText={text => setStudentID(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Button title="Đăng xuất" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:20,
    alignItems:"center",
    backgroundColor:'#FFF',
    justifyContent: 'center',
    shadowColor:'red',
    shadowOffset:{
      width:2,
      height:2
    },
    shadowOpacity:1,
    shadowRadius:8,
    elevation:10,
    borderRadius:10,
    backgroundColor:'#fff'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius:10
  },
});

export default Caidat;
