import styled from '@emotion/styled';
import backgroundImage from '../../assets/images/background.png';
import logo from '../../assets/images/logo.png';
import pinkLine from '../../assets/images/pinkLine.png';

export const Item = styled.li`
  position: relative;

  width: 380px;
  height: 460px;
  padding-top: 284px;

  background-image: url(${backgroundImage}), url(${logo}), url(${pinkLine}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);

  background-repeat: no-repeat;
  background-position: 36px 28px, 20px 20px, center, center;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  transform: translate(-50%, -50%);
`;

export const Image = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 9px solid #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Text = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ebd8ff;
  text-transform: uppercase;
  :first-of-type {
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  padding: 14px 28px;

  width: 196px;
  height: 50px;
  margin-top: 26px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;
