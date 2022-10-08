import "./App.css";

function App() {
  const onClickBtn = () => {
    alert("눌럿스비낟");
  };

  return (
    <div>
      <p>Instagram</p>
      <button onClick={onClickBtn}>시작하기</button>
    </div>
  );
}

export default App;
