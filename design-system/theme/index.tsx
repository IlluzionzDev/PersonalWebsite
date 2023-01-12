import { IconButton } from '@design-system/button';
import React, {
    createContext,
    useContext,
    useEffect,
    useLayoutEffect,
    useState,
} from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { darkTheme } from './dark-theme';
import { lightTheme } from './light-theme';

const defaultTheme = {
    color: 'string',
};

export type Theme = typeof defaultTheme;

// Theme object
export const ThemeContext = createContext({
    isDarkTheme: false,
    toggleTheme: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = (): void => {
        setIsDarkTheme((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            <ThemeApplier>{children}</ThemeApplier>
        </ThemeContext.Provider>
    );
};

// Apply theme within context consumer
export const ThemeApplier: React.FC = ({ children }) => {
    useApplyTheme();
    return <>{children}</>;
};

export const ThemeSwitcher = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <IconButton
            onClick={toggleTheme}
            icon={isDarkTheme ? <FaSun /> : <FaMoon />}
        />
    );
};

// Use theme constants
export function useTheme() {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    const theme = isDarkTheme ? darkTheme : lightTheme;
    return { theme, toggleTheme };
}

// Programatically apply theme colours to css variables on render
function useApplyTheme() {
    const { theme } = useTheme();

    useEffect(() => {
        // Base colors
        Object.entries(theme.colors).forEach((color) => {
            document.documentElement.style.setProperty(
                '--' + color[0],
                color[1]
            );
        });

        // RGB Form
        Object.entries(theme.colors).forEach((color) => {
            document.documentElement.style.setProperty(
                '--' + color[0] + 'RGB',
                hexToRgb(color[1]) ? hexToRgb(color[1]) : ''
            );
        });
    }, [theme.colors]);
}

function hexToRgb(hex: string): string | null {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? parseInt(result[1], 16) +
              ', ' +
              parseInt(result[2], 16) +
              ', ' +
              parseInt(result[3], 16)
        : null;
}
