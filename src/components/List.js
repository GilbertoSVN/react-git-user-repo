import React from 'react';

import ListItem from './ListItem';

export default function List({ repository }) {
  const styles = {
    list: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      marginTop: '20px',
      justifyContent: 'center'
    }
  };

  return (
    <div style={styles.list}>
      {repository.map(repo => (
        <ListItem
          key={repo.id}
          name={repo.name}
          language={repo.language}
          stars={repo.stargazers_count}
          description={repo.description}
          avatar={repo.owner.avatar_url}
          url={repo.html_url}
        />
      ))}
    </div>
  );
}
