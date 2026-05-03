import ActionButtons from "../PrimaryButton";

function DashboardHeader() {
  return (
    <div className="flex justify-between">
      <div className="text-black">
        <h1 className="text-4xl font-bold">Operational Dashboard</h1>
        <p>
          Good morning, Alex. Here&apos;s what&apos;s happening in your business
          today.
        </p>
      </div>
      <div className="flex gap-5">
        <ActionButtons />
      </div>
    </div>
  );
}

export default DashboardHeader;
