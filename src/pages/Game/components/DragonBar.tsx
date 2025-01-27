import React from 'react';
import cs from 'classnames';
import { useTranslation } from 'react-i18next';

import dragon from '@/common/images/dragon.png';
import downArrow from '@/common/images/downArrow.png';
import upArrow from '@/common/images/upArrow.png';

import './DragonBar.scss';
import useGameData from '../hooks/useGameData';

function DragonBar() {
  const { dragonCnt, updateDragonCnt } = useGameData();
  const { t } = useTranslation();

  const isMaxCnt = dragonCnt === 4;
  const isMinCnt = dragonCnt === 0;

  const upDragonCnt = () => updateDragonCnt(dragonCnt + 1);

  const downDragonCnt = () => updateDragonCnt(dragonCnt - 1);

  return (
    <div className="dragonContainer" id="dragonContainer">
      <div className="dragonBar">
        <span className="notice-container">
          <img src={dragon} alt="바람용" className="dragonImg" />
          <p>{t('game.dragonBar.infoBeforeCount')}</p>
          <div className="countBox">{ dragonCnt }</div>
          <p>{t('game.dragonBar.infoAfterCount')}</p>
        </span>
        <div className="control-contianer">
          <div className={cs('arrowBox no-drag', { disabled: isMaxCnt })} onClick={upDragonCnt}>
            <img src={upArrow} alt="바람용 횟수 화살표" />
          </div>
          <div className={cs('arrowBox no-drag', { disabled: isMinCnt })} onClick={downDragonCnt}>
            <img src={downArrow} alt="바람용 횟수 화살표" />
          </div>
        </div>
      </div>
    </div>

  );
}

export default DragonBar;
