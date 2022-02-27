import React from 'react';

import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';

import { SvgProps } from 'react-native-svg';

import { styles } from './styles';

type Props = BorderlessButtonProps & {
  icon: React.FC<SvgProps>;
}

function ButtonIcons({ icon: Icon, ...rest }: Props){
  return (
    <BorderlessButton {...rest} style={styles.postOptionsIcon}>
      <Icon />
    </BorderlessButton>
  );
}

export { ButtonIcons };