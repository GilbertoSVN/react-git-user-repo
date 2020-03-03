import React from 'react';

export default function NotFound() {
  const styles = {
    notfound: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100px',
      width: '100%',
      marginTop: '100px'
    },
    image: {
      height: '100px',
      width: '100px'
    }
  };

  return (
    <div style={styles.notfound} data-test="nao-encontrado">
      <img src={require('../assets/404.png')} alt="Usuário não encontrado" />
    </div>
  );
}
