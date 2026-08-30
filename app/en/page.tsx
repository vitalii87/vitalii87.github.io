import { homeMetadata, LocalizedHomePage } from '../components/LocalizedPages';
export const metadata = homeMetadata('en');
export default function Page() { return <LocalizedHomePage lang="en" />; }
