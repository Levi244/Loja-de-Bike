import Header from "./Header.jsx";
import Logo from "./Logo.jsx";

const App = () => {
  return (
    <>
      <Header 
      corFundo='bg-black' 
      corFonte='text-white'
      altura='h-[6rem]'
      preenchimento='px-50'
      >
        <Logo 
        texto='bikcraft'
        tamanhoFonte='text-5xl'
        pesoFonte='font-black'
        caixaFonte='uppercase'
        espacamentoFonte='tracking-[0.5rem]'
        />
      </Header>
    </>
  );
}

export default App
