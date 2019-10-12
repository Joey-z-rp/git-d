import React from 'react';
import { connect } from "react-redux";

const UserAvatar = ({ user, size }) => (
    <img
        className={`user-avatar ${size || ""}`}
        alt="user avatar"
        src={user.avatar}
    />
);

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(UserAvatar);
