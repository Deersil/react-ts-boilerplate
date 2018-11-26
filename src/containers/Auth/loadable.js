import Loadable from 'react-loadable';
import { LoadingIndicator } from '@components/Common';

export default Loadable({
  loader: () => import('./AuthContainer'),
  loading: LoadingIndicator,
});
