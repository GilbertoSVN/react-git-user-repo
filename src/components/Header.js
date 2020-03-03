import React from 'react';

export default function Header() {
  const styles = {
    header: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '20px'
    },
    title: {
      flex: 1,
      margin: '0 0 10px 0'
    },
    description: {
      flex: 1,
      fontSize: '16px',
      margin: 0
    }
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>GitHub</h1>
      <p style={styles.description}>
        Veja os repositórios do seu usuário favorito.
      </p>
    </header>
  );
}
