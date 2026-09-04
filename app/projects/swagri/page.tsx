import { LocalizedProjectPage, projectMetadata } from '../../components/LocalizedPages';

export const metadata = projectMetadata('en', 'swagri');

export default function Page() {
  return <LocalizedProjectPage lang="en" slug="swagri" />;
}
