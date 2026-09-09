import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type Principle = {
  title: string;
  body: string;
};

const principles: Principle[] = [
  {
    title: 'Evidence first',
    body:
      'I run the software, read the design files, and talk to engineers before writing. Every claim traces back to something I read, ran, or was told.',
  },
  {
    title: 'Templates as specs',
    body:
      'Each document type has a template that fixes the section order and what each section contains. Documents of the same type read the same way.',
  },
  {
    title: 'AI in the workflow',
    body: 'Claude Code helps me build sites, sets up tooling and writes first drafts from my templates.',
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
          multinational teams. Everything here is published, and each sample
          links to the live version.
        </p>
        <div className={styles.heroActions}>
          <Link className="button button--primary button--lg" to="/docs/">
            Read the samples
          </Link>
          <Link className="button button--secondary button--lg" to="/about">
            About me
          </Link>
        </div>
      </div>
    </header>
  );
}

function HowIWork() {
  return (
    <section className={styles.work}>
      <div className="container">
        <Heading as="h2" className={styles.workHeading}>
          How I work
        </Heading>
        <div className="row">
          {principles.map((principle) => (
            <div key={principle.title} className="col col--4">
              <Heading as="h3" className={styles.principleTitle}>
                {principle.title}
              </Heading>
              <p className={styles.principleBody}>{principle.body}</p>
            </div>
          ))}
        </div>
        <p className={styles.workFooter}>
          See <Link to="/about">About</Link> for background and contact details.
        </p>
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
        <HowIWork />
      </main>
    </Layout>
  );
}
