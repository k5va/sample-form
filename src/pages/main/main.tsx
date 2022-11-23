import { AccountForm } from '../../components';
import './main.scss';

function Main(): JSX.Element {
  return (
    <>
      <header></header>
        <main className='container'>
          <AccountForm />
        </main>
      <footer></footer>
    </>
  );
}

export default Main;