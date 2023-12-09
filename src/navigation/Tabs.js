import React, { useRef, useEffect, useState } from 'react'
import { Route, Switch, NavLink, HashRouter } from 'react-router-dom'
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
import { Dropdown, ButtonGroup } from 'react-bootstrap'
// import { useLocation } from "react-router-dom";
import Promo from '../Components/PromoCode/Promo'

import WebEvents from '../Components/WebEvents/WebEvents'
import CreateEvents from '../Components/WebEvents/CreateEvents/CreateEvents'
import ViewEvent from '../Components/WebEvents/ViewEvent/ViewEvent'
import EventController from '../Components/WebEvents/CreateEvents/EventController'
import EventDetails from '../Components/WebEvents/EventUpdateDelete/EventDetails'
import EventEdit from '../Components/WebEvents/editEvent/EventEdit'
import EventEditController from '../Components/WebEvents/editEvent/EventEditController'
import WithdrawalRequest from '../Components/WithdrawalRequests/WithdrawalRequest'
import BookAppointment from '../Components/BookAppointment/BookAppointment'

const Tabs = () => {
  let role = JSON.parse(sessionStorage.getItem('Role'))
  const refOpenPatientArea = useRef()
  const [openpatientarea, setOpenPatientArea] = useState(false)

  // const location = useLocation();
  // console.log(location.pathname);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        openpatientarea &&
        refOpenPatientArea.current &&
        !refOpenPatientArea.current.contains(e.target)
      ) {
        setOpenPatientArea(false)
      }
    }
    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [openpatientarea])

  const handleCondition = () => {
    sessionStorage.removeItem('checkCondition')
  }
  return (
    <div className="bodyWrapper">
      <HashRouter>
        <ul className="navbar" style={{}}>
          {hasAccess(role) ? (
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
          ) : (
            <>
              <li>
                <Dropdown as={ButtonGroup}>
                  {/* <NavLink
                    to="/admin/dashboard"
                    className="link"
                    activeClassName="is-active"
                  >
                    <p>Dashboard</p>
                    <Dropdown.Toggle
                      split
                      variant=""
                      id="dropdown-split-basic"
                      className="link"
                    />
                  </NavLink> */}
                  <Dropdown.Menu style={{ width: '13.1rem!important' }}>
                    <Dropdown.Item
                      href="#/admin/dashboard/clinicdetails"
                      style={{ width: '13.1rem!important' }}
                    >
                      Clinic Details
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/admin/dashboard/addnewdoctor"
                      style={{ width: '13.1rem!important' }}
                    >
                      Add New doctor
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>
                <NavLink
                  to="/admin/excercise"
                  className="link"
                  activeClassName="is-active"
                >
                  <p onClick={() => handleCondition()}>
                    Exercise Video Library
                  </p>
                </NavLink>
              </li>
              <li>
                <Dropdown as={ButtonGroup}>
                  {/* <NavLink
                    to="/admin/scheduling"
                    className="link"
                    activeClassName="is-active"
                  >
                    <p>Manage Scheduling</p>
                    <Dropdown.Toggle
                      split
                      variant=""
                      id="dropdown-split-basic"
                      className="link"
                    />
                  </NavLink> */}
                  <Dropdown.Menu style={{ width: '17.5rem!important' }}>
                    <Dropdown.Item href="#/admin/scheduling/allappointments">
                      All Appointments
                    </Dropdown.Item>
                    <Dropdown.Item href="#/admin/scheduling/bookedpatients">
                      Booked Patients
                    </Dropdown.Item>
                    <Dropdown.Item href="#/admin/scheduling/pendingpatients">
                      Pending Patients
                    </Dropdown.Item>
                    <Dropdown.Item href="#/admin/scheduling/policies">
                      Policies
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              {/* <li ref={refOpenPatientArea}>
                  <button className="patient"><NavLink to="/admin/patient" className="link" activeClassName='is-active'><span  onClick={() => setOpenPatientArea(!openpatientarea)}>Patient</span></NavLink></button>
                  <Collapse in={openpatientarea}>
                    <div className="patientDropdown">
                      <button className="patient1" value="existing" onClick={(e) => { setOpenPatientArea(!openpatientarea);  }}>
                        <NavLink to="/admin/patient" activeClassName='is-active' ><p className="patient activeP" onClick={() => setOpenPatientArea(!openpatientarea)}>Existing patient</p></NavLink>
                      </button>
                      <button className="patient1" value="overdue" onClick={(e) => { setOpenPatientArea(!openpatientarea); }}>
                        <NavLink to="/admin/patient/overdue" activeClassName='is-active'><p className="patient activeP" onClick={() => setOpenPatientArea(!openpatientarea)}>Overdue patient</p></NavLink>
                      </button>
                    </div>
                  </Collapse>
                </li> */}
              <li>
                <Dropdown as={ButtonGroup}>
                  {/* <NavLink
                    to="/admin/patient"
                    className="link"
                    activeClassName="is-active"
                  >
                    <p>Patient</p>
                    <Dropdown.Toggle
                      split
                      variant=""
                      id="dropdown-split-basic"
                      className="link"
                    />
                  </NavLink> */}
                  <Dropdown.Menu style={{ width: '11.3rem!important' }}>
                    <Dropdown.Item href="#/admin/patient">
                      Existing patient
                    </Dropdown.Item>
                    <Dropdown.Item href="#/admin/patient/overdue">
                      Overdue patient
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </>
          )}
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
