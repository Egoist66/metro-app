import Form from "../Form/Form";
import Search from "../Search/Search";

const App = () => {
  return (
    <div className="app-wrapper">

      <h1>Поиск станций Московского метрополитена</h1>

      <Form>

        <Search />

      </Form>



    </div>
  );
}

export default App;
