import { userInfo } from "@/lib/constants";

const ContactPage = () => {
  return (
    <div className="w-full flex flex-col text-center p-2 justify-center h-full items-center">
      <div className="flex flex-col justify-center">
        <p className="mb-5 text-2xl">
          Commissions, collaborations, print sales, and all other inquiries.
        </p>
        <div className="mb-4 text-2xl">
          <p>Based in Atlanta, GA and New Orleans, LA</p>
          <p>(Available for commissions worldwide)</p>
        </div>
        <div>
          <p>
            <strong>Contact:</strong> {userInfo.userEmail}
          </p>
          <p>
            <strong>Phone:</strong> {userInfo.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
