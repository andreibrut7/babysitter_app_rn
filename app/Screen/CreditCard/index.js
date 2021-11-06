import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Form, Item, Input, Label, Icon, Thumbnail, Picker, CheckBox, Textarea, Left, Body, Right, Button } from 'native-base';
import Animated, { Easing, Transition, Transitioning } from 'react-native-reanimated';
import { TapGestureHandler, State, ScrollView } from 'react-native-gesture-handler';
import Styles from '@Screen/SignUp/Style'
import { widthPercentageToDP, heightPercentageToDP, } from '@Theme/Responsive';
//import Svg, { Image, Circle, ClipPath, Path } from 'react-native-svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Color from '@Asset/color';
import AnimateLoadingButton from '@Component/AnimatedButton'; 
import NavigationService from '@Service/Navigation';
import LinearGradient from 'react-native-linear-gradient';
import CreditCard from '@Component/CreditCardComponent';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

export default class extends React.Component{
    constructor(props){
        super(props);
    }

    _onChange = form => console.log(form);

    render(){
        return(
            <LinearGradient
            /* start={{x: 0, y: 0}}
            end={{x: 1, y: 0}} */
            colors={[Color.PrimaryColor, Color.PrimaryColorRGBA_08]}
            style={[
              {
                alignItems: 'center',
                justifyContent: 'center',
                flex:1
              },
            ]}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:Color.PrimaryColorRGBA_08}}>
            <Animated.View style={{
                /* transform: [{
                  scale: this.scaleParentForm
                }], */ ...Styles.container,zIndex:1
              }}>
                
                  <View style={{ ...Styles.keyboardAvoidView, justifyContent: 'center', alignItems: 'center' }}>
                  <View style={{ ...Styles.formModalheader }}>
                        <Left>
                        {/* <TapGestureHandler onHandlerStateChange={closeParentForm}>
                          <Animated.View>
                            <Icon type="MaterialIcons" name='arrow-back' style={{ ...Styles.formIcons, marginLeft: 10 }} />
                            </Animated.View>
                          </TapGestureHandler> */}
                        </Left>
                        <Body /* style={{alignItems:'flex-start'}} */>
                          <Text style={{ ...Styles.modalTitle}}>ADD</Text>
                          
                        </Body>
                        <Right>
                        <TouchableOpacity onPress={()=>{NavigationService.popWithoutParams()}}>
                          <Animated.View>
                            <Icon type="MaterialIcons" name='clear' style={{ color:'#fff', marginLeft: 10 }} />
                            </Animated.View>
                          </TouchableOpacity>
                        </Right>
                      </View>
                      <Text style={{ ...Styles.modalTitle,width:widthPercentageToDP(100), marginBottom:-heightPercentageToDP(1.5),fontSize:widthPercentageToDP(9),letterSpacing:7,textAlign:'center' }}>CREDIT CARD</Text>
                    <View style={{ ...Styles.formModal }}>
                      <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{ ...Styles.formContainer,height:heightPercentageToDP(66) }} contentContainerStyle={{alignItems:'center'}}>
                      <View style={{marginTop:heightPercentageToDP(3)}}>
                      {/* <CreditCard
                        //type={}
                        imageFront={require('@Asset/images/card-front.png')}
                        imageBack={require('@Asset/images/card-back.png')}
                        shiny={true}
                        bar={false}
                        //focused={this.state.focused}
                        number={12345678901234}
                        name={"ABC"}
                        expiry={'24/23'}
                        cvc={1234}
                        /> */}
                        <View style={{width:widthPercentageToDP(70),overflow:'hidden'}} >
                          <CreditCardInput allowScroll={true} requiresName={true} onChange={this._onChange} />
                        </View>
                        
                      </View>
                      </KeyboardAwareScrollView>
                      
                      <View style={{flex:2}}>
                      <AnimateLoadingButton
                          style={{ ...Styles.button}}
                          //ref={c => (loadingButton = c)}
                          width={widthPercentageToDP(70)}
                          height={heightPercentageToDP(5)}
                          title="Submit"
                          titleFontSize={16}
                          borderRadius={30}
                          titleColor="rgb(255,255,255)"
                          backgroundColor="rgba(102, 153, 255,1)"
                          titleFontSize={20}
                          onPress={()=>{
                            
                          }}
                        />
                        </View>
                      
                    </View>
                    {/* <Text style={{width:widthPercentageToDP(80),textAlignVertical:'center',marginTop:heightPercentageToDP(4),color:'#fff'}}>
                        By SignUp you accept our <Text style={{color:Color.PrimaryColor,fontWeight:'bold'}}>Terms and Conditions</Text>
                      </Text> */}
                  </View>
              </Animated.View>
              </View>
              </LinearGradient>
            
        )
    }
}
/* <View style={{flex:1}}>
                <Header style={{backgroundColor:Color.PrimaryColor}}>
                    <Left/>
                    <Body>
                        <Text>
                            Add Credit Cards
                        </Text>
                    </Body>
                    <Right/>
                </Header>
                <Container>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <CreditCard/>
                    </View>
                    
                </Container>
              
            </View> */