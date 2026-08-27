/**
 * Shims for the MDX components used by the Status help articles.
 *
 * The articles under `docs/procedures/user-docs/` are imported almost verbatim
 * from status-im/status-web, where they render against Status's own component
 * library. That library isn't available here, so these stand in for it:
 *
 *   <Admonition type>  -> the Docusaurus admonition of the matching type
 *   <Tabs>/<TabsList>/<TabsTrigger>/<TabsContent>
 *                      -> Docusaurus <Tabs>/<TabItem>
 *   <Table> family     -> a plain HTML table
 *   <ContextTag>       -> an inline chip standing in for a UI label
 *   *Icon              -> nothing (see ./icons.ts)
 *
 * Registered globally in `src/theme/MDXComponents.tsx`.
 */
import React, {type ReactNode} from 'react';
import DocusaurusAdmonition from '@theme/Admonition';
import DocusaurusTabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import styles from './styles.module.css';

// Status admonition types -> Docusaurus admonition types.
const ADMONITION_TYPES: Record<string, string> = {
  info: 'info',
  tip: 'tip',
  caution: 'warning',
  beta: 'note',
};

export function Admonition({
  type = 'info',
  children,
}: {
  type?: string;
  children?: ReactNode;
}) {
  return (
    <DocusaurusAdmonition type={ADMONITION_TYPES[type] ?? 'note'}>
      {children}
    </DocusaurusAdmonition>
  );
}

/** Flatten a trigger's children down to its text, for use as a tab label. */
function textOf(node: ReactNode): string {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join('');
  if (React.isValidElement(node))
    return textOf((node.props as {children?: ReactNode}).children);
  return '';
}

type TriggerProps = {
  value: string;
  step?: number;
  disabled?: boolean;
  children?: ReactNode;
};
type ContentProps = {value: string; children?: ReactNode};

// Status splits tab labels (TabsTrigger, inside TabsList) from tab bodies
// (TabsContent). Docusaurus wants one <TabItem> carrying both, so <Tabs> reads
// its children and pairs them up by `value`.
export function TabsList(_: {children?: ReactNode}) {
  return null;
}
export function TabsTrigger(_: TriggerProps) {
  return null;
}
export function TabsContent(_: ContentProps) {
  return null;
}

export function Tabs({
  defaultValue,
  children,
}: {
  defaultValue?: string;
  children?: ReactNode;
}) {
  const kids = React.Children.toArray(children).filter(React.isValidElement);

  const labels = new Map<string, string>();
  const disabled = new Set<string>();
  for (const list of kids.filter((k) => k.type === TabsList)) {
    const triggers = React.Children.toArray(
      (list.props as {children?: ReactNode}).children,
    ).filter(React.isValidElement);
    for (const t of triggers.filter((t) => t.type === TabsTrigger)) {
      const {value, step, disabled: off, children: label} =
        t.props as TriggerProps;
      // A disabled trigger is a platform Status hasn't shipped yet. It has no
      // matching TabsContent, so drop it rather than render an empty tab.
      if (off) {
        disabled.add(value);
        continue;
      }
      const text = textOf(label).trim();
      labels.set(value, step ? `${step}. ${text}` : text);
    }
  }

  const panels = kids.filter(
    (k) => k.type === TabsContent && !disabled.has((k.props as ContentProps).value),
  );
  if (panels.length === 0) return null;

  const values = panels.map((p) => (p.props as ContentProps).value);
  // Docusaurus throws if defaultValue doesn't match a rendered tab.
  const initial =
    defaultValue && values.includes(defaultValue) ? defaultValue : values[0];

  return (
    <DocusaurusTabs defaultValue={initial}>
      {panels.map((panel) => {
        const {value, children: body} = panel.props as ContentProps;
        return (
          <TabItem key={value} value={value} label={labels.get(value) ?? value}>
            {body}
          </TabItem>
        );
      })}
    </DocusaurusTabs>
  );
}

export function Table({children}: {children?: ReactNode}) {
  return (
    <div className={styles.tableWrapper}>
      <table>{children}</table>
    </div>
  );
}
export function TableHead({children}: {children?: ReactNode}) {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
}
export function TableHeader({children}: {children?: ReactNode}) {
  return <th>{children}</th>;
}
export function TableContent({children}: {children?: ReactNode}) {
  return <tbody>{children}</tbody>;
}
export function TableRow({children}: {children?: ReactNode}) {
  return <tr>{children}</tr>;
}
export function TableCell({children}: {children?: ReactNode}) {
  return <td>{children}</td>;
}

/**
 * A label for something the reader taps or clicks. Status pairs it with an
 * icon; the icon is dropped here, so only the text remains.
 */
export function ContextTag({children}: {icon?: ReactNode; children?: ReactNode}) {
  return <span className={styles.contextTag}>{children}</span>;
}

/**
 * A permission matrix marks an allowed action with this icon and leaves the
 * cell empty otherwise, so unlike the icons beside ContextTag labels it is the
 * only thing carrying the meaning. It has to render something.
 *
 * When importing another article, check for icons used as standalone content
 * rather than as a ContextTag `icon={...}` prop — those need a glyph here, or
 * the page silently loses information.
 */
export function CheckCircleIcon() {
  return (
    <span className={styles.checkIcon} role="img" aria-label="Yes">
      ✓
    </span>
  );
}

/** Marks a link that leaves the site. */
export function ExternalIcon() {
  return (
    <span className={styles.externalIcon} aria-hidden="true">
      ↗
    </span>
  );
}

export function AwaitedList({children}: {children?: ReactNode}) {
  return <>{children}</>;
}
export function Divider() {
  return <hr />;
}
