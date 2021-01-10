"use strict";

const React = require("react");
const { Box, Text } = require("ink");
const BigText = require("ink-big-text");
const Gradient = require("ink-gradient");
const SelectInput = require("ink-select-input").default;
const open = require("open");

const handleSelect = (item) => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};

const createItems = (items) => {
  for (const item of items) {
    item.key = item.url || item.label;
  }

  return items;
};

const items = createItems([
  {
    label: "🌎  Website",
    url: "https://www.jsclouddev.com/",
  },
  {
    label: "💾  GitHub",
    url: "https://github.com/shaun-farrell",
  },
  {
    label: "🐦  Twitter",
    url: "https://twitter.com/intent/user?screen_name=jsclouddev",
  },
  {
    label: "📬  Email",
    url: "mailto:info@jsclouddev.com",
  },
  {
    label: "🚪  Quit",
    action() {
      process.exit();
    },
  },
]);

const menu = () => (
  <Box flexDirection="column">
    <Gradient name="pastel">
      <BigText text="Shaun Farrell" />
    </Gradient>
    <Box marginBottom={1}>
      <Text> Full Stack Developer</Text>
    </Box>
    <SelectInput items={items} onSelect={handleSelect} />
  </Box>
);

module.exports = menu;
