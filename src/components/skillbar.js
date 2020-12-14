import dayjs from "dayjs";
import { motion } from "framer-motion";
import { useStaticQuery } from "gatsby";
import React from "react";
import { BiCaretDown } from "react-icons/bi";
import "../style/skillbar.scss";

const expandVariants = {
  isExpanded: { rotate: 180 },
  isNotExpanded: { rotate: 0 },
};

const Skillbar = ({ skill }) => {
  const [isExpanded, setExpanded] = React.useState(false);
  const handleClick = () => {
    setExpanded(!isExpanded);
  };
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allGithubData {
          edges {
            node {
              data {
                user {
                  repositories {
                    edges {
                      node {
                        name
                        description
                        pushedAt
                        languages {
                          edges {
                            node {
                              name
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const repositories = React.useMemo(
    () => data.allGithubData.edges[0].node.data.user.repositories.edges,
    [repositories]
  );

  const languages = React.useMemo(() => {
    const langs = [];

    for (const repository of repositories) {
      const repoLanguages = repository.node.languages.edges.map(
        (lang) => lang.node.name
      );
      const uniqueLanguages = repoLanguages.filter(
        (lang) => languages.indexOf(lang) === -1
      );
      langs.push(...uniqueLanguages);
    }

    return langs;
  }, [repositories]);

  const getRepoByLanguage = React.useCallback(
    (lang) => {
      return repositories.filter((repository) => {
        const repoLanguages = repository.node.languages.edges.map(
          (lang) => lang.node.name
        );
        return repoLanguages.indexOf(lang) !== -1;
      });
    },
    [repositories]
  );

  const getLastUpdatedRepo = React.useCallback(
    (lang) => {
      const repoList = getRepoByLanguage(lang);
      const lastUpdatedRepo = repoList.reduce(
        (accumulator, current) =>
          dayjs(current.node.pushedAt).isBefore(
            dayjs(accumulator.node.pushedAt)
          )
            ? accumulator
            : current,
        repoList,
        repoList[0]
      );
      return lastUpdatedRepo;
    },
    [getRepoByLanguage]
  );

  const animationHeightOfViewport = React.useMemo(
    () => (window.innerWidth >= 768 ? 50 : 150),
    []
  );

  const expandContentVariants = React.useMemo(
    () => ({
      isExpanded: { height: animationHeightOfViewport },
      isNotExpanded: { height: 0, transitionEnd: { display: "none" } },
    }),
    [animationHeightOfViewport]
  );

  return (
    <div className="skillbar container-md">
      <span>{skill.skillName}</span>
      <div className="bar d-flex justify-content-between">
        <div className="skill">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ ease: "easeIn", duration: 2 }}
            className="innerbar"
          >
            <span>{skill.level}</span>
          </motion.div>
        </div>
        <span>
          {skill.example !== undefined && (
            <motion.div
              animate={isExpanded ? "isExpanded" : "isNotExpanded"}
              variants={expandVariants}
              transition={{ ease: "easeIn", duration: 0.3 }}
            >
              <BiCaretDown
                id="aniIcon"
                className="hoverable expand-icon"
                onClick={handleClick}
              />
            </motion.div>
          )}
        </span>
      </div>
      {skill.example && (
        <motion.div
          initial={{ height: 0 }}
          animate={isExpanded ? "isExpanded" : "isNotExpanded"}
          variants={expandContentVariants}
          transition={{ ease: "easeIn", duration: 1 }}
          className="d-flex justify-content-around expanded-div"
        >
          <div className="d-flex flex-column">
            <span>Total Github Projects</span>
            <span>{getRepoByLanguage(skill.skillName).length}%</span>
          </div>
          <div className="d-flex flex-column">
            <span>Last contributed Project</span>
            <span>{getLastUpdatedRepo(skill.skillName).node.name}</span>
          </div>
          <div className="d-flex flex-column">
            <span>Last Updated</span>
            <span>
              {dayjs(getLastUpdatedRepo(skill.skillName).node.pushedAt).format(
                "DD MMMM YYYY"
              )}
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Skillbar;
