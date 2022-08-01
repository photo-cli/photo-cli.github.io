import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './index.module.css';

function HomepageHeaderBrowser() {
    const {siteConfig} = useDocusaurusContext();
    
    const [size, setSize] = useState({
        x: window.innerWidth,
        y: window.innerHeight
    });
    
    const updateSize = () =>
        setSize({
            x: window.innerWidth,
            y: window.innerHeight
        });
    useEffect(() => (window.onresize = updateSize), []);
    
    const bannerUrl = size.x > 800 ? '/img/logo-banner-desktop.svg' : '/img/logo-banner-mobile.svg';

    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">

                <img
                    className={styles.featureSvg}
                    alt='A photo organizer for your file system without sticking to any application or vendor'
                    src={useBaseUrl(bannerUrl)}
                />
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro-examples">
                        photo-cli tutorial & examples
                    </Link>
                </div>
            </div>
        </header>
    );
}

function HomepageHeaderNode() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <img
                    className={styles.featureSvg}
                    alt='A photo organizer for your file system without sticking to any application or vendor'
                    src={useBaseUrl('/img/logo-banner-desktop.svg')}
                />
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro-examples">
                        photo-cli tutorial & examples
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            description={siteConfig.tagline}>
            <BrowserOnly fallback={<HomepageHeaderNode/>}>
                {() => <HomepageHeaderBrowser/>}
            </BrowserOnly>
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}