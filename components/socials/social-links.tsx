/* eslint-disable @next/next/link-passhref */
import { BoxProps, Flex, useTheme } from '@illuzionz-studios/design-system';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

const SocialWrapper = styled(Flex).attrs({
    justifyContent: 'center',
    alignItems: 'center',
})`
    &:hover {
        color: var(--primary500);
    }
`;

export const SocialLinks: React.FC<BoxProps> = ({ ...rest }) => {
    return (
        <Flex gap={4} alignItems="center">
            <Link
                href="https://github.com/IlluzionzDev"
                target="_blank"
                aria-label="GitHub"
            >
                <SocialWrapper {...rest}>
                    <FaGithub />
                </SocialWrapper>
            </Link>

            <Link
                href="https://www.linkedin.com/in/jaminstratford/"
                target="_blank"
                aria-label="LinkedIn"
            >
                <SocialWrapper {...rest}>
                    <FaLinkedin />
                </SocialWrapper>
            </Link>

            <Link
                href="https://www.instagram.com/jaminstratford/"
                target="_blank"
                aria-label="Instagram"
            >
                <SocialWrapper {...rest}>
                    <FaInstagram />
                </SocialWrapper>
            </Link>
        </Flex>
    );
};
