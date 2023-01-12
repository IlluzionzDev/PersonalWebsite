/* eslint-disable @next/next/link-passhref */
import { Box, BoxProps } from '@design-system/layout/box';
import { Flex } from '@design-system/layout/flex';
import { useTheme } from '@design-system/theme';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const SocialLinks: React.FC<BoxProps> = ({ ...rest }) => {
    const { theme } = useTheme();

    return (
        <Flex gap={4} alignItems="center">
            <Link
                href="https://github.com/IlluzionzDev"
                target="_blank"
                aria-label="GitHub"
            >
                <Box
                    initial={{
                        y: 0,
                    }}
                    whileHover={{
                        color: theme.colors['tertiary500'],
                        y: -2,
                    }}
                    {...rest}
                >
                    <FaGithub />
                </Box>
            </Link>

            <Link
                href="https://www.linkedin.com/in/jaminstratford/"
                target="_blank"
                aria-label="LinkedIn"
            >
                <Box
                    initial={{
                        y: 0,
                    }}
                    whileHover={{
                        color: theme.colors['tertiary500'],
                        y: -2,
                    }}
                    {...rest}
                >
                    <FaLinkedin />
                </Box>
            </Link>

            <Link
                href="https://www.instagram.com/jaminstratford/"
                target="_blank"
                aria-label="Instagram"
            >
                <Box
                    initial={{
                        y: 0,
                    }}
                    whileHover={{
                        color: theme.colors['tertiary500'],
                        y: -2,
                    }}
                    {...rest}
                >
                    <FaInstagram />
                </Box>
            </Link>
        </Flex>
    );
};
