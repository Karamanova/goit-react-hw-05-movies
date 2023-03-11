import styled from 'styled-components';

export const GenresList = styled.ul`
  display: flex;
`;

export const GenresListItem = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`;