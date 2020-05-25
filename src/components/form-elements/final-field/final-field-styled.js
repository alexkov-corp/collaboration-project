import styled from 'styled-components';


export const FinalFieldContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 10px 0;
`;

export const Label = styled.label`
  
`;

export const Error = styled.div`
  padding: 0 20px;
  text-align: left;
  color: darkred;
`;

export const FinalInput = styled.input`
  padding: 0 25px;
  height: 50px;
  line-height: 50px;
  background: none;
  font-size: 16px;
  font-weight: normal;
  border: 1px solid rgb(153, 153, 153);
  color: rgb(153, 153, 153);
  width: calc(100% - 52px);
`;

export const FinalCheckBox = styled.input`
  border: 1px solid rgb(153, 153, 153);
  height: 25px;
  width: 25px;
`;
