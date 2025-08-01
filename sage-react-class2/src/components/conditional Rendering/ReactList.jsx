function ReactList() {
  const cars = ["BYD", "Tesla", "BMW", "Mercedes"];
  return (
    <div>
      <h1>List of Cars</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>{car}</li>
        ))}
      </ul>
    </div>
  );
}
export default ReactList;
