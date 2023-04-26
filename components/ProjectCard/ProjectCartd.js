import React from "react";
import { Wrapper, Content, Info, Title, Project } from "./ProjectCardStyled";
import { Image } from "@chakra-ui/react";

const ProjectCard = ({ compData }) => {
  return (
    <Wrapper>
      {compData &&
        compData.projects.map((project, i) => (
          <Project key={i}>
            <Image
              width={150}
              src={`/images/` + project.imgSrc}
              alt="Dan Abramov"
            />
            <Content>
              <Title>{project.title}</Title>
              <Info>
                <span>Customer:</span> {project.customer}
              </Info>
              <Info>
                <span>Description:</span> {project.description}
              </Info>
              <Info>
                <span>Technologies:</span> {project.technology}
              </Info>
              <Info>
                <span>Duration:</span> {project.duration}
              </Info>
              <Info>
                <span>Scope:</span> {project.scope}
              </Info>
              <Info>
                <span>Role:</span> {project.role}
              </Info>
            </Content>
          </Project>
        ))}
    </Wrapper>
  );
};

export default ProjectCard;
