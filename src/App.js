import Wrapper from "./components/Wrapper/Wrapper";
import Screen from "./components/Screen/Screen";
import Button from "./components/Button/Button";
import ButtonBox from "./components/ButtonBox/ButtonBox";

function App() {
  return (
    <Wrapper>
      <Screen value="0" />
        <ButtonBox>
          <Button 
          className=""
          value="0"
          onClick= {()=>{
            console.log("Button clicked !!");
          }}
          />
        </ButtonBox>
    </Wrapper>
  );
}

export default App;
