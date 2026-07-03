import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

import {
  IconBriefcase,
  IconMapPin,
  IconSearch,
} from "@tabler/icons-react";

const JobsHero = () => {
  return (
    <Box
      py={70}
      style={{
        background:
          "linear-gradient(135deg,#EEF2FF,#FFFFFF)",
      }}
    >
      <Container size="xl">

        <Stack align="center" mb={45}>

          <Title
            order={1}
            ta="center"
          >
            Find Your Dream Job
          </Title>

          <Text
            c="dimmed"
            ta="center"
            maw={700}
          >
            Search thousands of verified jobs from India's
            top companies.
          </Text>

        </Stack>

        <Paper
          shadow="xl"
          radius="xl"
          p="xl"
        >

          <Grid>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <TextInput
                size="lg"
                radius="xl"
                placeholder="Job title or keyword"
                leftSection={<IconSearch size={18} />}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 3 }}>
              <TextInput
                size="lg"
                radius="xl"
                placeholder="Location"
                leftSection={<IconMapPin size={18} />}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 3 }}>
              <Select
                size="lg"
                radius="xl"
                placeholder="Experience"
                leftSection={<IconBriefcase size={18} />}
                data={[
                  "Fresher",
                  "1 Year",
                  "2 Years",
                  "3 Years",
                  "5+ Years",
                ]}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 2 }}>
              <Button
                size="lg"
                radius="xl"
                fullWidth
              >
                Search
              </Button>
            </Grid.Col>

          </Grid>

        </Paper>

      </Container>
    </Box>
  );
};

export default JobsHero;