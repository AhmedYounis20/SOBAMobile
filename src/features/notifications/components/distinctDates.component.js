import styled from "styled-components";
import { DateContainer, DateText } from "./notifications.styles";

const DistinctDates = ({ date }) => {
  return (
    <DateContainer>
      <DateText>{date}</DateText>
    </DateContainer>
  );
};

export default DistinctDates;
