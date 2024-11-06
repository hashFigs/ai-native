import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Global input focus style */
  input:focus, textarea:focus, select:focus {
      outline: 2px solid rgba(103, 80, 164, 0.6); 
      box-shadow: 0 0 0px 0px rgba(103, 80, 164, 0.6); 
      outline-offset: 0;
  }

  /* Style for Material-UI outlined inputs when focused */
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: rgba(103, 80, 164, 0.6) !important; /* Match your preferred color */
  }

  .MuiOutlinedInput-root.Mui-focused {
      box-shadow: 0 0 5px rgba(103, 80, 164, 0.4); /* Adjust shadow if needed */
  }
`;

export default GlobalStyle;
