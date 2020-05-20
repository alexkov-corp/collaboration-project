import styled from 'styled-components';
import {
  TEXT_COLOR,
  TEXT_TITLE_COLOR,
} from '../../styled/styled-variables';


export const BoutiqueContainer = styled.div`
  width: 100%;
  color: ${TEXT_TITLE_COLOR};
  display: flex;
  flex-direction: column;
`;

export const VideoWrapper = styled.div`
  background: grey;
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
`;

export const TextBlock = styled.div`
  width: 700px;
  margin: 50px 0;
  display: flex;
  align-self: center;
  flex-direction: column;
`;

export const TextTitle = styled.h1`
  border-bottom: 1px solid #ddd;
  font-size: 50px;
  line-height: 50px;
  color: ${TEXT_TITLE_COLOR};
  padding: 25px 0px;
  width: 100%;
`;

export const TextInfo = styled.div`
  border-bottom: 1px solid #ddd;
  line-height: 35px;
  font-size: 23px;
  color: ${TEXT_TITLE_COLOR};
  padding: 25px 0px;
`;

export const Text = styled.div`
  line-height: 25px;
  font-size: 17px;
  color: ${TEXT_COLOR};
  padding: 25px 0px;
`;

export const ContactUsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 0px;
  border-bottom: 1px solid #ddd;
  & > div {
    flex: 1;
    line-height: 23px;
    padding: 0 50px;
    text-align: left;
  }
`

export const DoubleImageBlock = styled.div`
  display: flex;
  height: 700px;
  img {
    flex: 1;
    height: 100%;
    width: auto;
  };
`;

export const FormWrapper = styled.div`
  width: 700px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-self: center;
`;
