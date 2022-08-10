import { Profile } from './profile/profile';
import { Statistics } from './stats/statistics';
import { FriendList } from './friends/friends';
import { TransactionHistory } from './transaction/transaction';
import { GlobalStyle } from 'globalstyle';
import user from '../user.json';
import data from '../data.json';
export const App = () => {
  return (
    <>
      <div
        style={{
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div>
      <Profile user={user} />
      <Statistics data={data} title="Upload stats" />
      <FriendList />
      <TransactionHistory />
      <GlobalStyle />
    </>
  );
};
