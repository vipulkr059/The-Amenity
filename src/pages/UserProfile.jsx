// UserProfilePage.js

import React from "react";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useGuestByEmail } from "../features/guest/useGuestByEmail";
import Spinner from "../ui/Spinner";
import { useGetBookingsByGuest } from "../features/guest/useGetBookingsByGuest";

const UserProfile = () => {
  const { user, isLoading } = useUser();
  if (isLoading) return <Spinner />;
  console.log(user);
  const { guest, isLoading: isFetching } = useGuestByEmail(user.email);
  if (isFetching) return <Spinner />;
  const { fullName, email, id } = guest;

  return (
    <ProfileContainer>
      <ProfileHeader>
        <h2>User Profile</h2>
        <p>Welcome back, {fullName}!</p>
      </ProfileHeader>
      <ProfileContent>
        <UserInfo>
          <h3>Personal Information</h3>
          <UserInfoItem>
            <label>Name:</label>
            <span>{fullName}</span>
          </UserInfoItem>
          <UserInfoItem>
            <label>Email:</label>
            <span>{email}</span>
          </UserInfoItem>
          <UserInfoItem>
            <label>Phone:</label>
            <span>123-456-7890</span>
          </UserInfoItem>
          {/* Add more user information items here */}
        </UserInfo>
        <BookingHistory>
          <h3>Booking History</h3>
        </BookingHistory>
      </ProfileContent>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

const ProfileHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 32px;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 18px;
    color: #666;
  }
`;

const ProfileContent = styled.div`
  display: flex;
  gap: 40px;
`;

const UserInfo = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
  }
`;

const UserInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  label {
    font-weight: bold;
    margin-right: 10px;
    color: #666;
  }

  span {
    color: #333;
  }
`;

const BookingHistory = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
  }
`;

export default UserProfile;
