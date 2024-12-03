import { useState } from "react";
import NotificationCard from "@/components/custom/NotificationCard";
import BasicCard from "@/components/custom/BasicCard";

function App() {
  return (
    <>
      <dev className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div>
          <NotificationCard
            CardTitle={"Notifications"}
            CardDescription={"You have 3 unread messages."}
          />
        </div>
        <div>
          <NotificationCard
            CardTitle={"Other Notifications"}
            CardDescription={"You have 3 unread messages."}
          />
        </div>
        <div>
          <NotificationCard
            CardTitle={"Secondary Notifications"}
            CardDescription={"You have 3 unread messages."}
          />
        </div>
        <div>
          <BasicCard
            CardTitle={"Create project"}
            CardDescription={"Deploy your new project in one-click."}
          />
        </div>
      </dev>
    </>
  );
}

export default App;
