import { Flex, Heading, Label } from '@illuzionz-studios/design-system';

type SectionHeaderProps = {
    color: string;
    title: string;
    heading: string;
    subHeading: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    color,
    title,
    heading,
    subHeading,
}) => {
    const titleColor = color + '600';
    const headingColor = color + '900';
    const subHeadingColor = color + '800';

    return (
        <Flex direction="column" gap={6} paddingBottom={11} paddingTop={10}>
            <Flex direction="column" gap={4}>
                <Label variant="xl" color={titleColor}>
                    {title.toUpperCase()}
                </Label>
                <Heading element="h1" variant="display" color={headingColor}>
                    {heading}
                </Heading>
            </Flex>
            <h2>
                <Label variant="xl" color={subHeadingColor}>
                    {subHeading}
                </Label>
            </h2>
        </Flex>
    );
};
