import React from 'react';

export default function Container({ children }) {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      padding: '10px 0',
      margin: 'auto',
      width: '20%',
      justifyContent: 'center'
    }
  };

  return <div style={styles.container}>{children}</div>;
}
