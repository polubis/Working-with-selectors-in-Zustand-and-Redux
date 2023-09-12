// ❌ The component is coupled with the application domain model.
import type { Comment } from "@api/services";

// ❌ The callbacks have weird and intuitive names.
export interface CommentsProps {
  comments: Comment[];
  nextClicked: () => void;
  previous: () => void;
  itemClick: (comment: Comment) => void;
}

export const Comments = ({
  comments,
  nextClicked,
  previous,
  itemClick
}: CommentsProps) => {
  return (
    // ❌ There is no option to apply custom class.
    <div className="comments">
      {/* ❌ Header cannot be replaced with something else. */}
      <h3>Comments list</h3>
      <ul className="list">
        {comments.map((comment) => (
          <li key={comment.id} className="list-item" onClick={itemClick}>
            {comment.content}
          </li>
        ))}
      </ul>
      {/* ❌ Only buttons can be used, any other case is impossible. */}
      <button onClick={previous}>See previous comments</button>
      <button onClick={nextClicked}>Load next comments</button>
    </div>
  );
};
