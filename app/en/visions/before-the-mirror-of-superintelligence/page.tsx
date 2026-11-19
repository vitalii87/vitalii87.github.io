import { PhilosophicalEssayPage, philosophicalEssayMetadata } from '../../../components/PhilosophicalEssayPage';

export const metadata = philosophicalEssayMetadata('en', 'before-the-mirror-of-superintelligence');

export default function Page() {
  return <PhilosophicalEssayPage lang="en" slug="before-the-mirror-of-superintelligence" />;
}
