import { store } from '@/app/store';
import { Provider } from 'react-redux';
import Grid from '@/widgets/Grid';

function App() {

  return (
    <Provider store={store} >
      <Grid />
    </Provider>
  )
}

export default App
