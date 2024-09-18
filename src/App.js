import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import appstore from "./constants/appstore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {

const approuter=createBrowserRouter([{
  
  path:"/",
  element:<Body/>,
  children:[{
    path: "/",
  element:<MainContainer/>},
  
{
  path: "watch",
  element:<WatchPage/>}
  
  ]

}])

  return (
    <Provider store={appstore}>
     
      <Head/>
      <RouterProvider router={approuter}><Body/></RouterProvider>
  
    </Provider>
  );
}

export default App;
