import React, { useEffect, useRef, useState } from 'react'
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom'
import ExcerciseVideoLibrary from '../Components/ExerciseVideoLibrary/ExcerciseVideoLibrary'
import ApprovalReject from '../Components/ApprovalReject/ApprovalReject'
import RequestVideo from '../Components/RequestVideo/RequestVideo'
import Patients from '../Components/Patients/Patients'
import AddPatient from '../Components/AddPatient/AddPatient'
import AddPrescription from '../Components/AddPatient/AddPrescription'
import SelectedPrescription from '../Components/AddPatient/SelectedPrescription'
import PrescriptionSummary from '../Components/AddPatient/PrescriptionSummary'
import OverduePatient from '../Components/Patients/OverduePatient'
import Dashboard from '../Components/Dashboard/Dashboard'
import Scheduling from '../Components/Scheduling/Scheduling'
import ClinicDetails from '../Components/Dashboard/ClinicDetails'
import AddNewDoctor from '../Components/Dashboard/AddNewDoctor'
import AllAppointments from '../Components/Scheduling/AllAppointments'
import BookedPatients from '../Components/Scheduling/BookedPatients'
import PendingPatients from '../Components/Scheduling/PendingPatients'
import Policies from '../Components/Scheduling/Policies'
import AddNewClinic from '../Components/Dashboard/AddNewClinic'
import History from '../Components/Patients/History'
import './Tabs.css'
import { hasAccess } from '../Components/Util/RoleUtils'
import { ButtonGroup, Dropdown } from 'react-bootstrap'
// import { useLocation } from "react-router-dom";
import Promo from '../Components/PromoCode/Promo'

import WebEvents from '../Components/WebEvents/WebEvents'
import EventController from '../Components/WebEvents/CreateEvents/EventController'
import EventDetails from '../Components/WebEvents/EventUpdateDelete/EventDetails'
import EventEditController from '../Components/WebEvents/editEvent/EventEditController'
import WithdrawalRequest from '../Components/WithdrawalRequests/WithdrawalRequest'
import BookAppointment from '../Components/BookAppointment/BookAppointment'

const Tabs = () => {
  return (
    <div className="bodyWrapper">
      <HashRouter>
        <ul className="navbar" style={{}}>
          <>
            <li>
              <NavLink
                to="/admin/bookAppointment"
                className="link"
                activeClassName="is-active"
              >
                Book Appointments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/excercise"
                className="link"
                activeClassName="is-active"
              >
                Exercise Video Library
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/request"
                className="link"
                activeClassName="is-active"
              >
                Approval / Pending Request
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/promocode"
                className="link"
                activeClassName="is-active"
              >
                Promo Code
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/withdrawalrequest"
                className="link"
                activeClassName="is-active"
              >
                Withdrawal Requests
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/ptatevents"
                className="link"
                activeClassName="is-active"
              >
                Pheal Events
              </NavLink>
            </li>
          </>
        </ul>

        <Switch>
          <Route
            path="/admin/excercise"
            component={ExcerciseVideoLibrary}
            exact
          />
          <Route path="/admin/request" component={ApprovalReject} />
          <Route path="/admin/excercise/addvideo" component={RequestVideo} />
          <Route
            path="/admin/withdrawalrequest"
            component={WithdrawalRequest}
          />
          <Route path="/admin/ptatevents" component={WebEvents} exact />
          <Route
            path="/admin/bookAppointment"
            component={BookAppointment}
            exact
          />

          <Route path="/admin/patient" component={Patients} exact />
          <Route
            path="/admin/patient/overdue"
            component={OverduePatient}
            exact
          />
          <Route
            path="/admin/patient/addpatient"
            component={AddPatient}
            exact
          />
          <Route
            path="/admin/patient/addprescription"
            component={AddPrescription}
            exact
          />
          <Route
            path="/admin/patient/selectedprescription"
            component={SelectedPrescription}
            exact
          />
          <Route
            path="/admin/patient/prescriptionsummary"
            component={PrescriptionSummary}
            exact
          />
          <Route path="/admin/patient/history" component={History} exact />
          <Route path="/admin/dashboard" component={Dashboard} exact />
          <Route
            path="/admin/dashboard/clinicdetails"
            component={ClinicDetails}
          />
          <Route
            path="/admin/dashboard/addnewdoctor"
            component={AddNewDoctor}
          />
          <Route
            path="/admin/dashboard/addnewclinic"
            component={AddNewClinic}
          />
          <Route path="/admin/scheduling" component={Scheduling} exact />
          <Route
            path="/admin/scheduling/allappointments"
            component={AllAppointments}
            exact
          />
          <Route
            path="/admin/scheduling/bookedpatients"
            component={BookedPatients}
            exact
          />
          <Route
            path="/admin/scheduling/pendingpatients"
            component={PendingPatients}
            exact
          />
          <Route path="/admin/scheduling/policies" component={Policies} exact />
          <Route path="/admin/promocode" component={Promo} exact></Route>

          <Route
            path="/admin/ptatevents/eventController"
            component={EventController}
            exact
          />
          {/* <Route path="/admin/ptatevents/createevents" component={CreateEvents} /> */}
          {/* <Route path="/admin/viewevents" component={ViewEvent} /> */}
          <Route
            path="/admin/ptatevents/eventDetails/:eventid"
            component={EventDetails}
          />
          <Route
            path="/admin/ptatevents/editController/:editevent"
            component={EventEditController}
          />
        </Switch>
      </HashRouter>
    </div>
  )
}

export default Tabs
