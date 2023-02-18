import MeetupDetail from "@/components/meetups/MeetupDetail";
import React from "react";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg"
      title="A First Meetup"
      address="Some address 5, 12345 Some City"
      description="This is a first meetup!"
    />
  );
};

export default MeetupDetails;
