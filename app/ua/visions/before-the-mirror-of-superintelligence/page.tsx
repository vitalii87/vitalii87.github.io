import { PhilosophicalEssayPage, philosophicalEssayMetadata } from '../../../components/PhilosophicalEssayPage';

export const metadata = philosophicalEssayMetadata('uk', 'before-the-mirror-of-superintelligence');

export default function Page() {
  return <PhilosophicalEssayPage lang="uk" slug="before-the-mirror-of-superintelligence" />;
}
