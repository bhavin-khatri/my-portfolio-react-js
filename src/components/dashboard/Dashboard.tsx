import './Dashboard.css'
import Images from '../../res/styles/Images'
const Dashboard =()=>{
  return(
    <div className="dashboardMainView">
      <div className="aboutMePartition">
        <div className="profileImageView">
          <img className="profileImage" src={Images.ic_bk}/>
        </div>
        <div className="aboutMeMainView">
          <div className="aboutMeSubView">
            <span className="nameText">Bhavin Khatri</span>
            <span className="designationText">Frontend Developer</span>

            <div className="rowView">
              <span className="contactInfoTitle">Email :</span>
              <span className="contactInfoText">khatribhavin30@gmail.com</span>
            </div>
            <div className="rowView">
              <span className="contactInfoTitle">Contact :</span>
              <span className="contactInfoText">+91 8320467591</span>
            </div>
            <div className="rowView">
              <span className="contactInfoTitle">Address :</span>
              <span className="contactInfoText">Mumbai, Maharashtra, India</span>
            </div>
          </div>

          <div>
          </div>

        </div>
      </div>
      <div className="projectPartition"></div>
    </div>
  )
}
export default Dashboard
