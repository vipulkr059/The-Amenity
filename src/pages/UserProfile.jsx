import React from "react";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useGuestByEmail } from "../features/guest/useGuestByEmail";
import Spinner from "../ui/Spinner";
import { useGetBookingsByGuest } from "../features/guest/useGetBookingsByGuest";
import BookingCard from "../ui/BookingCard";
import { FaArrowRightLong } from "react-icons/fa6";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 8rem;
  padding: 20px; /* Add padding */
  margin: 20px; /* Add margin */
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  background-color: var(--color-grey-100);
  padding: 10px;
  border-radius: 15px;
`;
const BannerContainer = styled.div`
  /* width: 100%; */
  height: 200px;
  background-color: black;
  position: relative;
  border-radius: 15px; /* Rounded border */
`;

const ProfileContainer = styled.div`
  position: absolute;
  bottom: -60px;
  left: 20px;
  width: calc(100% - 40px); /* Subtract padding from width */
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
`;

const ProfilePhoto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileName = styled.h1`
  color: #fff;
  font-size: 24px;
  margin-left: 20px;
`;

const Heading = styled.div`
  background-color: var(--color-grey-100);
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 3rem;
  border-radius: 15px;
  padding: 10px;
`;

const UserProfile = () => {
  const { user, isLoading: userLoading } = useUser();
  const {
    guest,
    isLoading: guestLoading,
    error: guestError,
  } = useGuestByEmail(user?.email);
  const {
    guestBooking,
    isLoading: bookingsLoading,
    error: bookingsError,
  } = useGetBookingsByGuest(5);

  if (userLoading || guestLoading || bookingsLoading) return <Spinner />;

  return (
    <Container>
      <BannerContainer
        style={{
          backgroundImage: `url(${"/png/logo-no-background.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <ProfileContainer>
          <ProfilePhoto
            src={
              user.user_metadata.avatar
                ? user.user_metadata.avatar
                : "/default-user.jpg"
            }
            alt="Profile"
          />
          <ProfileName>
            <div>{user.user_metadata.fullName}</div> <div>{user.email}</div>
          </ProfileName>
        </ProfileContainer>
      </BannerContainer>
      <Heading>
        Your Bookings
        <FaArrowRightLong />
      </Heading>
      <CardContainer>
        {guestBooking &&
          guestBooking.map((booking) => {
            return (
              <BookingCard
                key={booking.id}
                numGuests={booking.numGuests}
                numNights={booking.numNights}
                totalPrice={booking.totalPrice}
                status={booking.status}
                id={booking.id}
              />
            );
          })}
      </CardContainer>
    </Container>
  );
};

export default UserProfile;
