/**
 * Adds a `sample` admonition type on top of the theme's own.
 *
 * The provenance note on each sample is not part of the document — it is my
 * annotation about where the document came from. Rendering it as a normal
 * `:::info` made it read as the author's own callout, especially in articles
 * that already use info and tip admonitions of their own. This gives it a
 * deliberately different treatment: a byline-style <aside> with an accent rule
 * and an inline label, not a boxed callout.
 */
import React, {type ReactNode} from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';

import styles from './styles.module.css';

function Sample({title, children}: {title?: ReactNode; children?: ReactNode}) {
  return (
    <aside className={styles.sample} aria-label="About this writing sample">
      <span className={styles.label}>{title ?? 'Sample'}</span>
      {children}
    </aside>
  );
}

export default {
  ...DefaultAdmonitionTypes,
  sample: Sample,
};
