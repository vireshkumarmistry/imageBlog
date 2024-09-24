const Contact = () => {
  return (
    <div className="w-full flex flex-col text-center p-2 justify-center h-100">
      <div className="h-[calc(100svh-118px)] lg:h-[calc(100svh-158px)] overflow-auto  flex flex-col justify-center">
        <p className="mb-5 text-2xl">
          Commissions, collaborations, print sales, and all other inquiries.
        </p>
        <div className="mb-4 text-2xl">
          <p>Based in Atlanta, GA and New Orleans, LA</p>
          <p>(Available for commissions worldwide)</p>
        </div>
        <div>
          <p>
            <strong>Contact:</strong> ritaharperphoto@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> 404-483-8843
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
