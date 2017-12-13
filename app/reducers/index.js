import { combineReducers } from 'redux'
import NavBar from "../components/navBar/store";
import TabBar from "../components/tabBar/store";
import Body from "../components/body/store";

const store = combineReducers({
  NavBar,
  TabBar,
  Body
})

export default store