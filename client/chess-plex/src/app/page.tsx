import AppBar from "@/components/AppBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <AppBar />
      <div className="flex">
        <div></div>
        <div className="basis-3/4 flex justify-around">
          <div className="bg-red-500 basis-1/3" >Threads</div>
          <div className="bg-blue-200 basis-2/3">Blogs</div>
        </div>
        <div className="bg-red-700 basis-1/3">Events</div>
      </div>
    </>
  );
}
