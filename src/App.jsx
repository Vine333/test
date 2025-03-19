import styled from "styled-components";
import './App.css'

function App() {


  return (
    <Wrapper>

    <div className='square'></div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  .square {
    background-color: #000000;
    width: 200px;
    height: 200px;

  }
`

export default App
