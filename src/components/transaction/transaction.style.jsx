import styled from 'styled-components';
export const Table = styled.table`
  margin: 20px auto 0;
`;
export const TableHead = styled.th`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.table};
  width: 150px;
  height: 30px;
`;
export const TableString = styled.tr`
  &:nth-child(even) {
    background-color: #cce4e7;
  }
`;
export const TableCell = styled.td`
  text-align: center;
`;
