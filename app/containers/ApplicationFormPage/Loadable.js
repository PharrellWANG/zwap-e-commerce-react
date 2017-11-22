/**
 *
 * Asynchronously loads the component for ApplicationFormPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
