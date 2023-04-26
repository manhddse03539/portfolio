import React, { useEffect, useState } from "react";
import { Wrapper, Tabs, Content } from "./TabInfoStyled";
import ProjectCard from "../ProjectCard/ProjectCartd";
import axios from "axios";

const TabInfo = () => {
  const [datas, setDatas] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3001/datas")
      .then((resp) => {
        setDatas(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Tab 1",
      title: "Title 1",
      content:
        "Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.",
    },
    {
      id: 2,
      tabTitle: "Tab 2",
      content: "Contenido de tab 2.",
    },
    {
      id: 3,
      tabTitle: "Tab 3",
      content: "Contenido de tab 3.",
    },
    {
      id: 4,
      tabTitle: "Tab 4",
      content: "Contenido de tab 4.",
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <Wrapper>
      <Tabs>
        {datas &&
          datas.map((data, i) => (
            <button
              key={i}
              id={data.id}
              disabled={currentTab === `${data.id}`}
              onClick={handleTabClick}
            >
              {data.tabTitle}
            </button>
          ))}
      </Tabs>
      <Content>
        {datas?.map((compData, i) => (
          <div key={i}>
            {currentTab === `${compData.id}` && (
              <ProjectCard compData={compData} />
            )}
          </div>
        ))}
      </Content>
    </Wrapper>
  );
};

export default TabInfo;
