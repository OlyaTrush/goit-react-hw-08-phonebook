import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  position: sticky;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  min-height: 76px;
  padding: 14px 20px;
`;

export const UnauthorizedPageLogo = styled('h1')`
  margin: 0;

  font-size: 24px;

  
`;

export const AuthorizedPageLogo = styled('h1')`
  @media screen and (max-width: 599.98px) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  margin: 0;

  font-size: 24px;

  
`;

export const FilterContainer = styled('div')`
  margin-right: 10px;

  @media screen and (min-width: 600px) {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }
`;
