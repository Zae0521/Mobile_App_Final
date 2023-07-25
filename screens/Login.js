import React, { useEffect, useState } from "react";
import {
  Modal,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import axios from "axios";
import "../global";

export const Login = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState([]);
  const [Acctt, setAccount] = useState([]);

  const handlePassword = async (value) => {
    setPassword(value);
    console.log(password);
  };

  const handleUser = async (value) => {
    setUser(value);
    console.log(user);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}
        backgroundColor="#42D1A6"
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView} backgroundColor="#42D1A6">
            <TextInput
              limit={20}
              style={styles.textfield}
              placeholder="User Name"
              onChangeText={handleUser}
            />
            <TextInput
              className="mt-3"
              placeholder="Password"
              secureTextEntry={true}
              style={styles.textfield}
              onChangeText={handlePassword}
            />
            <TouchableOpacity
              className="mt-3"
              style={[styles.button, styles.buttonClose]}
            >
              <Text style={styles.textStyle}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#42D1A6",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textfield: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#00F33D",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
