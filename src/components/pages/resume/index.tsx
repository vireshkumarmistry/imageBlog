import { Fragment } from "react";
import { resumeData } from "./data";

const ResumePage = () => {
  return (
    <div className="flex flex-col text-sm gap-3 w-full p-6 h-full justify-evenly">
      {resumeData.map(({ heading, content }, index) => (
        <Fragment key={heading}>
          <div className="flex flex-col gap-8 content-center">
            <div className="flex flex-col gap-3 text-center">
              <p className="mb-0 font-bold text-center">{heading}</p>
              {content.map((text) => (
                <span key={text} className="text-center">
                  {text}
                </span>
              ))}
            </div>
            {index < resumeData.length - 1 && (
              <hr className="w-8 h-[1px] justify-center flex m-auto border-[#4f4831f5]" />
            )}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default ResumePage;
