import React from 'react';

export default function EmptyList() {
  const styles = {
    empty: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100px',
      width: '100%',
      marginTop: '140px'
    },
    image: {
      height: '100px',
      width: '100px'
    }
  };

  return (
    <div style={styles.empty} data-test="sem-repositorios">
      <img
        src={require('../assets/empty.png')}
        alt="Usuário não possui repositórios"
      />
    </div>
  );
}
