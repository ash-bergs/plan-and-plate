import { Flex, Text } from '@mantine/core';
import { Step } from '@/types/recipes';

type StepsProps = {
  steps: Step[];
};

const Steps = ({ steps }: StepsProps) => {
  if (!steps.length) {
    return (
      <Text>
        There are no steps for this recipe! If this is your recipe you can edit, or you can request
        the author complete it!
      </Text>
    );
  }

  return (
    <Flex direction="column" px="2" gap="16px">
      {steps.map((step, index) => (
        <Text key={index}>
          {step.number}. {step.content}
        </Text>
      ))}
    </Flex>
  );
};
export default Steps;
