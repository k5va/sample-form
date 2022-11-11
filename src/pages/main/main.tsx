import { Form } from '../../components';
import './main.scss';

function Main(): JSX.Element {
  return (
    <>
      <header></header>
        <main className='container'>
          <Form />
        </main>
      <footer></footer>
    </>
  );
}

export default Main;