'use client';

import { Flex, Grid, Title } from '@mantine/core';
import CleanupRatingBanner from '../Ratings/CleanupRatingBanner';

type RecipeRatingProps = {
  difficulty?: string;
  cleanupRating?: number;
  totalCookTime: number;
};

const RecipeRating = ({ difficulty, cleanupRating, totalCookTime }: RecipeRatingProps) => {
  const timeInvestment = getCookTimeStat(totalCookTime);

  return (
    <Flex direction="column" gap="16px">
      <Title
        size="h2"
        fz="20px"
        style={{
          alignSelf: 'center',
        }}
      >
        Recipe Rating
      </Title>
      <Grid columns={2} gutter="xs" w="300px">
        {difficulty && (
          <>
            <Grid.Col span={1}>Difficulty</Grid.Col>
            <Grid.Col span={1}>{difficulty}</Grid.Col>
          </>
        )}
        {cleanupRating && (
          <>
            <Grid.Col span={1}>Cleanup</Grid.Col>
            <Grid.Col span={1}>
              <CleanupRatingBanner rating={cleanupRating} />
            </Grid.Col>
          </>
        )}
        {timeInvestment && (
          <>
            <Grid.Col span={1}>Time</Grid.Col>
            <Grid.Col span={1}>{timeInvestment}</Grid.Col>
          </>
        )}
      </Grid>
    </Flex>
  );
};

export default RecipeRating;

//TODO: Add better type support - an object? and define some more/better returns here
const getCookTimeStat = (time: number) => {
  if (time < 60) {
    return 'Less than an hour!';
  }
  if (time >= 60 && time <= 120) {
    return 'One to two hours';
  }
  if (time > 120) {
    return 'A commitment';
  }
  return null;
};
