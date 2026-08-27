import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type Sample = {
  title: string;
  to: string;
  audience: string;
  blurb: string;
};

const samples: Sample[] = [
  {
    title: 'Build and run a Logos core module',
    to: '/docs/procedures/build-and-run-a-logos-core-module',
    audience: 'C++ developers',
    blurb:
      'Scaffolding, building, packaging, and testing a non-UI business logic module for the Logos Core framework.',
  },
  {
    title: 'Install and load a module in the Logos Basecamp app',
    to: '/docs/procedures/install-and-load-a-module-in-the-logos-basecamp-app',
    audience: 'App users',
    blurb:
      'Installing an .lgx module package from the Logos catalogue and loading it from the Basecamp Modules view.',
  },
  {
    title: 'Transfer native tokens on the Logos Execution Zone',
    to: '/docs/procedures/transfer-native-tokens-on-the-logos-execution-zone',
    audience: 'LEZ users',
    blurb:
      'Sending native tokens between public and private accounts with the wallet CLI.',
  },
  {
    title: 'Create and transfer custom tokens on the Logos Execution Zone',
    to: '/docs/procedures/create-and-transfer-custom-tokens-on-the-logos-execution-zone',
    audience: 'LEZ users',
    blurb:
      'Defining a custom token with the LEZ token program, then transferring it between public and private accounts.',
  },
];

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <p className={styles.heroBody}>
          I write procedures, tutorials, and references for developer products —
          starting from source repositories, RFCs, and conversations with
          engineers, and ending with commands I have run myself.
        </p>
        <div className={styles.heroActions}>
          <Link className="button button--primary button--lg" to="/docs/">
            Read the writing samples
          </Link>
          <Link className="button button--secondary button--lg" to="/about">
            About me
          </Link>
        </div>
      </div>
    </header>
  );
}

function SelectedWork() {
  return (
    <section className={styles.work}>
      <div className="container">
        <Heading as="h2" className={styles.workHeading}>
          Selected work
        </Heading>
        <div className="row">
          {samples.map((sample) => (
            <div key={sample.to} className="col col--6 margin-bottom--lg">
              <Link to={sample.to} className={styles.card}>
                <span className={styles.cardAudience}>{sample.audience}</span>
                <Heading as="h3" className={styles.cardTitle}>
                  {sample.title}
                </Heading>
                <p className={styles.cardBlurb}>{sample.blurb}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Technical writing portfolio — developer documentation for distributed systems.">
      <Hero />
      <main>
        <SelectedWork />
      </main>
    </Layout>
  );
}
