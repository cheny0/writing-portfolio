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

type Group = {
  heading: string;
  note: string;
  samples: Sample[];
};

const groups: Group[] = [
  {
    heading: 'Logos — developer documentation',
    note: 'Procedures for developers building on Logos Core and the Logos Execution Zone.',
    samples: [
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
],
  },
  {
    heading: 'Status — user documentation',
    note: 'Help-centre articles for people using the Status app, co-authored with jorge-campo.',
    samples: [
      {
        title: 'How to run a Status Community: your quick start guide',
        to: '/docs/procedures/user-docs/how-to-run-a-status-community',
        audience: 'Community owners',
        blurb:
          'Setting up channels, controlling who can join, and using tokens to manage permissions and roles.',
      },
      {
        title: 'About voting to change the community visibility',
        to: '/docs/procedures/user-docs/about-voting-to-change-the-community-visibility',
        audience: 'SNT holders',
        blurb:
          'How voting to feature a community or change its visibility works, and what each step of the vote costs.',
      },
      {
        title: 'Sync your profile across devices',
        to: '/docs/procedures/user-docs/sync-your-profile-across-devices',
        audience: 'Status users',
        blurb:
          'Pairing a new device on mobile and desktop, and turning syncing off again.',
      },
    ],
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
        {groups.map((group) => (
          <div key={group.heading} className={styles.group}>
            <Heading as="h3" className={styles.groupHeading}>
              {group.heading}
            </Heading>
            <p className={styles.groupNote}>{group.note}</p>
            <div className="row">
              {group.samples.map((sample) => (
                <div key={sample.to} className="col col--6 margin-bottom--lg">
                  <Link to={sample.to} className={styles.card}>
                    <span className={styles.cardAudience}>{sample.audience}</span>
                    <Heading as="h4" className={styles.cardTitle}>
                      {sample.title}
                    </Heading>
                    <p className={styles.cardBlurb}>{sample.blurb}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
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
