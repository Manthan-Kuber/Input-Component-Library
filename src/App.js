import { Main } from "./App.styles";
import Input from "./Components/Input/Input";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyles />
      <Main>
        <h1>Inputs</h1>
        <InputName>{"<Input/>"}</InputName>
        <Input />
        <InputName>{"<Input error />"}</InputName>
        <Input error />
        <InputName>{"<Input disabled />"}</InputName>
        <Input disabled />
        <InputName>{"<Input helperText='Some Interesting text' />"}</InputName>
        <Input helperText="Some Interesting text" />
        <InputName>
          {"<Input helperText='Some Interesting text' error />"}
        </InputName>
        <Input helperText="Some Interesting text" error />
        <InputName>{"<Input defaultValue='Text'>"}</InputName>
        <Input defaultValue="Text" />
        <InputName>{"<Input size='sm />"}</InputName>
        <Input size="sm" />
        <InputName>{"<Input size='md />"}</InputName>
        <Input size="md" />
        <InputName>{"<Input fullWidth />"}</InputName>
        <Input fullWidth />
        <InputName>{"<Input startIcon='search' />"}</InputName>
        <Input startIcon="search" />
        <InputName>{"<Input startIcon='lock' />"}</InputName>
        <Input startIcon="lock" />
        <InputName>{"<Input endIcon='visibility' />"}</InputName>
        <Input endIcon="visibility" />
        <InputName>{"<Input startIcon='code' />"}</InputName>
        <Input startIcon="code" />
        <InputName>{"<Input endIcon='dns' />"}</InputName>
        <Input endIcon="dns" />
        <InputName>{"<Input multiline rows='4' />"}</InputName>
        <Input multiline rows="4" />
        <InputName>{"<Input color='lime' />"}</InputName>
        <Input color="lime" />
      </Main>
      <footer>
        <FooterText>
          Created by{" "}
          <b>
            <u>Manthan Kuber</u>
          </b>
        </FooterText>
      </footer>
    </>
  );
}

export default App;

export const InputName = styled.p`
  font: 400 1.2rem "Ubuntu Mono", sans-serif;
  color: #333;
  margin-top: 4.2rem;
`;

export const FooterText = styled.p`
  font: 1.4rem "Montserrat", sans-serif;
  color: #bdbdbd;
  text-align: center;
`;
