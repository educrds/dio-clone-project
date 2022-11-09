import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  max-width: 275%;
  height: 30px;
  border-bottom: 1px solid #3b3450;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const ErrorMessage = styled.p`
  color: #ff0000;
  margin: 10px 0;
  font-size: 0.7rem;
`;
const IconContainer = styled.div`
  margin-right: 10px;
`;
const InputText = styled.input`
  background-color: transparent;
  color: #fefefe;
  border: 0;
  width: 100%;
  height: 30px;
`;

export { InputContainer, IconContainer, InputText, ErrorMessage };
