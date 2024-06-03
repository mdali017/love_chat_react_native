import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [isValidImage, setIsValidImage] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const validateImageUrl = async () => {
      if (image.trim() === '') {
        setIsValidImage(false);
        return;
      }
      try {
        const response = await fetch(image);
        if (response.ok) {
          setIsValidImage(true);
        } else {
          setIsValidImage(false);
        }
      } catch (error) {
        setIsValidImage(false);
      }
    };

    validateImageUrl();
  }, [image]);

  const handleRegister = async () => {
    const user = {
      name,
      email,
      password,
      image,
    };
    console.log(user);

    try {
      const response = await axios.post('http://10.0.2.2:8005/register', user);

      Alert.alert(
        'Register successful',
        'You have been registered successfully',
      );
      setName('');
      setEmail('');
      setPassword('');
      setImage('');
    } catch (error) {
      console.error(error); // Log the error to the console for debugging
      Alert.alert(
        'Registration Error!!!',
        'An error occurred while registering!',
        [{text: 'OK'}], // Ensure buttons are correctly set
      );
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{padding: 10, alignItems: 'center'}}>
        <KeyboardAvoidingView>
          <View style={{marginTop: 40, textAlign: 'center'}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                color: 'black',
                textAlign: 'center',
              }}>
              Set up your profile
            </Text>
            <Text style={{marginTop: 10, textAlign: 'center'}}>
              Profiles are visible to your friends and connections and groups
            </Text>
            <Pressable>
              <Image
                source={{
                  uri: isValidImage
                    ? image
                    : 'https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg?w=740',
                }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  textAlign: 'center',
                  marginLeft: 146,
                }}
              />
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 4,
                  color: 'gray',
                  fontSize: 12,
                }}>
                Add
              </Text>
            </Pressable>
          </View>
          <View style={{marginTop: 10}}>
            <View>
              <Text style={{fontSize: 18, fontWeight: '600'}}>Name</Text>
              <View>
                <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholderTextColor="#BEBEBE"
                  placeholder="Enter Your Name"
                  style={{
                    width: 320,
                    marginTop: 10,
                    borderBottomColor: '#BEBEBE',
                    borderBottomWidth: 1,
                    paddingBottom: 10,
                    fontFamily: 'GeezaPro-Bold',
                    fontSize: 15,
                  }}
                />
              </View>
            </View>
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
                    marginTop: 10,
                    borderBottomColor: '#BEBEBE',
                    borderBottomWidth: 1,
                    paddingBottom: 10,
                    fontFamily: 'GeezaPro-Bold',
                    fontSize: 15,
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
                  secureTextEntry
                  style={{
                    width: 320,
                    marginTop: 10,
                    borderBottomColor: '#BEBEBE',
                    borderBottomWidth: 1,
                    fontFamily: 'GeezaPro-Bold',
                    fontSize: 15,
                  }}
                />
              </View>
            </View>
            <View>
              <Text style={{fontSize: 18, fontWeight: '600'}}>Image</Text>
              <View>
                <TextInput
                  value={image}
                  onChangeText={setImage}
                  placeholderTextColor="#BEBEBE"
                  placeholder="Enter Your Image URL"
                  style={{
                    width: 320,
                    marginTop: 10,
                    borderBottomColor: '#BEBEBE',
                    borderBottomWidth: 1,
                    paddingBottom: 10,
                    fontFamily: 'GeezaPro-Bold',
                    fontSize: 15,
                  }}
                />
              </View>
            </View>
            <Pressable
              onPress={handleRegister}
              style={{
                width: 200,
                backgroundColor: '#4A55A2',
                padding: 15,
                marginTop: 12,
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
                Register
              </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'gray',
                  fontSize: 16,
                  margin: 12,
                }}>
                Already Have An Account?? Sign In
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
