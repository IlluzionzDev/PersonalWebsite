import { useTheme } from '@design-system/theme';
import { CSSProperties } from 'react';
import { BaseButton, BaseButtonProps } from '../base/base-button';
import styles from './button.module.scss';

type ButtonVariants = 'primary' | 'secondary' | 'tertiary';

type ButtonProps = {
    className?: CSSProperties | string;
    variant: ButtonVariants;
    colorScheme?: string;
} & BaseButtonProps;

export const Button: React.FC<ButtonProps> = ({
    children,
    className,
    variant,
    colorScheme,
    ...rest
}) => {
    const { theme } = useTheme();

    // Different color styles
    let buttonVariantStyles: BaseButtonProps = {};

    if (variant === 'primary') {
        let focusStyles = {
            background: theme.colors[colorScheme + '600'],
        };

        buttonVariantStyles = {
            background: colorScheme + '500',
            color: 'white',
            whileHover: focusStyles,
            whileFocus: focusStyles,
        };
    } else if (variant === 'secondary') {
        let focusStyles = {
            background: 'transparent',
        };

        buttonVariantStyles = {
            background: colorScheme + '100',
            borderColor: colorScheme + '200',
            color: colorScheme + '600',
            whileHover: focusStyles,
            whileFocus: focusStyles,
        };
    } else if (variant === 'tertiary') {
        let focusStyles = {
            background: theme.colors[colorScheme + '100'],
        };

        buttonVariantStyles = {
            background: undefined,
            borderColor: colorScheme + '300',
            color: colorScheme + '600',
            whileHover: focusStyles,
            whileFocus: focusStyles,
        };
    }

    return (
        <BaseButton
            transition={{ type: 'spring', bounce: 0.6 }}
            className={className}
            {...buttonVariantStyles}
            {...rest}
        >
            {children}
        </BaseButton>
    );
};