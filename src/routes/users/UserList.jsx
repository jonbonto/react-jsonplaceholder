import React from "react";
import { connect } from "react-redux";
import GridList from "@material-ui/core/GridList";

import UserCard from "./components/UserCard";
import { getUserList } from "../../modules/users/user_api";
import { fetchUsers } from "../../modules/users/user_actions";

export class UserList extends React.Component {
  
  async componentDidMount() {
    const users = await getUserList();
    this.props.fetchUsers(users);
  }
  
  render() {
    const userList = this.props.users.map((user) => (
      <UserCard title={user.username} content={user.name} action="View" link={`/users/${user.id}`}/>
    ));
    return (
      <div>
        <h3>All Users</h3>
        <GridList>
          {userList}
        </GridList>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.user.users
});

const mapDispatchToProps = {
  fetchUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
