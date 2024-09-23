import Image from "next/image";

const aboutPageData = [
  {
    heading:
      "Rita Harper is a documentary photographer and photojournalist from Atlanta, Georgia. A",
    content: `quiet child, she grew interested in imagery and observing her
          surroundings – both skills that have greatly benefited her work. With
          no formal art education, she began to take to the streets of Atlanta
          and discover a style of her own. She quickly realized the affinity she
          had for capturing Black life and Atlanta culture simultaneously`,
  },
  {
    heading:
      "It is her goal to show the beauty of the everyday person. Rita has captured images of",
    content: `everyone from unsung pillars of tight-knit communities to regular people fighting against powerful, faceless corporations. She wishes to amplify the voices and narratives of everyday, working-class Black people and people of color as a reminder that all our lives have a purpose, importance, and value. That you do not have to be famous to have a story worth telling.`,
  },
  {
    heading:
      "Rita has received several grants and awards, including the BET Network Artist in",
    content: `Residence (2019), the Sprite X Wish Atl: The Give Back Artist Grant (2020), Southern Documentary Grant Award (2020), and the National Geographic Emergency Fund for Journalists Grant (2020).`,
  },
  {
    heading:
      "Her photos have been featured in exhibitions all around Atlanta, including shows at the",
    content: `Future Dead Artists Gallery, Mint ATL, Georgia State University, and the Auburn Avenue Research Library. She has also been published in The Wall Street Journal, The Washington Post, National Geographic, The Today Show Digital, Pro Publica, The Guardian, and Ilford Photo.`,
  },
  {
    heading:
      "Although Rita will continue to craft her love letter to Atlanta, she intends to expand her",
    content: `work to chronicle the lives, struggles, and successes of marginalized people across the globe. Her goal is to respectfully offer people whose stories often go overlooked the opportunity to share their realities with others – and to create art that is beautiful, raw, relatable, and captivating in the process.
`,
  },
];

const About = () => {
  return (
    <div className="flex p-5 gap-3">
      <div className="flex w-9/12 flex-col text-sm gap-1">
        {aboutPageData.map(({ heading, content }) => (
          <div className="mb-2">
            <p className="m-0 font-bold text-right">{heading}</p>
            <p className="text-right ">{content}</p>
          </div>
        ))}
      </div>
      <div className="flex w-3/12 h-fit">
        <Image
          src={
            "https://cdn.prod.website-files.com/5f471a7abc662b212e70b1ed/610468d227db50913d29b967_rita-p-harper-portrait.jpeg"
          }
          alt="user"
          width={240}
          height={100}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default About;
