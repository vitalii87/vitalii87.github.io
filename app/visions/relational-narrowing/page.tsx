import { LocalizedVisionPage, visionMetadata } from '../../components/LocalizedPages';

export const metadata = visionMetadata('en', 'relational-narrowing');

export default function Page() {
  return <LocalizedVisionPage lang="en" slug="relational-narrowing" />;
}
