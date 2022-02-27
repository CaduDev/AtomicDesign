import React from 'react';

import { View } from 'react-native';

import { ButtonIcons } from '../../atoms/ButtonIcons';

import {
  MessengerIcon,
  FavoriteIcon,
  CommentIcon,
  SaveIcon,
} from '../../../global/styles/icons';

import { styles } from './styles';

function PostOptions(){
  return (
    <View style={styles.postOptions}>
      <View style={styles.postOptionsSide}>
        <ButtonIcons icon={FavoriteIcon} />
        <ButtonIcons icon={CommentIcon} />
        <ButtonIcons icon={MessengerIcon} />
      </View>

      <ButtonIcons icon={SaveIcon} />
    </View>
  );
}

export { PostOptions };