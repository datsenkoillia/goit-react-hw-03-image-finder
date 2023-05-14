import styled from 'styled-components';

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 5px;
`;

export const InputField = styled.input`
  width: 200px;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.button`
  font-weight: 600;
  height: 24px;
  border-radius: 4px;
  padding: 0 15px;
  transition: 300ms;
  border: none;
  background-color: rgb(173, 173, 173);
  cursor: pointer;

  &:hover,
  &:focus {
    color: red;
    background-color: #000;
  }
`;

export const Form = styled.form`
  padding: 20px;
  border: 2px solid black;
  max-width: 400px;
  margin-bottom: 20px;
`;
