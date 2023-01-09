import { Label } from '@design-system/typography';

/**
 * Label describing a field
 */
export const FieldLabel: React.FC<React.HTMLAttributes<HTMLLabelElement>> = ({
    children,
    ...rest
}) => {
    return (
        <Label variant="md" color="black">
            <label {...rest}>{children}</label>
        </Label>
    );
};
