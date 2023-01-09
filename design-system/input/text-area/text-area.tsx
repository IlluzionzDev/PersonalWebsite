import { useField } from '@design-system/field/field-context';
import classNames from 'classnames';
import { ChangeEventHandler, CSSProperties } from 'react';
import styles from './text-area.module.scss';

type TextAreaProps = {
    className?: CSSProperties | string;
    disabled?: boolean;
    value: string;
    hasError?: boolean;
} & React.HTMLAttributes<HTMLTextAreaElement>;

/**
 * The raw styled text input
 */
export const TextArea: React.FC<TextAreaProps> = ({
    className,
    value,
    hasError,
    disabled,
    ...rest
}) => {
    const { id, name, error } = useField();

    let ariaDesc;

    if (hasError) {
        ariaDesc = `${id}-error`;
    }

    return (
        <textarea
            name={name}
            className={classNames(
                styles.input,
                hasError ? styles.error : '',
                className
            )}
            rows={4}
            cols={50}
            disabled={disabled}
            aria-disabled={disabled}
            arai-describedby={ariaDesc}
            value={value}
            {...rest}
        />
    );
};
