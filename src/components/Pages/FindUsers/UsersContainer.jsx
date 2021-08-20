import Users from "./Users";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
}

const UsersContainer = connect(mapStateToProps)(Users)

export default UsersContainer;