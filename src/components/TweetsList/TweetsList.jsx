import { TweetsItem } from 'components/TweetsItem/TweetsItem';
import { useEffect, useState } from 'react';
import { fetchTweets } from 'services/user-api';
import { List, LoadMoreButton } from './TweetsList.styled';

export const TweetsList = () => {
  const [usersData, setUserData] = useState(null);
  const [page, setPage] = useState(1);

  const onLoadMoreBtnClick = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    async function fetchUsersData() {
      try {
        const result = await fetchTweets(page);
        if (page !== 1) {
          setUserData(prevState => [...prevState, ...result]);
          return;
        }
        return setUserData(result);
      } catch (error) {}
    }
    fetchUsersData();
  }, [page]);

  return (
    <>
      {usersData ? (
        <List>
          {usersData.map(({ id, ...otherProps }) => (
            <TweetsItem id={id} usersData={otherProps} key={id} />
          ))}
        </List>
      ) : (
        <h2>No users</h2>
      )}
      {page !== 4 && (
        <LoadMoreButton type="button" onClick={onLoadMoreBtnClick}>
          Load More
        </LoadMoreButton>
      )}
    </>
  );
};
