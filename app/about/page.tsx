import { aboutMetadata, LocalizedAboutPage } from '../components/LocalizedPages';

export const metadata = aboutMetadata('en');

export default function Page() {
  return <LocalizedAboutPage lang="en" />;
}
