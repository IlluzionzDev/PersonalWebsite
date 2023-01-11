import classNames from 'classnames';
import styles from './animated-effect.module.scss';

export const AnimatedEffect = () => {
    return (
        <div className={styles.background}>
            <div className={classNames(styles.shape, styles.shape__1)} />
            <div className={classNames(styles.shape, styles.shape__2)} />
            <div className={classNames(styles.shape, styles.shape__3)} />
        </div>
    );
};
