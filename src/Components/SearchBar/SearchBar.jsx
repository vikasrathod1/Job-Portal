import {
  Box,
  Button,
  Container,
  Grid,
  Select,
  TextInput,
  Paper,
} from "@mantine/core";
import {
  IconSearch,
  IconMapPin,
  IconBriefcase,
} from "@tabler/icons-react";

const SearchBar = () => {
  return (
    <Container size="xl" py={50}>
      <Paper
        shadow="xl"
        radius="xl"
        p="xl"
        withBorder
      >
        <Grid align="center">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <TextInput
              placeholder="Job title, keyword..."
              leftSection={<IconSearch size={18} />}
              radius="xl"
              size="md"
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 3 }}>
            <Select
              placeholder="Select Category"
              leftSection={<IconBriefcase size={18} />}
              radius="xl"
              data={[
                "Software",
                "Marketing",
                "Sales",
                "Finance",
                "Design",
                "HR",
              ]}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 3 }}>
            <TextInput
              placeholder="Location"
              leftSection={<IconMapPin size={18} />}
              radius="xl"
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 2 }}>
            <Button
              fullWidth
              radius="xl"
              size="md"
            >
              Search
            </Button>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SearchBar;