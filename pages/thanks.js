import Feedback from '../components/Feedback/Feedback';
import MainContainer from '../components/MainContainer';
import ThankYou from '../components/ThankYou/ThankYou';

export default function Thanks() {
  return (
    <MainContainer title={'Thanks'}>
      <ThankYou />
      <Feedback />
    </MainContainer>
  );
}
