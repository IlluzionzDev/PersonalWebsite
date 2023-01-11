import { Box } from '@design-system/layout/box';
import { useTheme } from '@design-system/theme';
import { Label } from '@design-system/typography';
import classNames from 'classnames';
import { HTMLMotionProps, motion, Target, VariantLabels } from 'framer-motion';
import { CSSProperties, ReactNode } from 'react';
import styles from './base-button.module.scss';

export type BaseButtonProps = {
    className?: CSSProperties | string;
    style?: CSSProperties;
    initial?: any;
    color?: string;
    background?: string;
    borderColor?: string;
    radius?: 'sm' | 'md' | 'lg';
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    disabled?: boolean;
    fullWidth?: boolean;
} & HTMLMotionProps<'button'>;

export const BaseButton: React.FC<BaseButtonProps> = ({
    children,
    initial,
    className,
    style,
    color,
    background,
    borderColor,
    radius,
    startIcon,
    endIcon,
    disabled,
    fullWidth,
    ...rest
}) => {
    const { theme } = useTheme();

    return (
        <motion.button
            initial={{
                background: background
                    ? theme.colors[background]
                    : 'transparent',
                color: color ? theme.colors[color] : undefined,
                borderColor: borderColor
                    ? theme.colors[borderColor]
                    : 'transparent',
                ...initial,
            }}
            className={classNames(
                styles.baseButton,
                fullWidth ? styles.fullWidth : '',
                className
            )}
            disabled={disabled}
            aria-disabled={disabled}
            style={{
                backgroundColor: background
                    ? 'var(--' + background + ')'
                    : undefined,
                color: color ? 'var(--' + color + ')' : undefined,
                borderColor: borderColor
                    ? 'var(--' + borderColor + ')'
                    : undefined,
                borderRadius: radius
                    ? theme.borderRadius[radius]
                    : theme.borderRadius['sm'],
                ...style,
            }}
            {...rest}
        >
            {startIcon && <Box className={styles.iconWrapper}>{startIcon}</Box>}
            <Label variant="button">{children}</Label>
            {endIcon && <Box className={styles.iconWrapper}>{endIcon}</Box>}
        </motion.button>
    );
};
