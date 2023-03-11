import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBack } from 'react-icons/md';

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  margin-bottom: 40px;
  padding: 5px;
  color: #a1a1a1;
  background-color: #dde1e7;
  border-radius: 25px;
  box-shadow: 2px 2px 5px #babecc, -5px -5px 10px #ffffff73;
  transition: color 250ms ease-in-out;
  :hover {
    color: #FBCEB1;
  }
`;

export const BackLinkIcon = styled(MdOutlineArrowBack)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;