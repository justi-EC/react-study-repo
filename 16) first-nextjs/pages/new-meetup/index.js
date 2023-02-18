import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import React from "react";

const NewMeetupPage = () => {
  const addMeetupHandler = (data) => {};

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
