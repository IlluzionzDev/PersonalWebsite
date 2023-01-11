import { Flex } from '@design-system/layout/flex';
import { Label } from '@design-system/typography';
import styles from './footer.module.scss';

export const Footer = () => {
    return (
        <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            paddingTop={4}
            className={styles.footer}
        >
            <Label variant="xl" className={styles.footer__author}>
                Designed & Built by Jamin Stratford
            </Label>
            <div className={styles.footer__decoration}></div>
        </Flex>
    );
};
