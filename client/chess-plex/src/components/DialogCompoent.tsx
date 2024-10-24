import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const DialogComp = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-black" variant="outline">New Match</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Match</DialogTitle>
          <DialogDescription>
            Select Players and Tournament Name From here. 
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-3">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="playerOne" className="text-right">
              Player One
            </Label>
            <Input
              id="playerOne"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="playerTwo" className="text-right">
              Player Two
            </Label>
            <Input
              id="playerTwo"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const labels = ["playerOne", "playerTwo", "tournamentName", "date", "roundName(Grp stage, sf, finals)", ]

const DialogLabels = (labels:string[]) => {
  labels.map(()=> {
    <DialogContent>

    </DialogContent>
  })
}

export default DialogComp