import { createGlobalStyle } from 'styled-components';
import { COLORS } from './consts';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

img {
  display: block;
  width: auto;
  height: auto;
}

a {
  text-decoration: none;
  color: ${COLORS.default} !important;
}
a:hover {
  color: ${COLORS.main};
}

button {
  box-shadow: none !important;
}

p {
  color: ${COLORS.default};
}

.btn-primary {
  background: ${COLORS.primary};
  border-color:${COLORS.primary};
  box-shadow: none !important;
  
  &:hover {
    background-color: ${COLORS.primaryHover};
    border-color: ${COLORS.primaryHover};
  }


  &:focus {
    background-color: ${COLORS.primary};
    border-color: ${COLORS.primary};
    box-shadow: none;
  }
  &:active {
    background-color: ${COLORS.primaryActive};
    border-color: ${COLORS.primaryActive};
  }
}

  .modal {
    background: rgba(0,0,0, 0.5);
  }

  .accordion-button:not(.collapsed) {
    background: rgba(${COLORS.mainRgb}, 0.1);
    color: ${COLORS.main};

    &::after{
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23e20511'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");    }
  }

  .accordion-button:focus {
    box-shadow: none;
    border-color:  ${COLORS.main};
  }

  .accordion-collapse {
    &.show {
      .accordion-body {
        background: rgba(${COLORS.mainRgb}, 0.02);
      }
    }

    .list-group-item {
      background: none;
    }
  }

  main {
    min-height: calc(100vh - 230px);
  }
`;
