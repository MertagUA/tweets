import { formatNumber } from 'utils/formatNumber';
import { Button, Image, ImageWrapper, Item, Text } from './TweetsItem.styled';
import { useEffect, useState } from 'react';
import { getLocalStorageItem, setLocalStorageItem } from 'utils/LocalStorage';

export const TweetsItem = ({ usersData }) => {
  const { user, tweets, followers, avatar } = usersData;

  const [follow, setFollow] = useState(
    getLocalStorageItem(user)?.follow || false
  );
  const [currentColor, setCurrentColor] = useState('#EBD8FF');
  const [currentFollowers, setCurrentFollowers] = useState(followers);

  const followToggle = () => {
    setFollow(prevState => !prevState);
  };

  useEffect(() => {
    setLocalStorageItem(user, { follow });

    setCurrentFollowers(follow ? followers + 1 : followers);

    setCurrentColor(follow ? '#5CD3A8' : '#EBD8FF');
  }, [user, follow, followers]);

  const formatedTweets = formatNumber(tweets);
  const formatedFollowers = formatNumber(currentFollowers);

  return (
    <Item>
      <ImageWrapper>
        <Image src={avatar} alt={user} width="80px" height="80px" />
      </ImageWrapper>
      <Text>{formatedTweets} tweets</Text>
      <Text>{formatedFollowers} followers</Text>
      <Button
        type="button"
        onClick={followToggle}
        style={{ backgroundColor: currentColor }}
      >
        {follow ? 'Following' : 'Follow'}
      </Button>
    </Item>
  );
};
