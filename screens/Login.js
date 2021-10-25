import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {Formik} from 'formik';


import {
    StyledContainer,
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors
} from './../components/styles';

import {View} from 'react-native';
import{Octicons} from '@expo/vector-icons';

const {buttonColors, blackColor} = Colors;

const Login = () =>{
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

                    <MyTextInput />

                    </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}

const MyTextInput = ({label, icon, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={buttonColors} />
            </LeftIcon>

            <styledInputLabel>{label}</styledInputLabel>
            <StyledTextInput {...props} />
        </View>
    )

}


export default Login;