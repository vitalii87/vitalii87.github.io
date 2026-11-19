import { PhilosophicalEssayPage, philosophicalEssayMetadata } from '../../../components/PhilosophicalEssayPage';

export const metadata = philosophicalEssayMetadata('de', 'before-the-mirror-of-superintelligence');

export default function Page() {
  return <PhilosophicalEssayPage lang="de" slug="before-the-mirror-of-superintelligence" />;
}
