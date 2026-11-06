import RootDocument, { rootMetadata } from '../../components/layout/RootDocument';

export const metadata = rootMetadata;

export default function RootLayout({ children }) {
  return <RootDocument lang="en-GB">{children}</RootDocument>;
}
