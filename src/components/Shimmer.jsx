
const Shimmer = () => {
  return (
    <div data-testid="shimmer" className="restrauntlist">
    {Array(10).fill("").map((e, index) => (
        <div key={index} className="shimmer-card"></div>
    ))}
      
    </div>
  )
}

export default Shimmer;
