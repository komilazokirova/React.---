function Counter() {
  const a = 10;
  const b = 5;

  return (
    <div>
      <h2>Hisoblash misoli</h2>
      <p>Qo'shish: {a} + {b} = {a + b}</p>
      <p>Ayirish: {a} - {b} = {a - b}</p>
      <p>Ko'paytirish: {a} * {b} = {a * b}</p>
    </div>
  );
}

export default Counter;