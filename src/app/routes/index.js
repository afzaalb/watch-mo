import React from "react";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
import Home from "../containers/home/Home";
import Login from "../containers/auth/Login";
import Search from "../containers/search/SearchHome";
import Collection from "../containers/collection/CollectionHome";
import Profile from "../containers/profile/ProfileHome";
import Item from "../containers/item/ItemHome";
import People from "../containers/people/PeopleHome";
import NoDataFound from "../components/NoDataFound";
import Content from "../hoc/ContentWrapper";

const MyRouter = ({ location }) => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/people/:id/:name" component={People} />
        <Route exact path="/:id/:name" component={Item} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/collection" component={Collection} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route path="*" render={() => (<Content isFlexed><div className="container"><NoDataFound spaceTop alignCenter message="You've landed nowhere. Go Back!" /></div></Content>)} />
    </Switch>
);

export default MyRouter;
