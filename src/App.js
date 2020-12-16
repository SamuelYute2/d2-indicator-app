import React from 'react'
/*import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'*/
// Dereference the named export property
// You can dereference multiple named exports in a single line
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Components/HomePage/Home';
import NewReport from "./Components/CustomReports/NewReport";
import SavedReports from "./Components/CustomReports/SavedReports";
import SimilarTimePeriods from "./Components/TimePeriod/SimilarTimePeriods"

const MyApp = () => (
    <Router>
        <Switch>
            <Route path="/" render={() => (
                <Home />
            )} exact/>

            <Route path="/new-report" render={() => (
                <NewReport />
            )} exact/>


            <Route path="/saved-reports" render={() => (
                <SavedReports  />
            )} exact/>

            <Route path="/similar-time-periods" render={() => (
                <SimilarTimePeriods  />
            )} exact/>
        </Switch>
    </Router>
)

export default MyApp