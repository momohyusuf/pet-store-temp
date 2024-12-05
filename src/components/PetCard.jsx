import { Card, Tag, Button } from "antd";
import { Link } from "react-router";

const { Meta } = Card;

function PetCard(props) {
  return (
    <Card
      hoverable
      cover={
        <img
          className="w-[500px] h-[300px] object-cover"
          alt="example"
          src={props.photo}
        />
      }
    >
      <Meta
        title={props.name}
        description={
          <div className="flex flex-col gap-3">
            <p>
              <strong>Race:</strong> {props.race}
            </p>
            <p>
              <strong>Type:</strong> {props.type}
            </p>
            <p>
              <strong>location:</strong> {props.location}
            </p>

            <div>
              {props.isAdopted === false ? (
                <Tag color="success">Available</Tag>
              ) : (
                <Tag color="error">Adopted</Tag>
              )}
            </div>

            <Button
              disabled={props.isAdopted === false ? false : true}
              onClick={props.handlePetAdoption}
              block
            >
              Adopt pet
            </Button>

            <Link to={`/store/${props.petId}`}>
              <Button block>More details</Button>
            </Link>
          </div>
        }
      />
    </Card>
  );
}

export default PetCard;
