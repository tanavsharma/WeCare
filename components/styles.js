import styled from 'styled-components/';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants'

const StatusBarHeight = Constants.statusBarHeight

export const Colors = {
    backgroundApp: '#ffffff',
    logoColor: '#3BB2BF',
    buttonColors: '#218DA6',
    accentColors: '#0C3640',
    accentBackground: '#F0F3F3',
    blackColor: '#000000',
};

const {backgroundApp, logoColor, buttonColors, accountColor, accentBackground, blackColor} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight +10}px;
    background-color: ${backgroundApp};
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${logoColor};
`;

export const SubTitle = styled.Text`
    font-size: 15px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${blackColor};
`;

export const StyledFormArea  = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${backgroundApp};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${backgroundApp};
`;

export const StyledInputLabel = styled.Text`
    color: ${logoColor}
    font-size: 13px
    text-align: left;
`;



export const LeftIcon = styled.TouchableOpacity`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index:1;
`;

export const RightIcon = styled.TouchableOpacity`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index:1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${buttonColors};
    justify-content: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
`;

export const ButtonText = styled.Text`
    color: ${blackColor};
    font-size: 16px;
`;