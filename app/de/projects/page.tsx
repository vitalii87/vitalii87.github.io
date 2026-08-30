import { LocalizedProjectsPage, projectsMetadata } from '../../components/LocalizedPages';
export const metadata = projectsMetadata('de');
export default function Page() { return <LocalizedProjectsPage lang="de" />; }
