const resumeData = [
  { heading: "Biography", content: ["1990 Born in Atlanta, GA"] },
  {
    heading: "Honors Awards and Fellowships",
    content: [
      "Picha Stock Grant (2021)",
      "Southern Documentary Grant Award (2020)",
      "Sprite X Wish Atl: The Give Back Artist Grant (2020)",
      "National Geographic Emergency Fund for Journalists Grant (2020)",
      "BET Network Artists in Residence (2019)",
    ],
  },
  {
    heading: "Exhibitions",
    content: [
      "NBAF Annual Gala, (2021)",
      "Welcome to Atlanta, Ebrik Coffee House (2020)",
      "Here, There, Everywhere, Mint ATL Gallery (2020)",
      "The Divine Feminine, Georgia State University (2019)",
      "A3C Social Justice Summit, Auburn Avenue Research Library (2019)",
      ,
      "Capture, Future Dead Artists Gallery (2019)",
    ],
  },
];

const Resume = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col text-sm gap-3 w-full p-6 h-[calc(100vh-102px)] lg:h-[calc(100vh-142px)] overflow-auto">
        {resumeData.map(({ heading, content }, index) => (
          <>
            <div className="flex flex-col gap-8 content-center">
              <div className="flex flex-col gap-3 text-center">
                <p className="mb-0 font-bold text-center">{heading}</p>
                {content.map((text) => (
                  <span className="text-center">{text}</span>
                ))}
              </div>
              {index < resumeData.length - 1 && ( // Only render <hr> if not the last item
                <hr className="w-8 h-[1px] justify-center flex m-auto border-[#4f4831f5]" />
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Resume;
