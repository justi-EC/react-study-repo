import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg",
    address: "Some address 5, 12345 Some City",
    discription: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://images.pexels.com/photos/2272940/pexels-photo-2272940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    address: "Some address 15, 12345 Some City",
    discription: "This is a second meetup!",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    address: "Some address 25, 12345 Some City",
    discription: "This is a third meetup!",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
