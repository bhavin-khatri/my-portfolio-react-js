import './ProjectList.css'
import { developerInfo } from '../../Dashboard/Dashboard'
import { useState } from 'react'
const ProjectList = (props: any) => {
  const projectList = developerInfo.projects
  const [selectedProject,setSelectedProject]=useState<any>(null)
  const handleSelectedProject=(project:any)=>{
    console.log("project ======= > ",project)
    setSelectedProject(project)
  }
  return (
    <>
      {!selectedProject  ?
        <div className="projectItemView">
          {projectList.map((item, index) => (
            <div className="projectItemColumnView" onClick={()=>handleSelectedProject(item)}>
              <img className="projectImageView" src={item.projectImage} />
              <span className="projectTitle">{item.projectName}</span>
            </div>
          ))}
        </div>
        :
        <div className="selectedProjectMainView">
          <div className="rowView">
          <img src={selectedProject.projectImage} className="selectedProjectImageView"/>
            <div className="lineView"/>
            <div className="columnView">
              <span className="projectTitle">{selectedProject?.projectName}</span>
              <span className="projectDescription">{selectedProject?.projectDescription}</span>
              <span className="projectDescription">Project Link : <a className="projectDescription" href={selectedProject?.projectLink} target="_blank" rel="noopener noreferrer">{selectedProject?.projectLink}</a></span>
            </div>
          </div>
          <div className="screenLayoutMain">
          <span className="projectTitle">
            Screen Layouts
          </span>
            <div className="screenLayouts">
              {selectedProject?.projectScreenLayouts.length >0 && selectedProject?.projectScreenLayouts.map((item:any, index:number) => (
                <div className="screenLayoutColumn">
                <span className="projectDescription">{item.title}</span>
                <img className="screenLayoutImage" src={item?.image} />
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </>
  )
};

export default ProjectList
