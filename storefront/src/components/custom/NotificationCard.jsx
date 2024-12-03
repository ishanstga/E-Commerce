import { BellRing, Check } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


function NotificationCard(props){

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
    ]

    return(
        <Card className="w-[380px] m-4">
        <CardHeader>
            <CardTitle>{props.CardTitle}</CardTitle>
            <CardDescription>{props.CardDescription}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
            <div className=" flex items-center space-x-4 rounded-md border p-4">
            <BellRing />
            <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                Push Notifications
                </p>
                <p className="text-sm text-muted-foreground">
                Send notifications to device.
                </p>
            </div>
            <Switch />
            </div>
            <div>
            {notifications.map((notification, index) => (
                <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-green-500" />
                <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                    {notification.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                    {notification.description}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </CardContent>
        <CardFooter>
            <Button className="w-full">
            <Check /> Mark all as read
            </Button>
        </CardFooter>
        </Card>
    )
}

export default NotificationCard;
