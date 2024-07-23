import { Flex } from '@mantine/core';
import { GiSaucepan } from 'react-icons/gi';

const CleanupRatingBanner = ({ rating }: { rating: number }) => {
  const totalPots = 5;
  return (
    <Flex>
      {Array.from({ length: totalPots }, (_, index) => (
        <GiSaucepan key={index} color={index < rating ? 'pink' : 'lightgrey'} size={24} />
      ))}
    </Flex>
  );
};

export default CleanupRatingBanner;
