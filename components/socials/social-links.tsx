/* eslint-disable @next/next/link-passhref */
import { BoxProps, Flex, useTheme } from '@illuzionz-studios/design-system';
import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const SocialLinks: React.FC<BoxProps> = ({ ...rest }) => {
    const { theme } = useTheme();

    const colorScheme = 'tertiary';

    return (
        <Flex gap={4} alignItems="center">
            <Link
                href="https://github.com/IlluzionzDev"
                target="_blank"
                aria-label="GitHub"
            >
                <Flex
                    initial={{
                        y: 0,
                    }}
                    whileHover={{
                        color: 'var(--' + colorScheme + '500)',
                        y: -2,
                    }}
                    justifyContent="center"
                    alignItems="center"
                    {...rest}
                >
                    <FaGithub />
                </Flex>
            </Link>

            <Link
                href="https://www.linkedin.com/in/jaminstratford/"
                target="_blank"
                aria-label="LinkedIn"
            >
                <Flex
                    initial={{
                        y: 0,
                    }}
                    whileHover={{
                        color: 'var(--' + colorScheme + '500)',
                        y: -2,
                    }}
                    justifyContent="center"
                    alignItems="center"
                    {...rest}
                >
                    <FaLinkedin />
                </Flex>
            </Link>

            <Link
                href="https://www.instagram.com/jaminstratford/"
                target="_blank"
                aria-label="Instagram"
            >
                <Flex
                    initial={{
                        y: 0,
                    }}
                    whileHover={{
                        color: 'var(--' + colorScheme + '500)',
                        y: -2,
                    }}
                    justifyContent="center"
                    alignItems="center"
                    {...rest}
                >
                    <FaInstagram />
                </Flex>
            </Link>
        </Flex>
    );
};
