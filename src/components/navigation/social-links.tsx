import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import Link from 'next/link';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import styles from './social-links.module.css';
import { cn } from '@/lib/utils';

export const SocialLinks = () => {
    return (
        <ul className="flex flex-row gap-4 items-center">
            <li>
                <Link
                    href="mailto:jaminstratford@gmail.com"
                    target="_blank"
                    aria-label="E-mail"
                >
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className={cn('w-4 h-4', styles.social__link)}
                    />
                </Link>
            </li>
            <li>
                <Link
                    href="https://github.com/IlluzionzDev"
                    target="_blank"
                    aria-label="GitHub"
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        className={cn('w-4 h-4', styles.social__link)}
                    />
                </Link>
            </li>
            <li>
                <Link
                    href="https://www.linkedin.com/in/jaminstratford/"
                    target="_blank"
                    aria-label="LinkedIn"
                >
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className={cn('w-4 h-4', styles.social__link)}
                    />
                </Link>
            </li>
            <li>
                <Link
                    href="https://www.instagram.com/jaminstratford/"
                    target="_blank"
                    aria-label="Instagram"
                >
                    <FontAwesomeIcon
                        icon={faInstagram}
                        className={cn('w-4 h-4', styles.social__link)}
                    />
                </Link>
            </li>
        </ul>
    );
};
