import Header from "./components/Header/header";
import Form from "./components/Form/form";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Form />
    </div>
  );
}
