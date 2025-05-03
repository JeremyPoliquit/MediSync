import { Card, CardHeader, CardContent } from "./ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Users, Plus } from "lucide-react";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const members = [
  {
    cardTitle: "Membership",
    cardContent: "+180.1% from last month",
  },
];

export async function DashboardNav() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50">
          {members.map((member) => (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <b className="font-semibold">{member.cardTitle}</b>
                  <Users />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col">
                  <b className="text-2xl">+2350</b>
                  <p className="text-gray-400 text-sm">{member.cardContent}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
        <div>
          <Popover>
            <PopoverTrigger>
              <Badge>
                <div className="flex items-center gap-1">
                  <Plus size={20} />
                  <p>Add Members</p>
                </div>
              </Badge>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col gap-2 mx-2">
                <Label htmlFor="name">Name:</Label>
                <form className="flex flex-col gap-2">
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="input input-sm border-2"
                    required
                  />
                  <button type="submit" className="btn bg-black text-white btn-sm btn-wide">Add</button>
                </form>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
