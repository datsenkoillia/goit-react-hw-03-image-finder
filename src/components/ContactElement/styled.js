import styled from 'styled-components';

export const ContactItem = styled.li`
  margin-bottom: 10px;
`;

export const ContactButton = styled.button`
  display: inline;
  font-weight: 600;
  height: 24px;
  border-radius: 4px;
  padding: 0 15px;
  margin-left: 15px;
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
