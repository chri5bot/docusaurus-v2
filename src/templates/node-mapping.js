import Aside from "../components/Aside"
import Bold from "../components/Bold"
import Blockquote from "../components/Blockquote"
import Default from "../components/Default"
import Div from "../components/Div"
import Code from "../components/Code"
import { Heading1, Heading2, Heading3 } from "../components/Heading"
import Link from "../components/Link"
import Paragraph from "../components/Paragraph"
import Pre from "../components/Pre"
import Span from "../components/Span"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeading,
  TableRow,
} from "../components/Table"

const Nodes = {
  a: Link,
  aside: Aside,
  b: Bold,
  blockquote: Blockquote,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  p: Paragraph,
  code: Code,
  div: Div,
  pre: Pre,
  span: Span,
  table: Table,
  thead: TableHead,
  tbody: TableBody,
  th: TableHeading,
  tr: TableRow,
  td: TableCell,
  default: Default,
}

export default Nodes
