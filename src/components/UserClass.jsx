import React from "react";
import { MapPin, AtSign } from "lucide-react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/itsakash123");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="space-y-4">
        <img
          src={avatar_url}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-brand-200"
        />
        <h2 className="font-semibold text-charcoal-900 text-lg">{name}</h2>
        <div className="flex items-center gap-2 text-charcoal-500 text-sm">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-charcoal-500 text-sm">
          <AtSign className="w-4 h-4" />
          <span>akashkumar</span>
        </div>
      </div>
    );
  }
}

export default UserClass;
