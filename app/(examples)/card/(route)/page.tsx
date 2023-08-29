import { cn } from "@/lib/utils";
import { BellRing, Check } from "lucide-react";

import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

// 더미 데이터
const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

// 메인 함수
const CardPage = ({ className, ...props }: CardProps) => {
  return (
    <div className="flex justify-center w-full py-10">
      <Card className={cn("w-[380px]", className)} {...props}>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center p-4 space-x-4 border rounded-md">
            <BellRing />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Push Notifications
              </p>
              <p className="text-sm text-muted-foreground">
                Send notifications to device.
              </p>
              <Switch />
            </div>
          </div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="grid mb-4 grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex w-2 h-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm font-medium leading-none">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Check className="w-4 h-4 mr-2" />
            Mark All as read
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardPage;
