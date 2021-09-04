import React from 'react';

import ReposSearchPage from '@components/ReposSearchPage';

const App = () => {
  const [value, setValue] = React.useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <ReposSearchPage />
    </div>
  );
};

export default App;
