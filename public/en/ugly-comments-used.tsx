// @@@ The usage @@@
 
// It's a little bit ugly...
<Comments
  comments={[]}
  nextClicked={() => {}}
  previous={() => {}}
  itemClick={() => {}}
/>
 
// If we want to change the comments UI, we need
// to add wrappers or style directly in CSS... It may
// cause weird layout bugs.
<div className="some-wrapper-to-style">
  <Comments
    comments={[]}
    nextClicked={() => {}}
    previous={() => {}}
    itemClick={() => {}}
  />
</div>
