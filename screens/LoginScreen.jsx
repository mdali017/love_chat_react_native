import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{padding: 10, alignItems: 'center'}}>
        <KeyboardAvoidingView>
          <View style={{marginTop: 80}}>
            <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>
              Login to your account
            </Text>
          </View>
          <View style={{marginTop: 50}}>
            <View>
              <Text style={{fontSize: 18, fontWeight: '600'}}>Email</Text>
              <View>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholderTextColor="#BEBEBE"
                  placeholder="Enter Your Email"
                  style={{
                    width: 320,
                    marginTop: 15,
                    borderBottomColor: '#BEBEBE',
                    borderBottomWidth: 1,
                    paddingBottom: 10,
                    fontFamily: 'GeezaPro-Bold',
                    fontSize: email ? 15 : 15,
                  }}
                />
              </View>
            </View>
            <View>
              <Text style={{fontSize: 18, fontWeight: '600', marginTop: 25}}>
                Password
              </Text>
              <View>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholderTextColor="#BEBEBE"
                  placeholder="Enter Your Password"
                  style={{
                    width: 320,
                    marginTop: 15,
                    borderBottomColor: '#BEBEBE',
                    borderBottomWidth: 1,
                    paddingBottom: 10,
                    fontFamily: 'GeezaPro-Bold',
                    fontSize: email ? 15 : 15,
                  }}
                />
              </View>
            </View>
            <Pressable
              style={{
                width: 200,
                backgroundColor: '#4A55A2',
                padding: 15,
                marginTop: 50,
                marginLeft: 'auto',
                marginRight: 'auto',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 26,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Login
              </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Register')}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'gray',
                  fontSize: 16,
                  margin: 12,
                }}>
                Don't Have An Account?? Sign UP
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/174938/pexels-photo-174938.jpeg?auto=compress&cs=tinysrgb&w=600',
              }}
              style={{width: 100, height: 100}}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});