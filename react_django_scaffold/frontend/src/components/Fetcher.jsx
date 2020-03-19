import React, { useEffect, useState } from 'react';

const Fetcher = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      fetch('/api/list/')
        .then((res) => res.json())
        .then((res) => setData(res));
    };
    fetchData();
  }, []);

  return (
    data === undefined
      ? <div> Chargement des données </div>
      : (
        <div>
          {data[0].name}
        </div>
      )
  );
};

export default Fetcher;
