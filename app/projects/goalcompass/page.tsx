import { LocalizedProjectPage, projectMetadata } from '../../components/LocalizedPages';

export const metadata = projectMetadata('en', 'goalcompass');

export default function Page() {
  return <LocalizedProjectPage lang="en" slug="goalcompass" />;
}
