import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { ErrorModal } from './components/Modals';
import * as Pages from './pages';
import { AppState } from './store/applicationState';
import { setUser } from './store/user/actions';
import { ROUTE_PATH } from './utils/consts';
import generateID2 from './utils/id2';
// const http = process.env.NODE_ENV === 'development' ? 'https' : 'https';

function App() {
  const [id2, setId2] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();
  const { User } = useSelector((store: AppState) => store);

  React.useEffect(() => {
    const fnToken = async () => {
      try {
        await localStorage.clear();
        generateID2(async (token: string) => {
          if (token) {
            const res = await axios.request({
              method: 'GET',
              headers: {
                'X-ACCESS-TOKEN': token,
              },
              url: `https://edutech.mcfr.ua/data/check/`,
            });
            if (res.data.error) {
              // dispatch(setUser({ isDemo: true, isAuth: false, token: '', error: false }));
              dispatch(
                setUser({ isDemo: false, isAuth: false, token: '', error: res.data.message })
              );
            } else {
              dispatch(setUser({ isDemo: !!res.data.isDemo, isAuth: true, token, error: '' }));
            }
            //dispatch(setUser({ isDemo: false, isAuth: true, token, error: '' }));
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
      } finally {
        setIsLoading(false);
      }
    };
    if (!id2) {
      fnToken();
    }
  }, [id2, dispatch]);

  const renderBody = React.useMemo(() => {
    if (isLoading) {
      return (
        <div className="container" style={{ marginTop: '150px' }}>
          <p>Зачекайте ...</p>
        </div>
      );
    }

    if (User.data && User.data.token && (User.data.isDemo || User.data.isAuth))
      return (
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
      );
    return (
      <Switch>
        <Route path="/" component={Pages.Home} />
      </Switch>
    );
  }, [isLoading, User.data]);

  return (
    <>
      <div className="zdshApp">
        <Header />
        <Menu />
        {renderBody}
        <ErrorModal />
      </div>
    </>
  );
}

export default App;
