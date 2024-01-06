import { createContext, useState, useMemo } from "react";
import { createTheme} from "@mui/material/styles";

// Color tokens
export const tokens = (mode) => ({
    ...(mode === 'dark'
        ? {
            gray: {
                100: '#B8B8B8',
                200: '#A3A3A3',
                300: '#8F8F8F',
                400: '#7A7A7A',
                500: '#666666',
                600: '#4A4A4A',
                700: '#2E2E2E',
                800: '#121212',
                900: '#000000'
            },
            primary: {
                100: '#ADBADB',
                200: '#91A2CE',
                300: '#748AC1',
                400: '#5872B5',
                500: '#465F9E',
                600: '#3A4E82',
                700: '#2D3D65',
                800: '#212C49',
                900: '#141B2D'
            },
            greenAccent: {
                100: '#FFFFFF',
                200: '#FFFFFF',
                300: '#FFFFFF',
                400: '#ECFAF6',
                500: '#CCF1E7',
                600: '#ACE8D9',
                700: '#8CE0CA',
                800: '#6CD7BB',
                900: '#4CCEAC'
            },
            redAccent: {
                100: '#FFFFFF',
                200: '#FFFFFF',
                300: '#FFFFFF',
                400: '#FDF4F4',
                500: '#F6D3D2',
                600: '#EFB2B0',
                700: '#E9918E',
                800: '#E2706C',
                900: '#DB4F4A'
            },
            blueAccent: {
                100: '#FFFFFF',
                200: '#FFFFFF',
                300: '#FFFFFF',
                400: '#FFFFFF',
                500: '#FFFFFF',
                600: '#DEE0FE',
                700: '#B7BBFD',
                800: '#8F95FB',
                900: '#6870FA'
            },
        } : {
            gray: {
                100: '#000000',
                200: '#121212',
                300: '#2E2E2E',
                400: '#4A4A4A',
                500: '#666666',
                600: '#7A7A7A',
                700: '#8F8F8F',
                800: '#A3A3A3',
                900: '#B8B8B8'
            },
            primary: {
                100: '#141B2D',
                200: '#212C49',
                300: '#2D3D65',
                400: '#3A4E82',
                500: '#465F9E',
                600: '#5872B5',
                700: '#748AC1',
                800: '#91A2CE',
                900: '#ADBADB'
            },
            greenAccent: {
                100: '#4CCEAC',
                200: '#6CD7BB',
                300: '#8CE0CA',
                400: '#ACE8D9',
                500: '#CCF1E7',
                600: '#ECFAF6',
                700: '#FFFFFF',
                800: '#FFFFFF',
                900: '#FFFFFF'
            },
            redAccent: {
                100:  '#DB4F4A',
                200:  '#E2706C',
                300:  '#E9918E',
                400:  '#EFB2B0',
                500:  '#F6D3D2',
                600:  '#FDF4F4',
                700: '#FFFFFF',
                800:  '#FFFFFF',
                900: '#FFFFFF'
            },
            blueAccent: {
                100: '#6870FA',
                200: '#8F95FB',
                300: '#B7BBFD',
                400: '#DEE0FE',
                500: '#FFFFFF',
                600: '#FFFFFF',
                700: '#FFFFFF',
                800: '#FFFFFF',
                900: '#FFFFFF'
            },
        }),
});

export const  themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
            ? {
                primary: {
                    main: colors.primary[500],
                },
                        secondary: {
                    main: colors.greenAccent[500]
                },
                        neutral: {
                    dark: colors.gray[700],
                    main: colors.gray[500],
                    light: colors.gray[100]
                },
                background:   {
                    default: colors.primary[500],
                }
                } : {
                primary: {

                    main: colors.primary[100],
                        },
                    secondary: {
                      main: colors.greenAccent[500]
                        },
                    neutral: {
                      dark: colors.gray[700],
                      main: colors.gray[500],
                      light: colors.gray[100]
                        },
                    background:   {
                      default: '#fcfcfc',
                   },
                }),
        },
        typography: {
            fontFamily: ["Source Code Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Code Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Code Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Code Pro","sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Code Pro","sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Code Pro","sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Code Pro","sans-serif"].join(","),
                fontSize: 14,
            },
        }
    };
};

// context for color mode

export const ColorModeContext = createContext({
    toggleColorMode: () => {

    }
});

export const  useMode = () => {
    const [mode, setMode ] = useState("dark");
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
    []
    );
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme,colorMode];
}


