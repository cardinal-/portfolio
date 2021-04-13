import styled from '@emotion/styled';
import {colors} from '../styles';

const Button = styled.button`
  outline: none;
  border: none;
  background: none;
  font: inherit;
  padding: 1rem 1.6rem;
  color: ${colors.primaryLight};
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  line-height: 1.2;
`;

export const PrimaryButton = styled(Button)`
  background: ${colors.secondaryDark};
  margin-bottom: 5.4rem;
`