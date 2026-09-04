import { LocalizedProjectPage, projectMetadata } from '../../components/LocalizedPages';

export const metadata = projectMetadata('en', 'creonix');

export default function Page() {
  return <LocalizedProjectPage lang="en" slug="creonix" />;
}
