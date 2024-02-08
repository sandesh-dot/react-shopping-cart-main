import sandesh from './sandesh.jpg';
import * as S from './style';

const Recruiter = () => (
  <S.Container>
    <S.Thumbnail>
      <img
        alt="Sandesh Koirala"
        src={sandesh}
      />
    </S.Thumbnail>
    <S.Description>
      <h4>
        Work in the Nepal
        <S.Flag />
      </h4>
      <p>
        Hi! I'm Sandesh Koirala from Nepal doing Internet and Intranet Assignment of Krista maam. Lets go.,{' '}
        <a href="https://www.linkedin.com/in/sandesh-koirala-331936212/">
          <b>follow me on Linkedin.</b>
        </a>
      </p>
    </S.Description>
  </S.Container>
);

export default Recruiter;
