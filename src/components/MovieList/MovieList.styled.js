import styled from 'styled-components';

export const MovList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -10px;
`;

export const MovListItem = styled.li`
  width: 240px;
  margin: 10px;
  border-radius: 12px;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  overflow: hidden;
  transition: transform 250ms ease-in-out;
  :hover {
    transform: translateY(-5px);
  }
`;

export const MovListItemPoster = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
`;