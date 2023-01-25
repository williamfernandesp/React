const Challenge = () => {
  function soma(a, b) {
    return a + b;
  }

  return (
    <div>
      <h2>Challenge</h2>
      <button onClick={() => console.log(soma(2, 2))}>Somar</button>
    </div>
  );
};

export default Challenge;
