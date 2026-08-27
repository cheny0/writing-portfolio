/**
 * Global MDX component map.
 *
 * MDX resolves capitalized tags through this map, and a name that isn't here
 * fails the build. The Status help articles under `docs/procedures/user-docs/`
 * are imported close to verbatim, so every component they reference has to be
 * registered — including all 139 icons, which render nothing.
 */
import MDXComponents from '@theme-original/MDXComponents';

import * as StatusDocs from '@site/src/components/StatusDocs';
import {ICON_NAMES} from '@site/src/components/StatusDocs/icons';

const NullIcon = () => null;

const icons = Object.fromEntries(
  ICON_NAMES.map((name) => [name, NullIcon]),
) as Record<string, typeof NullIcon>;

export default {
  ...MDXComponents,
  ...icons,
  // Named exports win over the null icons: ExternalIcon does render something.
  Admonition: StatusDocs.Admonition,
  Tabs: StatusDocs.Tabs,
  TabsList: StatusDocs.TabsList,
  TabsTrigger: StatusDocs.TabsTrigger,
  TabsContent: StatusDocs.TabsContent,
  Table: StatusDocs.Table,
  TableHead: StatusDocs.TableHead,
  TableHeader: StatusDocs.TableHeader,
  TableContent: StatusDocs.TableContent,
  TableRow: StatusDocs.TableRow,
  TableCell: StatusDocs.TableCell,
  ContextTag: StatusDocs.ContextTag,
  ExternalIcon: StatusDocs.ExternalIcon,
  CheckCircleIcon: StatusDocs.CheckCircleIcon,
  AwaitedList: StatusDocs.AwaitedList,
  Divider: StatusDocs.Divider,
};
