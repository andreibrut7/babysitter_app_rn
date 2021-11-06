import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Switch,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Econ from 'react-native-vector-icons/FontAwesome5';
import Header from '../../Component/TabHeader/index';
import Color from '../../../assets/color';

const BookingNotes = ({navigation}) => {
  const [Data, SetData] = useState({
    catSwitch: false,
    dogSwitch: false,
  });
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        title={'notes'}
        rightComp={null}
        leftComp={<Econ name="arrow-left" size={20} color="white" />}
        onPressLeft={() => navigation.pop()}
      />

      <ScrollView>
        <View style={{marginTop: 50, paddingHorizontal: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Switch
              trackColor={{
                false: 'rgba(0,0,0,0.115)',
                true: 'rgba(0,0,0,0.115)',
              }}
              thumbColor={Data.catSwitch ? Color.PrimaryColor : '#f4f3f4'}
              ios_backgroundColor="rgba(0,0,0,0.115)"
              onValueChange={(val) => {
                SetData({...Data, catSwitch: !Data.catSwitch});
              }}
              value={Data.catSwitch}
            />
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                fontFamily: 'Montserrat-Medium',
                marginLeft: 50,
              }}>
              Cats
            </Text>
          </View>

          <View
            style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
            <Switch
              trackColor={{
                false: 'rgba(0,0,0,0.115)',
                true: 'rgba(0,0,0,0.115)',
              }}
              thumbColor={Data.dogSwitch ? Color.PrimaryColor : '#f4f3f4'}
              ios_backgroundColor="rgba(0,0,0,0.115)"
              onValueChange={(val) => {
                SetData({...Data, dogSwitch: !Data.dogSwitch});
              }}
              value={Data.dogSwitch}
            />
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                fontFamily: 'Montserrat-Medium',
                marginLeft: 50,
              }}>
              Dogs
            </Text>
          </View>

          <TextInput
            multiline
            placeholder="Special notes for this job..."
            style={{
              borderRadius: 8,
              padding: 15,
              height: 90,
              width: '100%',
              marginTop: 50,
              textAlignVertical: 'top',
              backgroundColor: 'white',
              fontFamily: 'Montserrat-Medium',
              fontSize: 15,
              color: Color.PrimaryColor,
            }}></TextInput>
        </View>

        <TouchableOpacity
          onPress={() => navigation.popToTop()}
          style={{
            height: 45,
            width: 150,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Color.PrimaryColor,
            alignSelf: 'center',
            marginTop: 50,
            borderRadius: 25,
          }}>
          <Text
            style={{
              fontSize: 15,
              color: 'white',
              fontFamily: 'Montserrat-Medium',
            }}>
            Book Sitter
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 13,
            color: 'black',
            fontFamily: 'Montserrat-Medium',
            textAlign: 'center',
            marginTop: 30,
          }}>
          *Please allow 24hrs for cancellation
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingNotes;
