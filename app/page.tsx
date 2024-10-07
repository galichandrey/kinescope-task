"use client";

import React, { useState } from "react";

import {
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Paper,
} from "./components";

interface ListItemType {
  id: number;
  text: string;
  children?: ListItemType[];
}

export default function NestedListApp() {
  const [list, setList] = useState<ListItemType[]>([]);
  const [counter, setCounter] = useState(1);

  const addChild = (parentId: number) => {
    const updatedList = updateListForAdd(list, parentId);
    setCounter((prevCounter) => prevCounter + 1);
    setList(updatedList);
  };

  const deleteItem = (itemId: number) => {
    const updatedList = updateListForDelete(list, itemId);
    setList(updatedList);
  };

  const updateListForAdd = (
    items: ListItemType[],
    parentId: number
  ): ListItemType[] => {
    if (parentId === 0) {
      return [
        ...items,
        { id: counter, text: `Child ${counter}`, children: [] },
      ];
    }

    return items.map((item) => {
      if (item.id === parentId) {
        return {
          ...item,
          children: [
            ...(item.children || []),
            { id: counter, text: `Child ${counter}`, children: [] },
          ],
        };
      }
      if (item.children) {
        return {
          ...item,
          children: updateListForAdd(item.children, parentId),
        };
      }
      return item;
    });
  };

  const updateListForDelete = (
    items: ListItemType[],
    itemId: number
  ): ListItemType[] =>
    items
      .map((item) => {
        if (item.children) {
          const filteredChildren = updateListForDelete(item.children, itemId);
          return { ...item, children: filteredChildren };
        }
        return item;
      })
      .filter((item) => item.id !== itemId);

  const clearList = () => {
    setList([]);
  };

  const renderList = (items: ListItemType[], level: number = 2) =>
    items.map((item) => (
      <React.Fragment key={item.id}>
        <ListItem style={{ marginLeft: level * 10 }}>
          <ListItemText>{item.text}</ListItemText>
          <Button type="add" onClick={() => addChild(item.id)}>
            Add Child
          </Button>
          <Button type="delete" onClick={() => deleteItem(item.id)} />
        </ListItem>
        {item.children && item.children.length > 0 && (
          <Paper>{renderList(item.children, level + 1)}</Paper>
        )}
      </React.Fragment>
    ));

  return (
    <Container>
      <List>
        <ListSubheader>Nested List App</ListSubheader>
        <ListItem>
          <ListItemText>Main Parent</ListItemText>
          <Button type="add" onClick={() => addChild(0)}>
            Add Child
          </Button>
          <Button type="clear" onClick={clearList} />
        </ListItem>
        {renderList(list)}
      </List>
    </Container>
  );
}
