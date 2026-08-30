import { aboutMetadata, LocalizedAboutPage } from '../../components/LocalizedPages';
export const metadata = aboutMetadata('de');
export default function Page() { return <LocalizedAboutPage lang="de" />; }
