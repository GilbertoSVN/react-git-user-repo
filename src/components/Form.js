import React from 'react';
import { GoPerson } from 'react-icons/go';

export default function Form({ value, onSubmit, onChange, onKeyPress, error }) {
  const styles = {
    inputDiv: {
      display: 'flex',
      position: 'relative',
      width: '100%'
    },
    input: {
      outline: 'none',
      border: error ? '1px solid red' : '1px solid black',
      borderRadius: '4px',
      height: '35px',
      width: '100%',
      padding: '0 0 0 32px',
      boxSizing: 'border-box',
      fontSize: '14px',
      alignSelf: 'center'
    },
    imagem: {
      position: 'absolute',
      top: '7px',
      left: '5px'
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div style={styles.inputDiv}>
        <input
          style={styles.input}
          type="text"
          value={value}
          onKeyPress={onKeyPress}
          onChange={onChange}
          placeholder="Digite usuário do GitHub"
          data-test="entrada"
        />
        <div style={styles.imagem}>
          <GoPerson color="#000" size={22} />
        </div>
      </div>
    </form>
  );
}
