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
    to: '/docs/dev-docs/build-and-run-a-logos-core-module',
    audience: 'C++ developers',
    blurb:
      'Scaffolding, building, packaging, and testing a non-UI business logic module for the Logos Core framework.',
  },
  {
    title: 'Install and load a module in the Logos Basecamp app',
    to: '/docs/dev-docs/install-and-load-a-module-in-the-logos-basecamp-app',
    audience: 'App users',
    blurb:
      'Installing an .lgx module package from the Logos catalogue and loading it from the Basecamp Modules view.',
  },
  {
    title: 'Transfer native tokens on the Logos Execution Zone',
    to: '/docs/dev-docs/transfer-native-tokens-on-the-logos-execution-zone',
    audience: 'LEZ users',
    blurb:
      'Sending native tokens between public and private accounts with the wallet CLI.',
  },
  {
    title: 'Create and transfer custom tokens on the Logos Execution Zone',
    to: '/docs/dev-docs/create-and-transfer-custom-tokens-on-the-logos-execution-zone',
    audience: 'LEZ users',
    blurb:
      'Defining a custom token with the LEZ token program, then transferring it between public and private accounts.',
  },
],
  },
  {
    heading: 'Status — user documentation',
    note: 'Help-centre articles for people using the Status app, reviewed by jorge-campo.',
    samples: [
      {
        title: 'How to run a Status Community: your quick start guide',
        to: '/docs/user-docs/status/how-to-run-a-status-community',
        audience: 'Community owners',
        blurb:
          'Setting up channels, controlling who can join, and using tokens to manage permissions and roles.',
      },
      {
        title: 'About voting to change the community visibility',
        to: '/docs/user-docs/status/about-voting-to-change-the-community-visibility',
        audience: 'SNT holders',
        blurb:
          'How voting to feature a community or change its visibility works, and what each step of the vote costs.',
      },
      {
        title: 'Understand your actions in Status',
        to: '/docs/user-docs/status/understand-your-actions-in-status',
        audience: 'Privacy-conscious users',
        blurb:
          'A reference table of every action Status takes on your behalf, the data it touches, and the third parties involved.',
      },
      {
        title: 'Permissions by role in Status Communities',
        to: '/docs/user-docs/status/permissions-by-role-in-status-communities',
        audience: 'Community admins',
        blurb:
          'Which management tasks each role — member, Admin, TokenMaster, Owner — is allowed to perform.',
      },
      {
        title: 'About the control node in Status Communities',
        to: '/docs/user-docs/status/about-the-control-node-in-status-communities',
        audience: 'Community owners',
        blurb:
          "The machine that holds a community's private key, and what breaks when it goes offline.",
      },
      {
        title: 'Sync your profile across devices',
        to: '/docs/user-docs/status/sync-your-profile-across-devices',
        audience: 'Status users',
        blurb:
          'Pairing a new device on mobile and desktop, and turning syncing off again.',
      },
    ],
  },
  {
    heading: 'Keycard — hardware wallet documentation',
    note: 'I wrote 12 of the 31 articles in the Keycard help centre. Three are reproduced here; the rest link to keycard.tech.',
    samples: [
      {
        title: 'Set up your Keycard with Keycard Shell',
        to: '/docs/user-docs/keycard/set-up-your-keycard-with-keycard-shell',
        audience: 'New Keycard owners',
        blurb:
          'Setting a PIN and a duress PIN, then loading a key pair onto the card using Keycard Shell.',
      },
      {
        title: 'Get to know your Keycard Shell',
        to: '/docs/user-docs/keycard/get-to-know-your-keycard-shell',
        audience: 'New Keycard owners',
        blurb:
          'Hardware orientation: the controls on each side of the device, the keypad, and the on-screen keyboard.',
      },
      {
        title: 'Connect Keycard Shell to MetaMask',
        to: '/docs/user-docs/keycard/connect-keycard-shell-to-metamask',
        audience: 'MetaMask users',
        blurb:
          'Pairing the device with MetaMask so transactions are signed on hardware rather than in the browser.',
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
          I write user and developer documentation for open-source software,
          following a docs-as-code workflow and working with distributed,
          multinational teams.
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
