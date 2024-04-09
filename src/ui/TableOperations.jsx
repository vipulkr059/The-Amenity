import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export default TableOperations;
