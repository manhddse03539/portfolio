import React, { useEffect, useState } from "react";
import { Wrapper, Tabs, Content } from "./TabInfoStyled";
import ProjectCard from "../ProjectCard/ProjectCartd";
import axios from "axios";

const TabInfo = () => {
  const [companies, setCompanies] = useState();
  const [projects, setProjects] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3001/portfolio")
      .then((resp) => {
        setCompanies(resp.data.companies);
        setProjects(resp.data.projects);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [currentTab, setCurrentTab] = useState("1");
  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <Wrapper>
      <Tabs>
        {companies?.map((comp, i) => (
          <button
            key={i}
            id={comp.id}
            disabled={currentTab === `${comp.id}`}
            onClick={handleTabClick}
          >
            {comp.tabTitle}
          </button>
        ))}
      </Tabs>
      <Content>
        {projects?.map((prj, i) => (
          <div key={i}>
            {currentTab === `${prj.companyID}` && <ProjectCard project={prj} />}
          </div>
        ))}
      </Content>
    </Wrapper>
  );
};

export default TabInfo;
