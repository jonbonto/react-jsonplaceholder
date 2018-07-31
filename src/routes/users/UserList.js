import React from "react";
import SimpleCard from "../../components/SimpleCard";
import { getUserList } from "../../modules/users/user_api";

export default class UserList extends React.Component {
  state = {
    users: []
  };
  async componentDidMount() {
    const users = await getUserList();
    this.setState({
      users
    });
  }
  
  render() {
    const userList = this.state.users.map((user) => {
      return (
        <SimpleCard title={user.username} content={user.name} action="View" link={`/users/${user.id}`}/>
      );
    });
    return (
      <div>
        <h3>All users</h3>
        {userList}
      </div>
    );
  }
}