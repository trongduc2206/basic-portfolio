import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import { EducationType } from "../types/sections";
import Fade from "react-reveal/Fade";

const EducationCard = ({ schoolName, subHeader, duration, desc, grade, descBullets }: EducationType) => {
  return (
    <div className="transition-transform transform hover:scale-125">

    
    <Card className="shadow-lg--hover shadow mt-6 card-lift--hover">
      <CardBody>
        <div className="d-flex px-3">
          <div className="pl-4">
            <h5 className="text-black font-semibold">{schoolName}</h5>
            <h6>{subHeader}</h6>
            <Badge color="dark" className="mr-1">
              {duration}
            </Badge>
            {grade && (
              <Badge color="light" className="mr-1">
                {grade}
              </Badge>
            )}
            <p className="description mt-3">{desc}</p>
            <ul>
              {descBullets
                ? descBullets.map(desc => {
                    return <li key={desc}>{desc}</li>;
                  })
                : null}
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
    </div>
  );
};

export default EducationCard;
