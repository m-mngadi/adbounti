import WaitlistForm from "./WaitlistForm";

const Waitlist = (props: { userType: string }) => {
  const { userType } = props;
  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 pb-4">
      <WaitlistForm userType={userType} />
    </section>
  );
};

export default Waitlist;
