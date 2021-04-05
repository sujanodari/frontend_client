import { StylesProvider } from "@material-ui/core/styles";

import Routes from "./Routes";

import "../assets/sass/main.scss";

const App = () => {
  return (
    <StylesProvider injectFirst>
      <Routes />
    </StylesProvider>
  );
};

export default App;
