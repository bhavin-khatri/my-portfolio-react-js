import './Dashboard.css'
import Images from '../../res/styles/Images'
import CategoryTabs from '../CategoryTabs/CategoryTabs'
import ProjectList from '../Projects/ProjectList/ProjectList'
import Resume from '../Resume/Resume'

export const developerInfo = {
  firstName: 'Bhavin',
  lastName: 'Khatri',
  address: 'Mumbai,Maharashtra,India',
  designation: 'Frontend Developer',
  contactNumber: '+91 8320467591',
  contactEmail: 'khatribhavin30@gmail.com',
  social: [
    {
      title: 'LinkedIn',
      value: '',
      image: Images.ic_linkedin,
    },
    {
      title: 'Github',
      value: '',
      image: Images.ic_github,
    },
    {
      title: 'Buy Me Coffee',
      value: '',
      image: Images.ic_coffee_cup,
    },
  ],
  categories: [
    {
      componentName: ProjectList,
      title: 'Projects',
      activeImage: Images.ic_project_white,
      inactiveImage: Images.ic_project_dark,
    },
    {
      componentName: Resume,
      title: 'Resume',
      activeImage: Images.ic_resume_white,
      inactiveImage: Images.ic_resume_dark,
    },
  ],
  projects: [
    {
      projectName: 'Apna Bot',
      projectImage: Images.ic_project_one,
      projectDescription: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
      projectScreenLayouts: [
        { title:'Dashboard',image: Images.ic_project_dark },
        { title:'Dashboard',image: Images.ic_project_dark },
        { title:'Dashboard',image: Images.ic_project_dark },
        { title:'Dashboard',image: Images.ic_project_dark },
        { title:'Dashboard',image: Images.ic_project_dark },
        { title:'Dashboard',image: Images.ic_project_dark },
        { title:'Dashboard',image: Images.ic_project_dark },
        { title:'Dashboard',image: Images.ic_project_dark },
        { title:'Dashboard',image: Images.ic_project_dark },
        { title:'Dashboard',image: Images.ic_project_dark },
        { title:'Dashboard',image: Images.ic_project_dark },
        { title:'Dashboard',image: Images.ic_project_dark }
      ],
      projectTechStack: ['TypeScript', 'JavaScript', 'React Native'],
      projectVersion: '',
      projectLink:'https://install.appcenter.ms/users/khatribhavin/apps/apna-bot/distribution_groups/apna%20bot%20release'
    },
  ],
}

const Dashboard = () => {
  return (
    <div className="dashboardMainView">
      <div className="aboutMePartition">
        <div className="profileView">
          <div className="rowView">
            <span className="nameText">{developerInfo.firstName}</span>
            <span className="designationText">{developerInfo.designation}</span>
          </div>
          <img
            className="profileImage"
            src={Images.ic_profile_pic}
            alt="Dashboard"
          />
          <span className="contactInfoText">{developerInfo.contactEmail}</span>
          <span className="contactInfoText">{developerInfo.address}</span>
          <div className="rowViewSocial">
            {developerInfo.social.map((item) => (
              <div className="socialItemMainView">
                <img
                  className="socialItemImage"
                  src={item.image}
                  alt="Dashboard"
                />
              </div>
            ))}
          </div>
          <div className="contactMeButton">
            <span className="contactMeText">CONTACT ME</span>
          </div>
        </div>
      </div>
      <div className="projectPartition">
        <CategoryTabs />
      </div>
    </div>
  )
}
export default Dashboard
