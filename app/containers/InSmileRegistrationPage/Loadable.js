/**
 *
 * Asynchronously loads the component for InSmileRegistrationPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
