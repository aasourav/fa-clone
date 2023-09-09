import Layout from "./component/Layout";

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Layout child={<h1>hi</h1>} />
    </div>
  );
}

export default App;
