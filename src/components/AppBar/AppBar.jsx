import { useAuth } from 'hooks/useAuth';
import { FilterField } from 'components/FilterField/FilterField';
import { MainNavigation } from 'components/MainNavigation/MainNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { ComonLinearProgress } from 'components/shared';
import {
  FilterContainer,
  UnauthorizedPageLogo,
  AuthorizedPageLogo,
  StyledAppBar,
} from './AppBarStyled';


export const AppBar = () => {
  const { isLoggedIn, isRefreshing, isPending } = useAuth();

  return (
    <StyledAppBar>
      {isLoggedIn ? (
        <AuthorizedPageLogo>Your personal phonebook site</AuthorizedPageLogo>
      ) : (
        <UnauthorizedPageLogo>The Phonebook</UnauthorizedPageLogo>
      )}

      {isLoggedIn && !isRefreshing ? (
        <FilterContainer>
          <FilterField />
        </FilterContainer>
      ) : null}

      {isLoggedIn ? <UserMenu /> : <MainNavigation />}
      <ComonLinearProgress
        isvisible={isRefreshing || isPending  ? '1' : '0'}
      />
    </StyledAppBar>
  );
};
