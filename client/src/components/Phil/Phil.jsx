/* eslint-disable react/prop-types */
import './Phil.scss';

export default function Phil({
  color, background, content,
}) {
  return (
    <div className='philWrapper' style={{ background, color }}>
      {content}
    </div>
  );
}
