import React from 'react';

import { View, Image, Text } from 'react-native';

import {
  ProfileIcon
} from '../../../global/styles/icons';
import { PostAvatar } from '../../atoms/PostAvatar';

import { PostUsername } from '../../atoms/PostUsername';
import { PostLocation } from '../../atoms/PostLocation';

import { styles } from './styles';

type Props = {
  username: string,
  location: string,
}

function PostHeader({ username, location }: Props) {
  return (
    <View style={styles.postHeader}>
      <PostAvatar source={ProfileIcon} />
      <View>
        <PostUsername value={username} />
        <PostLocation value={location} />
      </View>
    </View>
  );
}

export { PostHeader };