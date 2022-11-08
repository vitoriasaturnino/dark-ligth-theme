import 'styled-components';

// arquivo para definição dos tipos do TS
declare module 'styled-components' {
  export interface DefaultTheme {
    // formato de um thema criado
    title: string;

    colors: {
      primary: string; 
      scundary: string;

      background: string;
      text: string;
    }
  }
}