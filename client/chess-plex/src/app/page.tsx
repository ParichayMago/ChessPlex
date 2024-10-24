import AppBar from "@/components/AppBar";
import MatchComponent from "@/components/Match";
import { toast } from "sonner";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-black">
        <AppBar />
        <div className="flex h-screen p-2 rounded-sm">
          <div className="bg-red-800 basis-1/4 border-2 rounded-sm">Threads</div>
          <div className="bg-red-950 basis-2/4 border-2 rounded-sm">
            <MatchComponent />
          </div>
          <div className="bg-black-200 basis-1/4 border-2 rounded-sm">Blogs</div>
        </div>
      </div>
    </>
  );
}
