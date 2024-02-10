import { useState } from "react";
import { CabinTable } from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

const Cabins = () => {
  const [showForm, setshowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter/Sort</p>
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={() => setshowForm(!showForm)}>Add New Cabin</Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
};

export default Cabins;
