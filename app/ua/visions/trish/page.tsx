import { PhilosophicalEssayPage, philosophicalEssayMetadata } from '../../../components/PhilosophicalEssayPage';

export const metadata = philosophicalEssayMetadata('uk', 'trish');

export default function Page() {
  return <PhilosophicalEssayPage lang="uk" slug="trish" />;
}
