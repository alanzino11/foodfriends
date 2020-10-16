import React from 'react';
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
} from "@chakra-ui/core";

import profiles from './profiles.json';
import './App.css'
import Profile from './components/profile/Profile';

const Explore = () => {
  console.log(profiles[0])
    return (
        <div className="explorepage">
          <Stack spacing={3}>
              <Heading as="h1" size="2xl">Food Friends</Heading>
              <Heading as="h2" size="xl">Explore</Heading>
          </Stack>
          <Flex align="center">
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
                <Button variantColor="blue">Apply</Button>
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
          <Profile/>
        </div>
    )
}

export default Explore;