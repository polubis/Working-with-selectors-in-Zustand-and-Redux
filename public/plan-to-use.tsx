export const Comments = () => {
  return (
    // We used injected ListItem component.
    <List<Comment> items={comments}>
      {({ item, ListItem }) => <ListItem {...item} key={item.id} />}
    </List>
  );
};

export const CommentsWithOwnListItem = () => {
  return (
    // Here we want to use our custom
    // list item component.
    <List<Comment> items={comments}>
      {({ item }) => (
        <li key={item.id} className="different-item">
          {item.content}
        </li>
      )}
    </List>
  );
};

export const CommentsWithHeaderAndFooter = () => {
  return (
    // Here we added
    <List<Comment>
      items={comments}
      header={<h1>My header!</h1>}
      footer={
        <footer>
          <button>First click button</button>
          <button>Second button</button>
        </footer>
      }
    >
      {({ item, ListItem }) => <ListItem {...item} key={item.id} />}
    </List>
  );
};
