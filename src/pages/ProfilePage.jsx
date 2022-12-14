import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { PageLayout } from "./PageLayout";
import { Label } from "../components";

import "../styles/Page.css";

function ProfilePage() {
  const { date, category, schedule } = useContext(AppContext);

  return (
    <PageLayout>
      <div className="Page">
        <h2>Profile</h2>
        <p>Date selected</p>
        <Label text={`${date.num} ${date.day}`} />
        <p>Category selected</p>
        <Label text={category} />
        <p>Schedule selected</p>
        <Label text={schedule} />
      </div>
    </PageLayout>
  );
}

export { ProfilePage };
