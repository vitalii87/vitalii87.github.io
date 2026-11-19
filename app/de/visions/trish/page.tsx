import { PhilosophicalEssayPage, philosophicalEssayMetadata } from '../../../components/PhilosophicalEssayPage';

export const metadata = philosophicalEssayMetadata('de', 'trish');

export default function Page() {
  return <PhilosophicalEssayPage lang="de" slug="trish" />;
}
