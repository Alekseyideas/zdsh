import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ErrorModal } from './components/Modals';
import * as Pages from './pages';
import { setUser } from './store/user/actions';
import { ROUTE_PATH } from './utils/consts';
import generateID2 from './utils/id2';
// const http = process.env.NODE_ENV === 'development' ? 'https' : 'https';

function App() {
  const [id2, setId2] = React.useState(false);
  // const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fnToken = async () => {
      try {
        await localStorage.clear();
        generateID2(async (token: string) => {
          if (token) {
            // const res = await axios.request({
            //   method: 'GET',
            //   headers: {
            //     'X-ACCESS-TOKEN': token,
            //   },
            //   url: `${http}://service.mcfr.ua/Plan/api/`,
            // });

            // if (res.data.error) {
            //   dispatch(setUser({ isDemo: false, isAuth: false, token: '', error: res.data.error }));
            // } else {
            //   dispatch(setUser({ isDemo: !!res.data.isDemo, isAuth: true, token, error: '' }));
            // }
            dispatch(setUser({ isDemo: false, isAuth: true, token, error: '' }));
            setId2(true);
          } else {
            localStorage.clear();
          }
        });
      } catch (error) {
        console.log(error, 'error');
        dispatch(
          setUser({
            isDemo: false,
            isAuth: false,
            token: '',
            error: JSON.stringify(error.response.data),
          })
        );
      }
    };
    if (!id2) {
      fnToken();
    }
  }, [id2, dispatch]);
  return (
    <>
      <div className="zdshApp">
        <Switch>
          <Route exact path="/" component={Pages.Home} />
          <Route exact path={ROUTE_PATH.home} component={Pages.Home} />
          <Route exact path={ROUTE_PATH.techniques} component={Pages.LearningTechniques} />
          <Route exact path={ROUTE_PATH.myCards} component={Pages.MyCards} />
          <Route exact path={`${ROUTE_PATH.myCards}/:id`} component={Pages.MyCard} />
          <Route exact path={`${ROUTE_PATH.techniques}/:id`} component={Pages.DeafultCard} />
          <Route exact path={`${ROUTE_PATH.instructions}`} component={Pages.Instructions} />
          <Route path="*" component={Pages.Page404} />
        </Switch>
        <ErrorModal />
      </div>
    </>
  );
}

export default App;
