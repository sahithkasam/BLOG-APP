import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";

export default function Post({_id, title, summary, cover, content, createdAt, author}) {
  // Determine if cover is a video based on file extensions
  const isVideo = cover?.endsWith('.mp4') || cover?.endsWith('.webm') || cover?.endsWith('.ogg') || cover?.endsWith('.mov') || cover?.endsWith('.avi');
  const mediaUrl = 'http://localhost:4000/' + cover;

  return (
    <div className="post">
      <div className="media">
        <Link to={`/post/${_id}`}>
          {isVideo ? (
            <video src={mediaUrl} alt="cover video" controls />
          ) : (
            <img src={mediaUrl} alt="cover image" />
          )}
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
