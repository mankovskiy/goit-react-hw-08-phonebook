import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import { Navigation } from './Navigation';

export const AppBar = () => {
  return (
    <header>
      <UserMenu />
      <AuthNav />
      <Navigation />
    </header>
  );
};
