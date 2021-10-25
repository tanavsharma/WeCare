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
    StyledProfileButtonOne,
    StyledProfileButtonTwo,
    ButtonText,
    ButtonTextOne,
    ButtonTextTwo,
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

const Profile = () =>{
    const [hidePassword, setHidePassword] = useState(true);

    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <SubTitle>You are logged into:</SubTitle>
                <PageTitle>WeCare</PageTitle>

                <Formik
                    initialValues={{email:'', password:'', fullname:''}}
                    onSubmit={(values) =>{
                        console.log(values);
                    }}
                >{({handleChange, handleBlur, handleSubmit, values})=>(
                    <StyledFormArea>

                        <MsgBox>What do you want to do?</MsgBox>
                        <StyledProfileButtonOne onPress={handleSubmit}>
                            <ButtonTextOne> Check all patients</ButtonTextOne>
                        </StyledProfileButtonOne>

                        <StyledProfileButtonOne onPress={handleSubmit}>
                            <ButtonTextOne> Check critical patients</ButtonTextOne>
                        </StyledProfileButtonOne>
                        <Line />
                        <StyledProfileButtonTwo onPress={handleSubmit}>
                            <ButtonTextTwo> Add a new patient</ButtonTextTwo>
                        </StyledProfileButtonTwo>

                        <StyledProfileButtonTwo onPress={handleSubmit}>
                            <ButtonTextTwo> Add/edit medical data</ButtonTextTwo>
                        </StyledProfileButtonTwo>
                        

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


export default Profile;