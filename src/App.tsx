import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ErrorModal } from './components/Modals';
import * as Pages from './pages';
import { ROUTE_PATH } from './utils/consts';
import generateID2 from './utils/id2';

function App() {
  const [id2, setId2] = React.useState(false);

  React.useEffect(() => {
    const fnToken = async () => {
      await localStorage.clear();
      generateID2((token: string) => {
        setId2(true);
        if (token) {
          // dispatch(fetchSuccess({ token }));
          console.log('updated fnToken');
        } else {
          localStorage.clear();
        }
      });
    };
    if (!id2) {
      fnToken();
    }
  }, [id2]);
  return (
    <>
      <div className="zdshApp">
        <Switch>
          <Route exact path="/" component={Pages.Home} />
          <Route exact path={ROUTE_PATH.home} component={Pages.Home} />
          <Route exact path={ROUTE_PATH.techniques} component={Pages.LearningTechniques} />
          <Route exact path={ROUTE_PATH.myCards} component={Pages.MyCards} />
          <Route exact path={`${ROUTE_PATH.card}/:id`} component={Pages.Card} />
          <Route path="*" component={Pages.Page404} />
        </Switch>
        <ErrorModal />
      </div>
    </>
  );
}

export default App;
