import { Nav } from '@/components/navigation/main-nav';
import styles from './page.module.css';
import ContentContainer from '@/components/content-container';
import { SocialLinks } from '@/components/navigation/social-links';

export default function Home() {
    return (
        <main>
            <div className="min-h-screen flex flex-col">
                <div id="hero" className="h-full flex flex-col flex-1">
                    <Nav />
                    <div className="flex flex-row items-center flex-1">
                        <ContentContainer>
                            <div className="flex flex-col gap-20 w-full">
                                <h1 className="font-extrabold text-7xl leading-tight">
                                    Jamin Stratford,
                                    <br />
                                    <span className={styles.hero_animation}>
                                        Software
                                    </span>{' '}
                                    Engineer
                                </h1>
                                <div className="flex flex-row justify-between">
                                    <SocialLinks />
                                    <h2 className="font-semibold">
                                        Hi, I&apos;m Jamin Stratford, a
                                        Full-Stack Software Engineer
                                    </h2>
                                </div>
                            </div>
                        </ContentContainer>
                    </div>
                </div>
            </div>
            <ContentContainer>
                <div
                    id="main-sections"
                    className="flex flex-col gap-4 w-full py-8"
                >
                    <div className="rounded-2xl bg-slate-200 p-8">
                        <h2 className="font-bold text-2xl text-slate-800">
                            About
                        </h2>
                    </div>
                </div>
            </ContentContainer>
        </main>
    );
}
