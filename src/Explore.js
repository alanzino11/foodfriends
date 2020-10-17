import React, { useState, useEffect } from 'react';
import { 
  Heading,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Button,
  Checkbox, 
  Flex,
  Spinner,
  useDisclosure
} from "@chakra-ui/core";
import { FaFilter } from 'react-icons/fa';

import jsonprofiles from './profiles.json';
import veganprofiles from './vegans.json';
import './App.css'
import Profile from './components/profile/Profile';

const Explore = () => {
  const [profiles, setProfiles] = useState(jsonprofiles)
  const [isLoading, setLoading] = useState(false);
  const { isOpen, onClose } = useDisclosure();

  console.log(profiles)

  const filter = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500)
    setProfiles(veganprofiles)
  }

  return (
      <div className="explorepage">
        <Stack spacing={3}>
            <Heading as="h1" size="2xl">Food Friends</Heading>
            <Heading as="h2" size="xl">Explore</Heading>
        </Stack>
        <Flex align="center">
          <div className="filter-icon">
            <FaFilter size={20}/>
          </div>
          <div className="dietbutton">
          <Menu closeOnSelect={false}>
            <MenuButton as={Button} rightIcon="chevron-down" border="1px solid grey">
              Diet
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup title="Diet" type="checkbox">
                <MenuItemOption value="vegan">Vegan</MenuItemOption>
                <MenuItemOption value="keto">Keto</MenuItemOption>
                <MenuItemOption value="gluten-free">Gluten-Free</MenuItemOption>
              </MenuOptionGroup>
              <Button variantColor="blue" onClick={filter}>Apply</Button>
            </MenuList>
          </Menu>
          </div>
          <Menu closeOnSelect={false}>
            <MenuButton as={Button} rightIcon="chevron-down" border="1px solid grey">
              Price
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup title="Price" type="checkbox">
                <MenuItemOption value="$">$</MenuItemOption>
                <MenuItemOption value="$$">$$</MenuItemOption>
                <MenuItemOption value="$$$">$$$</MenuItemOption>
              </MenuOptionGroup>
              <Button variantColor="blue">Apply</Button>
            </MenuList>
          </Menu>
          <Checkbox variantColor="blue" defaultIsChecked paddingLeft={5}>
            Only My City
          </Checkbox>
        </Flex>
        {
          isLoading ? 
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            /> : (
            <Flex wrap="wrap" justify="space-around">
              {profiles.map(p => {
                return (
                  <div style={{ paddingBottom: "10px" }}>
                    <Profile profile={p}/>
                  </div>)
              })}
            </Flex>
          )
        }
      </div>
    )
}

export default Explore;