import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

import {Formik} from 'formik';


import {
    StyledContainer,
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputTheLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent
} from './../components/styles';

import {View} from 'react-native';
import{Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

const {buttonColors, blackColor, backgroundApp} = Colors;

const Signup = () =>{
    const [hidePassword, setHidePassword] = useState(true);

    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <SubTitle>Signup To</SubTitle>
                <PageTitle>WeCare</PageTitle>

                <Formik
                    initialValues={{email:'', password:'', fullname:''}}
                    onSubmit={(values) =>{
                        console.log(values);
                    }}
                >{({handleChange, handleBlur, handleSubmit, values})=>(
                    <StyledFormArea>

                        <MyTextInput 
                            label="Full Name"
                            icon="person"
                            placeholder="John Doe"
                            placeholderTextColor={blackColor}
                            onChangeText={handleChange('fullname')}
                            onBlur={handleBlur('fullname')}
                            value={values.fullname}
                        />

                        <MyTextInput 
                            label="Email Address"
                            icon="mail"
                            placeholder="johndoe@gmail.com"
                            placeholderTextColor={blackColor}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email"
                        
                        />

                               <MyTextInput 
                            label="Confirm Email Address"
                            icon="mail"
                            placeholder="johndoe@gmail.com"
                            placeholderTextColor={blackColor}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email"
                        
                        />


                        <MyTextInput 
                            label="Password"
                            icon="lock"
                            placeholder="********"
                            placeholderTextColor={blackColor}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword = {true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}                      
                        />

                        <MyTextInput 
                            label="Confirm Password"
                            icon="lock"
                            placeholder="********"
                            placeholderTextColor={blackColor}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword = {true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}                      
                        />
                        <MsgBox>.......</MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText> Sign Up </ButtonText>
                        </StyledButton>
                        <Line />
                        <ExtraView>
                            <ExtraText>Already have an account? </ExtraText>
                            <TextLink>
                                <TextLinkContent>Login!</TextLinkContent>
                            </TextLink>
                        </ExtraView>

                    </StyledFormArea>
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={buttonColors} />
            </LeftIcon>

            <StyledInputTheLabel>{label}</StyledInputTheLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={buttonColors} />
    
                </RightIcon>
            )}
        </View>
    )

}


export default Signup;