import React from 'react';

import resizeHook from '@/common/hooks/resize';
import Breakpoints from '@/global/styles/breakPoints';

import { ChampData } from '../models/type';

import Champion from './Champion';
import ChampionItem from './ChampionItem';

import './ChampionContainer.scss';

interface ChampionComponentProps {
  champData: ChampData;
  onClick?: Function;
}

const ChampionContainer = ({
  champData,
  onClick,
}: ChampionComponentProps) => {
  const width = resizeHook();
  const isMobile = width < Breakpoints.md;

  return (
    <div className="ChampionContainer">
      <div className="top-container">
        <Champion
          champData={champData}
          onClick={onClick}
          isUsingName
        />
        {!isMobile && <div className="items" />}
      </div>
      <div className="bottom-container">
        {isMobile && <div className="items" />}
        <ChampionItem type="ultimate" />
        <ChampionItem type="spell" />
        <ChampionItem type="spell" />
      </div>
    </div>
  );
};

export default ChampionContainer;
