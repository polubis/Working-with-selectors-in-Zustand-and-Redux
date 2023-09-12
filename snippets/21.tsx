import { store, type AppState } from './store';
 
// Regular Redux selector.
const getAuthorizedUser = (state: AppState) => state.userSlice.user;
// Static selector.
const getAuthorizationStatus = () => getAuthorizedUser(store.getState()).authorized;
 
import { useRouter } from 'next/navigation';
 
const AnyComponent = () => {
  const router = useRouter();
 
  const handleClick = () => {
    // No rerender!
    if (getAuthorizationStatus()) {
      router.push('/sign-out');
    } else {
      router.push('/sign-in');
    }
  };
 
  return <Button onClick={handleClick}>Click me!</Button>;
};