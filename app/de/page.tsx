import { homeMetadata, LocalizedHomePage } from '../components/LocalizedPages';
export const metadata = homeMetadata('de');
export default function Page() { return <LocalizedHomePage lang="de" />; }
