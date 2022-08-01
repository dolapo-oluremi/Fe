import { cleanup, getByLabelText, getByTestId, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import InputComp from './components/InputComp';
import Home from './pages/Home';
import store from './redux/store';


afterEach(cleanup);

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>

  );
  const welcomeMessage = screen.getByText(/ismail/i);
  expect(welcomeMessage).toBeInTheDocument();
});


test("It should check input area", () => {
  const { getByTestId } = render(

      <InputComp placeholder="Search Titles" />

  )
  const { getByText } = within(getByTestId('searchInputDiv'))
  expect(getByText('Search titles')).toBeInTheDocument()

});



test("Should Render Home Page Spinner", () => {
  const { getByTestId } = render(
   <Provider store={store}>
         <Home  />
   </Provider>
  )
  const { getByText } = within(getByTestId('home'))
  expect(getByText('spinner')).toBeInTheDocument()
   setTimeout(()=>{
    expect(getByText('Welcome')).toBeInTheDocument()
   }, 1000)
});

test("Should Render Home Page", () => {
  const { getByTestId } = render(
   <Provider store={store}>
         <Home  />
   </Provider>
  )
  const { getByText } = within(getByTestId('home'))
   setTimeout(()=>{
    expect(getByText('Welcome')).toBeInTheDocument()
   }, 1000)
});


