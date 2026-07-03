import {
  Accordion,
  Badge,
  Box,
  Button,
  Checkbox,
  Divider,
  Group,
  MultiSelect,
  Paper,
  RangeSlider,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const Filters = () => {
  return (
    <Paper
      shadow="md"
      radius="lg"
      p="lg"
      withBorder
      style={{
        position: "sticky",
        top: 20,
      }}
    >
      <Group justify="space-between" mb="md">
        <Title order={4}>Filters</Title>

        <Badge color="indigo">
          New
        </Badge>
      </Group>

      <Divider mb="md" />

      <Accordion variant="contained" defaultValue="jobType">

        {/* Job Type */}

        <Accordion.Item value="jobType">
          <Accordion.Control>
            Job Type
          </Accordion.Control>

          <Accordion.Panel>

            <Stack gap={8}>
              <Checkbox label="Full Time" />
              <Checkbox label="Part Time" />
              <Checkbox label="Remote" />
              <Checkbox label="Hybrid" />
              <Checkbox label="Internship" />
              <Checkbox label="Contract" />
            </Stack>

          </Accordion.Panel>
        </Accordion.Item>

        {/* Experience */}

        <Accordion.Item value="experience">
          <Accordion.Control>
            Experience
          </Accordion.Control>

          <Accordion.Panel>

            <Stack gap={8}>
              <Checkbox label="Fresher" />
              <Checkbox label="1 Year" />
              <Checkbox label="2 Years" />
              <Checkbox label="3 Years" />
              <Checkbox label="5+ Years" />
            </Stack>

          </Accordion.Panel>
        </Accordion.Item>

        {/* Salary */}

        <Accordion.Item value="salary">
          <Accordion.Control>
            Salary Range (LPA)
          </Accordion.Control>

          <Accordion.Panel>

            <RangeSlider
              min={2}
              max={50}
              defaultValue={[5, 20]}
              labelAlwaysOn
            />

          </Accordion.Panel>
        </Accordion.Item>

        {/* Location */}

        <Accordion.Item value="location">
          <Accordion.Control>
            Location
          </Accordion.Control>

          <Accordion.Panel>

            <MultiSelect
              placeholder="Select City"
              data={[
                "Pune",
                "Mumbai",
                "Bangalore",
                "Hyderabad",
                "Delhi",
                "Noida",
                "Chennai",
              ]}
            />

          </Accordion.Panel>
        </Accordion.Item>

        {/* Skills */}

        <Accordion.Item value="skills">
          <Accordion.Control>
            Skills
          </Accordion.Control>

          <Accordion.Panel>

            <MultiSelect
              searchable
              placeholder="Select Skills"
              data={[
                "React",
                "Java",
                "Node JS",
                "Spring Boot",
                "Angular",
                "Vue",
                "Python",
                "SQL",
                "MongoDB",
                "AWS",
                "Docker",
              ]}
            />

          </Accordion.Panel>
        </Accordion.Item>

      </Accordion>

      <Button
        fullWidth
        mt="xl"
        color="red"
        variant="light"
      >
        Clear Filters
      </Button>

    </Paper>
  );
};

export default Filters;