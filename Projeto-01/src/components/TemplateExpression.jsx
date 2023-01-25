const TemplateExpressions = () => {
  const name = "William";
  const data = {
    age: 31,
    job: "Programmer",
  };

  return (
    <div>
      <h1>Meu nome é {name}</h1>
      <p>Atuo como: {data.job}</p>
    </div>
  );
};

export default TemplateExpressions;
