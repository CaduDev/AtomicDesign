import React from 'react';

import { Text, TextProps } from 'react-native';

import { styles } from './styles';

type Props = TextProps & {
  value: string
}

function PostUsername({ value }: Props){
  return <Text style={styles.postUsername}>{value}</Text>;
}

export { PostUsername };