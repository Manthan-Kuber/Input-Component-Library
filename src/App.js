import { Main } from "./App.styles";
import Input from "./Components/Input/Input";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Main>
        <h1>Inputs</h1>
        <Input />
        <Input error />
        <Input disabled />
        <Input helperText="Some nice text" />
        <Input helperText="Some Interesting text" error />
        <Input value="Text" />
        <Input size="sm" />
        <Input size="md" />
        <Input fullWidth />
        <Input startIcon="search" />
        <Input endIcon="search" />
        <Input multiline rows='4' />
        <Input color='green' />
      </Main>
    </>
  );
}

export default App;
