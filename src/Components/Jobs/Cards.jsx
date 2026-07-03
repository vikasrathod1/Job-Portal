import {
  Box,
  Button,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  Badge,
} from "@mantine/core";
import { IconMapPin, IconBriefcase, IconClock } from "@tabler/icons-react";

const JobCard = ({ job }) => {
  return (
    <Paper shadow="sm" radius="lg" p="xl" withBorder>
      <Stack gap="md">
        <Group justify="space-between" align="flex-start">
          <Box>
            <Title order={4}>{job.title}</Title>
            <Text fw={600} c="indigo" mt={4}>
              {job.company}
            </Text>
          </Box>
          <Badge color="green" variant="light" radius="xl">
            {job.type}
          </Badge>
        </Group>

        <Group gap="lg">
          <Group gap={6}>
            <IconMapPin size={18} color="#666" />
            <Text c="dimmed">{job.location}</Text>
          </Group>

          <Group gap={6}>
            <IconBriefcase size={18} color="#666" />
            <Text c="dimmed">{job.experience}</Text>
          </Group>

          <Group gap={6}>
            <IconClock size={18} color="#666" />
            <Text c="dimmed">{job.posted}</Text>
          </Group>
        </Group>

        <Group>
          <Badge variant="outline" color="blue">
            {job.salary}
          </Badge>
          {job.tags.map((tag, index) => (
            <Badge key={index} variant="light" color="gray">
              {tag}
            </Badge>
          ))}
        </Group>

        <Group justify="flex-end" mt={10}>
          <Button radius="xl" size="md">
            View Details
          </Button>
          <Button variant="outline" radius="xl" size="md">
            Save
          </Button>
        </Group>
      </Stack>
    </Paper>
  );
};

export default JobCard;