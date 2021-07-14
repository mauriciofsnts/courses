import React from 'react';

import {DetailText} from '../../';

import {LoaderIndicator, LoaderContainer} from './styles';

export const Loader = ({text}) => {
  return (
    <LoaderContainer>
      <LoaderIndicator color="white" size="large" />

      <DetailText>{text || 'Carregando...'} </DetailText>
    </LoaderContainer>
  );
};
