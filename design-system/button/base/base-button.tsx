import { Box } from '@design-system/layout/box';
import { cssColor, useTheme } from '@design-system/theme';
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
                background: background ? cssColor(background) : 'transparent',
                color: color ? cssColor(color) : undefined,
                borderColor: borderColor
                    ? cssColor(borderColor)
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
                backgroundColor: background ? cssColor(background) : undefined,
                color: color ? cssColor(color) : undefined,
                borderColor: borderColor ? cssColor(borderColor) : undefined,
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
