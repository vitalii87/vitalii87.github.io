import { LocalizedProjectsPage, projectsMetadata } from '../../components/LocalizedPages';
export const metadata = projectsMetadata('en');
export default function Page() { return <LocalizedProjectsPage lang="en" />; }
