function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <div>
      <header className="progress">
        <progress max={numQuestions} value={index + (answer !== null)} />

        <p>
          Question <strong>{index + 1}</strong>/{numQuestions}
        </p>

        <p>
          <strong>{points}</strong>/{maxPossiblePoints}
        </p>
      </header>
    </div>
  );
}

export default Progress;
