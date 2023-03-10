function ResumeResults({ body }) {
  let lines = body?.resume.split('\n');

  return (
    <div className='resume-results'>
      <div className='resume-results-title'>Resume Results</div>
      <div className='resume-results-text'>
        <ul>
          {lines?.map((line, index) => (
            <li key={index} className='mb-2'>
              {line}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ResumeResults;
