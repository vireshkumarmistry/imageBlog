const RootHeaderStructure = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-b-[1px] lg:p-2 border-[#54545480] w-full flex gap-2 justify-between items-center">
      {children}
    </div>
  );
};

export default RootHeaderStructure;
