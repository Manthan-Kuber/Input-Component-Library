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
        <Input helperText="Some Interesting text" />
        <Input helperText="Some Interesting text" error />
        <Input value='Text'/>
        <Input size='sm'/>
        <Input size='md'/>
        <Input fullWidth />
        <Input startIcon='search' />
        <Input endIcon='lock' />
      </Main>
    </>
  );
}

export default App;
