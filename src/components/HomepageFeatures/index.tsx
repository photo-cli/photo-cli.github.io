import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

type FeatureItem = {
    title: string;
    imageLight: string;
    imageDark: string;
    description: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Organize by Shoot / Taken Date',
        imageLight: '/img/time-light.svg',
        imageDark: '/img/time-dark.svg',
        description: 'Each photograph\'s taken date is a stored within the file in today\'s cameras. This tool creates a new organized folder hierarchy by using this date & time to use in photograph file name and/or folder name.',
    },
    {
        title: 'Organize by Country, Town, Neighbourhood, Street etc.',
        imageLight: '/img/location-light.svg',
        imageDark: '/img/location-dark.svg',
        description: 'Each photograph\'s coordinate is a stored within the file in today\'s cameras. By the help of third-party reverse geocode provider (has free & paid options) his tool gets every coordinate\'s address and uses them in file name and/or folder name.',
    },
    {
        title: 'Not Sticking to Any Application or Third Party Vendor',
        imageLight: '/img/privacy-light.svg',
        imageDark: '/img/privacy-dark.svg',
        description: 'Today, photo organizers are forced to use their applications or website all the time. This CLI tool just needed to be run once. After processing, you can view your photographs on your file system and can be viewed by any application preference.',
    },
];

type FeatureProps = {
    title: string;
    image: string;
    description: string;
};

function Feature(props: FeatureProps) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img
                    className={styles.featureSvg}
                    alt={props.title}
                    src={useBaseUrl(props.image)}
                />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    const { colorMode } = useColorMode();

    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((feature, idx) => {
                        const image = colorMode === 'light' ? feature.imageLight : feature.imageDark;
                        return (
                            <Feature key={idx} image={image} title={feature.title} description={feature.description} />
                        )
                    })}
                </div>
            </div>
        </section>
    );
}