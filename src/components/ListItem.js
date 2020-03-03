import React from 'react';
import { GoMarkGithub } from 'react-icons/go';

export default function ListItem({
  name,
  language,
  stars,
  description,
  avatar,
  url
}) {
  const styles = {
    card: {
      dislay: 'flex',
      boxSizing: 'border-box',
      listStyle: 'none',
      margin: '0 0 20px 0',
      padding: '10px 14px 0 14px',
      border: '1px solid black',
      borderRadius: '10px',
      boxShadow: '2px 2px 1px #00aced'
    },
    header: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      padding: '0 0 16px 0',
      margin: 0,
      alignItems: 'center',
      fontSize: '14px',
      height: '40px',
      borderBottom: '1px solid #eee'
    },
    img: {
      height: '36px',
      width: '36px',
      borderRadius: '50%',
      margin: '0 10px 0 0'
    },
    title: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: '10px',
      boxSizing: 'border-box'
    },
    description: {
      display: 'flex',
      flex: '1',
      flexWrap: 'wrap',
      fontSize: '16px',
      margin: '10px 0 0 0',
      padding: '0 0 16px 0',
      borderBottom: '1px solid #eee'
    },
    stats: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    }
  };

  return (
    <li style={styles.card} data-test="repositorio">
      <header style={styles.header}>
        <img style={styles.img} src={avatar} alt="Avatar" />
        <div style={styles.title}>
          <h1>{name}</h1>
          <a href={url}>
            <GoMarkGithub size={20} color="#000" />
          </a>
        </div>
      </header>
      <div style={styles.description}>
        <p>Description: {description ? description : '-'}</p>
      </div>
      <div style={styles.stats}>
        <p>Stars: {stars}</p>
        <p>Languages: {language}</p>
      </div>
    </li>
  );
}
