import { Profile } from './profile/profile';
import { Statistics } from './stats/statistics';
import { FriendList } from './friends/friends';
import { TransactionHistory } from './transaction/transaction';
import { GlobalStyle } from 'globalstyle';
import user from '../data/user.json';
import data from '../data/data.json';
export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={data} title="Upload stats" />
      <FriendList />
      <TransactionHistory />
      <GlobalStyle />
    </>
  );
};
