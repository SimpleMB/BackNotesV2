import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 40px;
  height: 40px;
  background-color: transparent;
  background-image: url(${({ icon }) => icon});
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  border-radius: 7px;
  :hover {
    cursor: pointer;
    border: 2px solid white;
  }
`;

export default ButtonIcon;
