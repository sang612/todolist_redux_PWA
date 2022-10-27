import "./_Playground/SCSS/main.scss";
import Top from "./pages/todo/Top";
import Body from "./pages/todo/Body";
import Footer from "./pages/todo/Footer";

function App() {
  return (
    <div className="todo-app pt-5 pb-10 px-5 max-w-3xl mx-auto">
      <div className="container ">
        <Top />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
