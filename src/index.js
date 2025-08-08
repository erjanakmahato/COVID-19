import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './index.css';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2d3748',
    },
    secondary: {
      main: '#4a5568',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#2d3748',
      secondary: '#718096',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
    h1: {
      fontWeight: 700,
      color: '#2d3748',
    },
    h2: {
      fontWeight: 600,
      color: '#2d3748',
    },
    h3: {
      fontWeight: 600,
      color: '#2d3748',
    },
    h4: {
      fontWeight: 600,
      color: '#2d3748',
    },
    h5: {
      fontWeight: 600,
      color: '#2d3748',
    },
    h6: {
      fontWeight: 600,
      color: '#2d3748',
    },
  },
  overrides: {
    MuiCard: {
      root: {
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e2e8f0',
        transition: 'all 0.2s ease',
        '&:hover': {
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        },
      },
    },
    MuiFormControl: {
      root: {
        '& .MuiInputBase-root': {
          borderRadius: '6px',
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          color: '#2d3748',
          '&:hover': {
            borderColor: '#cbd5e0',
          },
        },
        '& .MuiSelect-icon': {
          color: '#4a5568',
        },
        '& .MuiInput-underline:before': {
          borderBottom: 'none',
        },
        '& .MuiInput-underline:after': {
          borderBottom: 'none',
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);