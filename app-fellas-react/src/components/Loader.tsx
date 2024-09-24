import { Bars } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex min-h-[calc(100vh-88px)] min-w-fit flex-1 items-center justify-center">
      <Bars
        height="80"
        width="80"
        color="#7C3AED"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
