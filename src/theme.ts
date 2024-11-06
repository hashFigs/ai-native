import { DefaultTheme } from 'styled-components/native';
import { Platform } from 'react-native';

export const theme: DefaultTheme = {
    colors: {
        primary: '#6667db',
        text: '#999',
        background: '#f9f9f9',
    },
    fonts: {
        regular: Platform.select({
            ios: '-apple-system',
            android: 'Roboto',
            default: 'system-ui', 
        }),
        bold: Platform.select({
            ios: 'Helvetica-Bold',
            android: 'Roboto-Bold',
            default: 'system-ui', 
        }),
    },
    fontsize:{
        small: 10,
        normal: 12,
        title: 18,
        title1: 20,
        title2: 22
    },
    lineHeight: {
        small: 0.75,
        normal: 1,
        extra: 1.5,
    }
};
