import Image from 'next/image';
import RightSide from '../../assets/rightSide.png';

const SignIn = () => {

  return (
    <div style={{ width: '100wp', height: '100vh' }} >


      <div style={{ width: '32%', height: '100vh', position: 'relative' }}>
        <Image
          src={RightSide}
          alt='RightSide'
          layout='fill'
          objectFit='cover'
          priority
        />
      </div>
    </div>
  );
};

export default SignIn;