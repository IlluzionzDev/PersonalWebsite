import { Flex } from '@design-system/layout/flex';
import classNames from 'classnames';
import { HTMLMotionProps } from 'framer-motion';
import { CSSProperties } from 'react';
import { Field } from '../field/field';
import { FieldError } from '../error/field-error';
import { FieldLabel } from '../label/field-label';
import styles from './text-field.module.scss';
import { TextInput } from '@design-system/input/text';
import { useField } from '../field-context';

type FieldInputProps = {
    disabled?: boolean;
    value: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Expose all variables to a field
 */
export const FieldInput: React.FC<FieldInputProps> = ({
    disabled,
    value,
    ...rest
}) => {
    const { id, name, error } = useField();

    return (
        <TextInput value={value} hasError={Boolean(error)} id={id} {...rest} />
    );
};

type TextFieldProps = {
    className?: CSSProperties | string;
    disabled?: boolean;
    value: string;
    name: string;
    id: string;
    label?: string;
    error?: string;
    motion?: HTMLMotionProps<'div'>;
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Master component for a field of text
 */
export const TextField: React.FC<TextFieldProps> = ({
    className,
    disabled,
    value,
    name,
    id,
    label,
    error,
    motion,
    ...rest
}) => {
    return (
        <Field
            id={id}
            name={name}
            error={error}
            className={classNames(styles.field, className)}
            {...motion}
        >
            <Flex direction="column" gap={1}>
                {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
                <FieldInput
                    id={id}
                    value={value}
                    disabled={disabled}
                    {...rest}
                />
                <FieldError />
            </Flex>
        </Field>
    );
};
