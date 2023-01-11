/* eslint-disable @next/next/link-passhref */
import { Box } from '@design-system/layout/box';
import { Flex } from '@design-system/layout/flex';
import { useTheme } from '@design-system/theme';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const SocialLinks = () => {
    const { theme } = useTheme();

    return (
        <Flex gap={4} alignItems="center">
            <Link
                href="https://github.com/IlluzionzDev"
                target="_blank"
                aria-label="GitHub"
            >
                <Box
                    whileHover={{
                        color: theme.colors['tertiary700'],
                    }}
                >
                    <FaGithub />
                </Box>
            </Link>

            <Link
                href="https://www.linkedin.com/in/jaminstratford/"
                target="_blank"
            >
                <Box
                    whileHover={{
                        color: theme.colors['tertiary700'],
                    }}
                >
                    <FaLinkedin />
                </Box>
            </Link>

            <Link
                href="https://www.instagram.com/jaminstratford/"
                target="_blank"
            >
                <Box
                    whileHover={{
                        color: theme.colors['tertiary700'],
                    }}
                >
                    <FaInstagram />
                </Box>
            </Link>
        </Flex>
    );
};
