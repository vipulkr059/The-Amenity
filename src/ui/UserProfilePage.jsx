import React from "react";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useGuestByEmail } from "../features/guest/useGuestByEmail";
import Spinner from "../ui/Spinner";
import { useGetBookingsByGuest } from "../features/guest/useGetBookingsByGuest";
import BookingCard from "../ui/BookingCard";
import { FaArrowRightLong } from "react-icons/fa6";

const Container = styled.div`
  background-color: var(--color-grey-50);
  display: flex;
  flex-direction: column;
  gap: 8rem;
  padding: 20px;
  margin: 20px;
  height: 100vh;
  overflow-y: auto;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(650px, 1fr));
  gap: 20px;
  background-color: var(--color-grey-100);
  padding: 10px;
  border-radius: 15px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    padding: 0px;
  }
`;
const BannerContainer = styled.div`
  height: 200px;
  background-color: black;
  position: relative;
  border-radius: 15px;
`;

const ProfileContainer = styled.div`
  position: absolute;
  bottom: -60px;
  left: 20px;
  width: calc(100% - 40px);
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

  @media screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const ProfileName = styled.h1`
  color: #fff;
  font-size: 24px;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 3rem;
  border-radius: 15px;
  padding: 10px;
  background-color: var(--color-grey-100);
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

const UserProfilePage = () => {
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
  } = useGetBookingsByGuest(guest?.id);

  if (userLoading || guestLoading || bookingsLoading) return <Spinner />;

  return (
    <Container>
      <BannerContainer>
        <Image src={"/svg/logo-no-background.svg"} />
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
            return <BookingCard booking={booking} />;
          })}
        {!guestBooking && <p>No Booking yet</p>}
      </CardContainer>
    </Container>
  );
};

export default UserProfilePage;
