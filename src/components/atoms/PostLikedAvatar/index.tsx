import React from 'react';

import { Image, ImageProps } from 'react-native';

import { styles } from './styles';


function PostLikedAvatar({ ...rest }: ImageProps){
  return (
    <Image {...rest} style={styles.lastLiked} />
  );
}

export { PostLikedAvatar };