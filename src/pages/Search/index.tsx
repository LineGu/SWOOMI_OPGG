import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchValue, setValue] = useState<string>('');

  const getMatchTeamCode = async () => {
    const { data } = await axios.get(`http://3.34.111.116:8070/v1/match/status/${searchValue}`);
    const { matchTeamCode } = data.data;
    return matchTeamCode;
  };

  const onClickSearchBtn = async () => {
    const { data } = await axios.get(`http://3.34.111.116:8070/v1/match/${searchValue}`);
    if (data.data.matchStatus === false) {
      alert('게임 시작 안함');
    } else {
      const matchTeamCode = await getMatchTeamCode();
      window.location.href = `/game/${matchTeamCode}`;
    }
  };

  return (
    <div>
      <div>Search page!</div>
      <input value={searchValue} onChange={(e) => setValue(e.target.value)} />
      <button onClick={onClickSearchBtn}>검색</button>
    </div>
  );
};

export default Search;
