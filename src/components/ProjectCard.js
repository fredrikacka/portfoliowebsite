import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  programmingLanguages,
  websiteUrl,
  githubUrl,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h3>{title}</h3>
          <span>{description}</span>
          <div>
            {programmingLanguages ? <span>Languages used:</span> : null}
          </div>
          <span>{programmingLanguages}</span>
          <div>
            <br />
            <a href={websiteUrl} target="_blank">
              {websiteUrl ? <span>Website Link</span> : null}
            </a>
            <div>
              <a href={githubUrl} target="_blank">
                {githubUrl ? <span>Github Link</span> : null}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
