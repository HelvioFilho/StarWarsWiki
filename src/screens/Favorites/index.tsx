import React from 'react';
import { CustomText } from '../../components';
import { ScreenScrollContainer } from '../../components/atoms/Container/styles';

import { FavoritesContainer } from './styles';

export function Favorites() {
  return (
    <ScreenScrollContainer>
      <CustomText>Favorites</CustomText>
    </ScreenScrollContainer>
  );
}