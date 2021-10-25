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
    Colors
} from './../components/styles';

import {View} from 'react-native';
import{Octicons, Ionicons} from '@expo/vector-icons';

const {buttonColors, blackColor} = Colors;

const Login = () =>{
    const [hidePassword, setHidePassword] = useState(true);

    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <SubTitle>Welcome To</SubTitle>
                <PageTitle>WeCare</PageTitle>

                <Formik
                    initialValues={{email:'', password:''}}
                    onSubmit={(values) =>{
                        console.log(values);
                    }}
                >{({handleChange, handleBlur, handleSubmit, values})=>(
                    <StyledFormArea>

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

                    

                    </StyledFormArea>)}
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


export default Login;