import { Bars } from "react-loader-spinner";

export default function LoaderMini() {
  return (
    <div className="flex min-w-fit items-center justify-center">
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
