import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ChatScreen = () => {
  return (
    <View>
      <Text>ChatScreen</Text>
      <MaterialIcons name="chat-bubble-outline" size={30} color="red" />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
