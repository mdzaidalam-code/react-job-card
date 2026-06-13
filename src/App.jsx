import Cards from "./component/Cards";
import "./index.css";

const App = () => {
  const jobs = [
    {
      companyLogo:
        "https://img.icons8.com/?size=100&id=36099&format=png&color=000000",
      companyName: "Amazon",
      dayOfPosting: "5 days ago",
      perHourEarning: "$120/hr",
      location: "Mumbai, India",
    },
    {
      companyLogo:
        "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
      companyName: "Google",
      dayOfPosting: "2 days ago",
      perHourEarning: "$150/hr",
      location: "Bangalore, India",
    },
    {
      companyLogo:
        "https://img.icons8.com/?size=100&id=22989&format=png&color=000000",
      companyName: "Microsoft",
      dayOfPosting: "1 day ago",
      perHourEarning: "$140/hr",
      location: "Hyderabad, India",
    },
    {
      companyLogo:
        "https://img.icons8.com/?size=100&id=20519&format=png&color=000000",
      companyName: "Netflix",
      dayOfPosting: "3 days ago",
      perHourEarning: "$160/hr",
      location: "Pune, India",
    },
    {
      companyLogo:
        "https://img.icons8.com/?size=100&id=gav46YArUSy1&format=png&color=000000",
      companyName: "Adobe",
      dayOfPosting: "7 days ago",
      perHourEarning: "$130/hr",
      location: "Noida, India",
    },
    {
      companyLogo:
        "https://img.icons8.com/?size=100&id=iqlVx3RlIPKA&format=png&color=000000",
      companyName: "Meta",
      dayOfPosting: "4 days ago",
      perHourEarning: "$170/hr",
      location: "Gurugram, India",
    },
    {
      companyLogo:
        "https://img.icons8.com/?size=100&id=31754&format=png&color=000000",
      companyName: "IBM",
      dayOfPosting: "6 days ago",
      perHourEarning: "$110/hr",
      location: "Chennai, India",
    },
    {
      companyLogo:
        "https://img.icons8.com/?size=100&id=30840&format=png&color=000000",
      companyName: "Apple",
      dayOfPosting: "8 days ago",
      perHourEarning: "$90/hr",
      location: "Kolkata, India",
    },
  ];
  return (
    <div className="Parent">
      {jobs.map(function (elem) {
        return (
          <Cards
            logo={elem.companyLogo}
            name={elem.companyName}
            days={elem.dayOfPosting}
            earning={elem.perHourEarning}
            location={elem.location}
          />
        );
      })}
    </div>
  );
};

export default App;
